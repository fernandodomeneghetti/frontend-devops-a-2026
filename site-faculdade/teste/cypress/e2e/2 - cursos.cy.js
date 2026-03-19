describe('Testes Pagina de Cursos', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5500/cursos.html')
    })

    it('Filtro de Curso por nome', () => {
        cy.get('input[type=search]').type('Ciências da Computação')
        cy.get('table tbody tr').should('have.length', 1)
    })

    it('Filtro de Curso por semestre', () => {
        cy.get('input[type=search]').type('8 semestres')
        cy.get('table tbody tr').should('have.length', 2)
    })

    it('Ordenação dos cursos por nome', () => {
        cy.get('th').contains('Cursos').click()
        cy.get('th').contains('Cursos').click()
        cy.get('th').contains('Cursos').click()
        cy.get('table tbody tr:first-child td:first-child')
            .should('contain', 'Analise de Sistema')
    })
})