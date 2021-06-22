describe('Navbar menu redirects to Activities page', () => {
    it('Redirects to Categories page', () => {
        cy.visit('https://ultimatestackdeveloper.netlify.app/')
        cy.get('.yellow-button').click()
        cy.url().should('include', '/categories')
        cy.get('#ux-button').click()
        cy.url().should('include', '/articles?categoryId=')
        cy.get(':nth-child(1) > .article-row-container > .go-to-article-button').click()
        cy.url().should('include', '/article?articleId=')
    })
})
