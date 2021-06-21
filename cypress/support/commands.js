import repoCreepo from '../fixtures/repo-crepo'
import reactionary from '../fixtures/reactionary'

const repoCreepoPath = 'https://api.github.com/search/repositories?q=repo-creepo+language:javascript&sort=stars&page=1'
const reactionaryPath = 'https://api.github.com/search/repositories?q=reactionary+language:javascript&sort=stars&page=1'

Cypress.Commands.add('interceptRepoCreepoCard', () => {
  cy.intercept(repoCreepoPath, repoCreepo)
})

Cypress.Commands.add('interceptReactionary', () => {
  cy.intercept(reactionaryPath, reactionary)
})