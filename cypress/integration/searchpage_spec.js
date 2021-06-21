describe('Search page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('should be a controlled form', () => {
    cy.get('input[name="repoName"]').type('reactionary')
      .should('have.value', 'reactionary')
      .get('select').eq(0).select('c')
      .should('have.value', 'c')
      .get('select').eq(0).select('javascript')
      .should('have.value', 'javascript')
      .get('select').eq(1).select('No')
      .should('have.value', '/')
      .get('select').eq(1).select('Yes')
      .should('have.value', '&sort=stars')
  })

  it('should display 30 repository cards', () => {
    cy.get('input[name="repoName"]').type('reactionary')
      .get('select').eq(0).select('javascript')
      .get('select').eq(1).select('Yes')
      // intercept fetch call and give reactionary repo dummy data
      .interceptReactionary()
      .get('button[value="Submit"]').click()
      .get('.card').should('have.length', 30)
  })
})