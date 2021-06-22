describe('Navbar menu redirects to Activities page', () => {
    it('Redirects to Categories page', () => {
        cy.visit('https://ultimatestackdeveloper.netlify.com/the/architect')
        cy.get('#username').type('tbuga')
        cy.get('#password').type('4dm1n?!')
        cy.get('.yellow-button').click()
        cy.url().should('include', '/dashboard')



    })
})
