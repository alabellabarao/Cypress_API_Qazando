// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('BuscarDeviceEspecifico', (device_id) => {

        cy.request({
            method: 'GET',
            url: `/objects/${device_id}`,
            failOnStatusCode: false
        }).then((response) => { return response })

    })

Cypress.Commands.add('CadastrarDeviceEspecifico', (payload) => {

    cy.request({
        method: 'POST',
         url: '/objects',
        failOnStatusCode: false,
        body: payload
    }).then((response) => { return response })

})


Cypress.Commands.add('CadastrarDeviceSemDados', () => {

    cy.request({
        method: 'POST',
         url: '/objects',
        failOnStatusCode: false,
        body: ''
    }).then((response) => { return response })

})


Cypress.Commands.add('DeletarDevice', (deviceId) => {

    cy.request({
        method: 'DELETE',
         url: `/objects/${deviceId}`,
        failOnStatusCode: false,
        }).then((response) => { return response })

})
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })