/// <reference types="cypress"/>
describe('Buscar Dispositivos', () => {
    it('Buscar dispositivo específico', ()=> {
        const device_id = '7'      

        cy.BuscarDeviceEspecifico(device_id)
            .then((response) => {
                expect(response.status).equal(200)
                expect(response.body).not.empty
                expect(response.body.id).equal(device_id)
                expect(response.body.id).not.empty
                expect(response.body.name).equal('Apple MacBook Pro 16')
                expect(response.body.name).not.empty
                expect(response.body.data).not.empty
                expect(response.body.data.year).not.string
                expect(response.body.data.year).equal(2019)
                expect(response.body.data.price).not.string
                expect(response.body.data.price).equal(1849.99)
                expect(response.body.data['CPU model']).equal('Intel Core i9')
                expect(response.body.data['CPU model']).not.empty
                expect(response.body.data['CPU model']).not.NaN
                expect(response.body.data['CPU model']).not.null
                expect(response.body.data['Hard disk size']).to.equal('1 TB')
                expect(response.body.data['Hard disk size']).not.empty
                expect(response.body.data['Hard disk size']).not.NaN
        })
    })

   it('Buscar dispositivo inexistente', () => {
     const device_id = 'velho7'      

     cy.BuscarDeviceEspecifico(device_id)
        .then((response) => {
            expect(response.status).equal(404)
            expect(response.body.error).equal(`Oject with id=${device_id} was not found.`)
        })
    })
})