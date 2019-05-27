describe('My First Test', function() {
    it('Find the content type', function() {
        cy.visit('https://example.cypress.io')

        // cy.pause() // detiene la ejecucionde las pruebas e2e
        // cy.debug() // detine la ejecuecion de las pruebas y abre el debuger de google chrome

        cy.contains('type').click()

        // Should be on a new URL which includes '/commands/actions'
        cy.url().should('include', '/commands/actions')

            // Get an input, type into it and verify that the value has been updated
        cy.get('.action-email')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com')

        cy.get('#password1')
            .type('clave')
    })
})