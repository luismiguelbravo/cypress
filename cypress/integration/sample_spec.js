describe('My First Test', function() {
    it('Find the content type', function() {
        // estas pruebas solo funcionan con el rut 128338179

        cy.viewport( 1210, 815)

        cy.server()

        cy.route({
            method: 'GET',
            url: '/mibancochile/rest/empresa/depositos-a-plazo-flujo-firma/vigentes',
        }).as('listado_vigente')

        cy.route({
            method: 'GET',
            url: '/mibancochile/rest/empresa/depositos-a-plazo-flujo-firma/99411001000845565?oficina=994&origen=CORE',
        }).as('detalle_vigente')

        cy.visit('http://localhost:8000/#/deposito-a-plazo-empresas-v2/consultar/cartola-vigente')

        cy.wait('@listado_vigente').then((xhr) => {

            // MENSAJE DAT RENOVABLES
            cy.contains('Los DAP destacados en color con suceptibles a renovación o abono')
            cy.contains('Para realizar esta acción dirijase a la sección Invertir, Renovar / Abonar')

            /*
            // MENSAJE LISTA VACIA
            cy.contains('Estimado cliente')
            cy.contains('No hay depósitos para consultar')
            */

            // hacer click en el selector de fechas
            /*
            cy.get('.date-picker').click()
            cy.get('.left > .calendar-table > .table-condensed > thead > :nth-child(1) > .month > .monthselect').select('5')
            cy.get('.left > .calendar-table > .table-condensed > tbody > :nth-child(2) > [data-title="r1c0"]').click()
            cy.get('.left > .calendar-table > .table-condensed > tbody > :nth-child(5) > [data-title="r4c6"]').click()

            cy.get(".applyBtn").click()
            */

            //verificar que se aplico el filtro de busqueda
            cy.contains('99411001000845565')
            cy.contains('99411001000845581')
            cy.contains('99411001000845599')
            cy.contains('99411001000845604')
            cy.contains('99411001000845345')
            cy.contains('99411001000845492')
            cy.contains('99411001000845515')
            cy.contains('99411001000845523')
            cy.contains('99411001000845531')
            cy.contains('99411001000845353')
            cy.contains('99411001000845361')
            cy.contains('99411001000845379')
            cy.contains('99411001000845387')
            cy.contains('99411001000845395')
            cy.contains('99411001000845400')
            cy.contains('99411001000845418')
            cy.contains('99413001000845426')
            cy.contains('99411001000845434')

            // haciendo click en la lupa de busqueda
            cy.get(".search-bar__actions > :nth-child(2) > a").click()

            // escribiendo el valor que quiero buscar
            cy.get('input[ng-model="filtroConsulta.busquedaGeneral"]').type('99411001000845565')

            // hacer click en el boton buscar
            cy.get('.default').contains('Buscar').click()

            //verificar el registro encontrado
            cy.contains('99411001000845565')
            cy.contains('Depósito Plazo Fijo')
            cy.contains('CLP')
            cy.contains('2.000.000')
            cy.contains('2.000.887')
            cy.contains('17/06/2019')
            cy.contains('Vencido')

            // ver el detalle del deposito
            cy.get('.btn-open-aside').click()

            cy.wait('@detalle_vigente').then((xhr) => {

                //verificando el detalle del deposito
                cy.contains('Número Depósito')
                cy.contains('99411001000845565')
                cy.contains('Moneda')
                cy.contains('CLP')
                cy.contains('Monto de Inversión')
                cy.contains('2.000.000')
                cy.contains('Tasa Base (30 días)')
                cy.contains('2,28000%')
                cy.contains('Tipo de Depósito')
                cy.contains('Depósito Plazo Fijo')
                cy.contains('Ganancia')
                cy.contains('0')
                cy.contains('Estado')
                cy.contains('Vencido')
                cy.contains('Monto a recibir')
                cy.contains('2.000.887')
                cy.contains('Plazo')
                cy.contains('7 días')
                cy.contains('Tasa período')
                cy.contains('0,04433%')
                cy.contains('Fecha de vencimiento')
                cy.contains('24/06/2019')
                cy.contains('Fecha inversión original')
                cy.contains('17/06/2019')
                cy.contains('Fecha última renovación')
                cy.contains('Abono al vencimiento')
                cy.contains('Abono en Cuenta Corriente')
                cy.contains('Aviso al vencimiento')
                cy.contains('Cuenta de cargo')
                cy.contains('Cuenta de abono')
                cy.contains('00-000-16741-10')
                cy.contains('Endosable')
                cy.contains('No')
                cy.contains('Orden de no pago')
                cy.contains('Custodia')
                cy.contains('En garantía')
                cy.contains('No')
                cy.contains('RUT tomador')
                cy.contains('98.000.000-1')
                cy.contains('RUT beneficiario')
                cy.contains('98.000.000-1')
                cy.contains('Oficina contratación')
                cy.contains('ENTEL VISA')
            })

            // cerrar el modal
            cy.get('.modal-header > .btn').click()

            cy.wait(2000)
                //limpiar los filtros de busqueda
            cy.get('.flex-end > .btn-link').contains('Limpiar').click().click()

            //cy.get('.ui-select-container > .ui-select-match > .btn-default > .caret').click()
            
         

        })

    })
})