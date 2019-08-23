describe('My 2 Test', function() {
    it('Find the content type', function() {
        // estas pruebas solo funcionan con el rut 128338179

        cy.viewport( 1210, 815)

        cy.server()

        cy.route({
            method: 'GET',
            url: '/mibancochile/rest/empresa/depositos-a-plazo-flujo-firma/vigentes',
        }).as('listado_vigente')

        cy.visit('http://localhost:8000/#/deposito-a-plazo-empresas-v2/inscribir/simular/pasoUno')

        // cy.wait('@listado_vigente').then((xhr) => {





            
         

        })

    })
})