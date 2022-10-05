/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.intercept(
      '/api/merchant/auth?application=merchant',
      { times: 100 },
      { statusCode: 200, body: {} }
    ).as('response');

    cy.visit('/cypress/fixtures/index.html')

    for (let index = 0; index < 101; index++) {
      cy.wait('@response').its('response.statusCode').should('eq', 200)

    }

  })
})
