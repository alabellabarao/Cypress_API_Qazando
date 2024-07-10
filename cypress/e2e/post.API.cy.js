/// <reference types="cypress"/>


describe('Cadastrar Dispositivo', () => {

    const payload_cadastro_device = require ('../fixtures/cadastrar_Device_Sucesso.json')
    it('Cadastrar um dispositivo', ()=> {
    const dataAtual = new Date().toISOString().slice(0, 10)
    const dataAtual16 = new Date().toISOString().slice(0, 16)

    cy.CadastrarDeviceEspecifico(payload_cadastro_device).as('postResultado')
  
    cy.get('@postResultado').then((response) => {
        expect(response.status).equal(200)
        expect(response.status).not.NaN
        expect(response.body).not.empty
        expect(response.body).to.exist
        expect(response.body.id).not.empty
        expect(response.body.name).equal('Apple MacBook Pro 16')
        expect(response.body.name).not.empty
        expect(response.body.data).not.empty
        expect(response.body.createdAt).not.empty
        expect(response.body.data.year).not.NaN
        expect(response.body.data.year).equal(2019)
        expect(response.body.data.price).equal(1849.99)
        expect(response.body.data.price).not.NaN
        expect(response.body.data['CPU model']).not.empty
        expect(response.body.data['CPU model']).equal('Intel Core i9')
        expect(response.body.data['Hard disk size']).not.empty
        expect(response.body.data['Hard disk size']).equal('1 TB')
        expect(response.body.data['color']).equal('silver')
        expect(response.body.createdAt.slice(0, 10)).equal(dataAtual)
        expect(response.body.createdAt.slice(0, 16)).equal(dataAtual16)

                //console.log(new Date().toISOString().slice(0, 10))
                //console.log(new Date().toISOString().slice(0, 16))
                
            
        })
       
    })

    it('Cadastrar um dispositivo sem dados', ()=> {
          
        cy.CadastrarDeviceSemDados('')
            .then((response) => {
            expect(response.status).equal(400)
            expect(response.body.error).equal("400 Bad Request. If you are trying to create or update the data, potential issue is that you are sending incorrect body json or it is missing at all.")  
            })
        })
})

