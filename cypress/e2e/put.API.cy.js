/// <reference types="cypress"/>

describe('Alterar Dispositivo', () => {
    
    const payload_altera_device = require ('../fixtures/alterar_Device_Sucesso.json')
    const payload_cadastro_device = require ('../fixtures/cadastrar_Device_Sucesso.json')

    it('Alterar um dispositivo', ()=> {
                      
            cy.request({
                method: 'POST',
                 url: '/objects',
                failOnStatusCode: false,
                body: payload_cadastro_device
            }).as('postResultado')
    
            cy.get('@postResultado')
                .then((response_post) => {
                    expect(response_post.status).equal(200)
                    expect(response_post.body.name).equal('Apple MacBook Pro 16')
                    expect(response_post.body.data['CPU model']).equal('Intel Core i9')
                    expect(response_post.body.data['Hard disk size']).equal('1 TB')
                    expect(response_post.body.data.year).equal(2019)
                    expect(response_post.body.data.price).equal(1849.99)
                    expect(response_post.body.data['color']).equal('silver')

            cy.request({
                method: 'PUT',
                url: `/objects/${response_post.body.id}`,
                failOnStatusCode: false,
                    body: payload_altera_device
            }).as('putResultado')

            cy.get('@putResultado')
                .then((response_put) => {
                expect(response_put.status)
                    .equal(200)
                expect(response_put.body.name)
                    .equal(payload_altera_device.name)
                expect(response_put.body.data['CPU model'])
                    .equal('Intel Core i9 - NOVO')
                expect(response_put.body.data['Hard disk size'])
                    .equal('1 TB - com memória plus')
                expect(response_put.body.data.year)
                    .equal(payload_altera_device.data.year)
                expect(response_put.body.data.price)
                    .equal(1999.01)
                expect(response_put.body.name)
                    .equal('Apple MacBook Pro 16 - NOVO')
                expect(response_put.body.data['CPU model'])
                    .equal(payload_altera_device.data["CPU model"])
                expect(response_put.body.data['Hard disk size'])
                    .equal(payload_altera_device.data["Hard disk size"])
                expect(response_put.body.data.year)
                    .equal(2010)
                expect(response_put.body.data.price)
                    .equal(payload_altera_device.data.price)
                expect(response_put.body.data['color']).equal('silver - NOVO')
                     
            })
        })    
           
    })        
    
})