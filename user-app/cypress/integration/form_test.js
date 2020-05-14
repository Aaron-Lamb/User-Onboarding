describe('Testing for the user-onboarding project', () => {
    it('Tests all the inputs', () => {
        cy.visit('http://localhost:3000')
        cy.get('#name').type('Bill E. Bob').should('have.value', 'Bill E. Bob')
        cy.get('#email').type('Some').should('contain', 'Please input a valid email address')
    })
})