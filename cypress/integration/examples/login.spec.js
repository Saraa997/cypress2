describe('Login testovi', () => {
    it ('Posetite stranicu', () => {
        cy.visit('/')
    })
    it ('Kliknti na login',() => {
        cy.visit('/')
        cy.get('.nav-link').eq(1).click()
    })
    it ('Login with valid credentials', () => {
        cy.visit ('/')
        cy.get('a[href="/login"]').click()
        cy.get('#email').type('test123123@test.com')
        cy.get('#password').type('test123123')
        cy.get('button').click()
    })
    it.only ('Kliknuti na logout', () => {
        cy.visit('/')
        cy.get('a[href="/login"]').click()
        cy.get('#email').type('test123123@test.com')
        cy.get('#password').type('test123123')
        cy.get('button').click()
        //cy.wait(500)
        cy.get('.nav-link').should('have.length', 4)
        cy.get('.nav-link').eq(3).click()
    })
})