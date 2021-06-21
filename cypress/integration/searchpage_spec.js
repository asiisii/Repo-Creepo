describe('Search page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('should display 30 repository cards', () => {
    cy.get('button[value="Submit"]').click()
      .get('input[name="repoName"]:invalid')
      .invoke('prop', 'validationMessage')
      .should('equal', 'Please fill out this field.')
      .get('input[name="repoName"]').type('reactionary')
      .get('button[value="Submit"]').click()
      .get('.option-err')
      .contains('Please fill out all the form')
      .get('select').eq(0).select('javascript')
      .get('button[value="Submit"]').click()
      .get('.option-err')
      .contains('Please fill out all the form')
      .get('select').eq(1).select('Yes')
      // intercept fetch call and give reactionary repo dummy data
      .interceptReactionary()
      .get('button[value="Submit"]').click()
      .get('.card').should('have.length', 30)
  })
})