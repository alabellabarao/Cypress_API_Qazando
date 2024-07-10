/// <reference types="cypress"/>
describe('Deletar um Dispositivo', () => { 

    const payload_cadastro_device = require ('../fixtures/cadastrar_Device_Sucesso.json')
    it('Cadastrar e deletar dispositivo específico', ()=> {
       
        cy.CadastrarDeviceEspecifico(payload_cadastro_device).as('postResultado')

            cy.CadastrarDeviceEspecifico(payload_cadastro_device)
                .then((response_post) => {
                    expect(response_post.status).equal(200)
                    const deviceId = response_post.body.id
     
            cy.DeletarDevice(deviceId)
                .then((response_del) => {
                    expect(response_del.status).equal(200)
                    expect(response_del.body.message)
                        .equal(`Object with id = ${deviceId} has been deleted.`)
                })    
            })        
    }) 
    
})  