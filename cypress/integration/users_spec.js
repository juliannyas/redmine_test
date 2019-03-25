describe('Taxonomy test', function () {
  
	it('create user', function(){
		cy.visit('http://demo.redmine.org')
		cy.get('.register').click()
		cy.url().should('match', /register/)
		cy.get('#user_login').type('user1')
		cy.get('#user_password').type('pass')
		cy.get('#user_password_confirmation').type('pass')
		cy.get('#user_firstname').type('User')
		cy.get('#user_lastname').type('Tester')
		cy.get('#user_mail').type('user1@user1.com')
		cy.get('#user_language').select('Portuguese (Português)')
		cy.get('[type="submit"]').click()
		cy.url().should('match', /account)
	})
})