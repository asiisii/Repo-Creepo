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
      .get('.error-msg').contains('Sorry, we couldn\'t find repository you were looking for')
  })
})