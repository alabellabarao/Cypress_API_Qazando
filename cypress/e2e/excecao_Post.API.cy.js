/// <reference types="cypress"/>
describe('Cadastrar Dispositivo', () => {
    
    it('Cadastrar um dispositivo sem mandar dados', ()=> {
        
        cy.request({
            method: 'POST',
             url: '/objects',
            failOnStatusCode: false,
        }).as('postResultado')


        cy.get('@postResultado')
            .then((response) => {
                expect(response.status).equal(400)
                expect(response.body.error).equal('400 Bad Request. If you are trying to create or update the data, potential issue is that you are sending incorrect body json or it is missing at all.')
                
            })
    })
})