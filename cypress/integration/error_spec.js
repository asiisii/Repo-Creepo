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

  it('should display error message for server error', () => {
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

  it('should display error message for any error', () => {
    cy.visit('http://localhost:3000')
      .get('input[name="repoName"]').type('repo-creepo')
      .get('select').eq(0).select('javascript')
      .get('select').eq(1).select('Yes')
      .intercept('https://api.github.com/search/repositories?q=repo-creepo+language:javascript&sort=stars&page=1', {
        statusCode: 401
      })
      .get('button[value="Submit"]').click()
      .get('.error-msg')
      .contains('Oops! Request failed. Please try again.')
  })

  it('should display error message when invalid repository is submitted', () => {
    cy.visit('http://localhost:3000')
      .get('input[name="repoName"]').type('repo-creeop')
      .get('select').eq(0).select('javascript')
      .get('select').eq(1).select('Yes')
      .get('button[value="Submit"]').click()
      .get('.option-err')
      .contains('Sorry we couldn\'t find the repository you\'re looking for')
  })

  it('should display error message when user tries to submit empty inputs', () => {
    cy.visit('http://localhost:3000')
      .get('button[value="Submit"]').click()
      .get('input[name="repoName"]:invalid')
      .invoke('prop', 'validationMessage')
      .should('equal', 'Please fill out this field.')
      .get('input[name="repoName"]').type('repo-creepo')
      .get('button[value="Submit"]').click()
      .get('.option-err')
      .contains('Please fill out all the form')
      .get('select').eq(0).select('javascript')
      .get('button[value="Submit"]').click()
      .get('.option-err')
      .contains('Please fill out all the form')
      .get('select').eq(1).select('Yes')
      // intercept fetch call and give dummy data
      .interceptRepoCreepoCard()
      .get('button[value="Submit"]').click()
      // checks to see if search-msg is still visible or not
      .get('.search-msg').should('not.exist')
      // checks to see if option-err is still visible or not
      .get('.option-err').should('not.exist')
  })
})