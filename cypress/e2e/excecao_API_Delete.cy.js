/// <reference types="cypress"/>
describe('Deletar um Dispositivo', () => {
 
       it('Deletar um dispositivo inexistente', ()=> {
    
        const id_inexistente = 123456
            cy.request({
                method: 'DELETE',
                //url: `/objects/Carlos da Silva`,
                url: `/objects/${id_inexistente}`,
                failOnStatusCode: false,
            }).as('deleteResultado')

            cy.get('@deleteResultado')
                .then((response_del) => {
                expect(response_del.status)
                    .equal(404)
                expect(response_del.body.error)
                    .equal(`Object with id = ${id_inexistente} doesn't exist.`)
                // expect(response_del.body.error)
                        //  .equal(`Object with id = Carlos da Silva doesn't exist.`)
            }) 
        }) 
        
        it('Deletar um dispositivo que é bloqueado', ()=> {
            cy.request({
                method: 'DELETE',
                //url: `/objects/Carlos da Silva`,
                url: `/objects/7`,
                failOnStatusCode: false,
            }).as('deleteResultado')

            cy.get('@deleteResultado')
                .then((response_del) => {
                expect(response_del.status)
                    .equal(405)
                expect(response_del.body.error)
                    .equal(`7 is a reserved id and the data object of it cannot be deleted. You can create your own new object via POST request and try to send a DELETE request with new generated object id.`)
                // expect(response_del.body.error)
                        //  .equal(`Object with id = Carlos da Silva doesn't exist.`)
            }) 
        })
           
})        
    
