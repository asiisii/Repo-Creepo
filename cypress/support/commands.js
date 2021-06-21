import repoCreepo from "../fixtures/repo-crepo"

const path = 'https://api.github.com/search/repositories?q=repo-creepo+language:javascript&sort=stars&page=1'

Cypress.Commands.add('interceptRepoCreepoCard', () => {
  cy.intercept(path, repoCreepo)
})