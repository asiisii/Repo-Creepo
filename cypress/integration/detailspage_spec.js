describe('Details page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should be able to see details about clicked repository', () => {
    cy.get('input[name="repoName"]').type('repo-creepo')
      .get('select').eq(0).select('javascript')
      .get('select').eq(1).select('Yes')
      // intercept fetch call and give dummy data
      .interceptRepoCreepoCard()
      .get('button[value="Submit"]').click()
      .get('.view').click()
      .get('.DetailsPage')
      .get('.back-btn').should('exist').click()
      .get('.view').click()
      .get('.user-info > img')
      .should('have.attr', 'alt').should('contains', 'ashish\'s profile pic')
      .get('.user-info > img')
      .should('have.attr', 'src').should('contains', 'https://avatars.githubusercontent.com/u/36644181?v=4')
      .get('h1').eq(0)
      .should('have.text', '@ashish')
      .get('h1').eq(1)
      .should('have.text', 'Repo name:  repo-Creepo')
      .get('h1').eq(2)
      .should('have.text', 'Stars:  0')
      .get('h1').eq(3)
      .should('have.text', 'Language:  JavaScript')
      .get('h1').eq(4)
      .should('have.text', 'Description:  App that lets user search Repository using Github API')
      .get('h1').eq(5)
      .should('have.text', 'View GitHub Profile:  https://api.github.com/users/asiisii')
      .get('h1').eq(6)
      .should('have.text', 'View Repo:  https://github.com/asiisii/Repo-Creepo')
  })

})