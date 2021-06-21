describe('Error', () => {
  it('should display error message for the 404 status code', () => {
    cy.visit('http://localhost:3000')
      .get('input[name="repoName"]').type('repo-creepo')
      .get('select').eq(0).select('javascript')
      .get('select').eq(1).select('Yes')
      .intercept('https://api.github.com/search/repositories?q=repo-creepo+language:javascript&sort=stars&page=1', {
        statusCode: 404
      })
      .get('button[value="Submit"]').click()
      .get('.error-msg')
      .contains('Sorry, we couldn\'t find repository you were looking for')
  })

  it('should display error message when reached the search limit', () => {
    cy.visit('http://localhost:3000')
      .get('input[name="repoName"]').type('repo-creepo')
      .get('select').eq(0).select('javascript')
      .get('select').eq(1).select('Yes')
      .intercept('https://api.github.com/search/repositories?q=repo-creepo+language:javascript&sort=stars&page=1', {
        statusCode: 403
      })
      .get('button[value="Submit"]').click()
      .get('.error-msg')
      .contains('Sorry, you\'ve reached the search limit. Please try again in an hour.')
  })

  it.only('should display error message for server error', () => {
    cy.visit('http://localhost:3000')
      .get('input[name="repoName"]').type('repo-creepo')
      .get('select').eq(0).select('javascript')
      .get('select').eq(1).select('Yes')
      .intercept('https://api.github.com/search/repositories?q=repo-creepo+language:javascript&sort=stars&page=1', {
        statusCode: 500
      })
      .get('button[value="Submit"]').click()
      .get('.error-msg')
      .contains('Internal Server Error. Our whole team are now aware.')
  })
})