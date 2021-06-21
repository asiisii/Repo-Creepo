import repoCreepo from '../fixtures/repo-crepo'
import reactionary from '../fixtures/reactionary'
import reactionary2 from '../fixtures/reactionary2'

const repoCreepoPath = 'https://api.github.com/search/repositories?q=repo-creepo+language:javascript&sort=stars&page=1'
const reactionaryPath = 'https://api.github.com/search/repositories?q=reactionary+language:javascript&sort=stars&page=1'
const reactionary2Path = 'https://api.github.com/search/repositories?q=reactionary+language:javascript&sort=stars&page=2'

//intercept for repoCreepo repository
Cypress.Commands.add('interceptRepoCreepoCard', () => {
  cy.intercept(repoCreepoPath, repoCreepo)
})

//intercept for Reactionary repository page : 1
Cypress.Commands.add('interceptReactionary', () => {
  cy.intercept(reactionaryPath, reactionary)
})

//intercept for Reactionary repository page : 2
Cypress.Commands.add('interceptReactionary2', () => {
  cy.intercept(reactionary2Path, reactionary2)
})