it('test basic navigation for mobile', () => {
  cy.visit('/')
  cy.title().should('eq', 'Varlet App Template')
  cy.url().should('eq', 'http://localhost:10086/#/layout/home')

  cy.get('.var-card').first().click()
  cy.url().should('eq', 'http://localhost:10086/#/layout/home/detail')
})
