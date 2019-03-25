describe('Redmine Test', function () {
  
	// context('Users', function(){

	// 	it('create user', function(){
	// 		cy.visit('http://demo.redmine.org')
	// 		cy.get('.register').click()
	// 		cy.url().should('match', /register/)
	// 		cy.get('#user_login').type('user1')
	// 		cy.get('#user_password').type('pass')
	// 		cy.get('#user_password_confirmation').type('pass')
	// 		cy.get('#user_firstname').type('User')
	// 		cy.get('#user_lastname').type('Tester')
	// 		cy.get('#user_mail').type('user1@user1.com')
	// 		cy.get('#user_language').select('Portuguese (Português)')
	// 		cy.get('[type="submit"]').click()
	// 		cy.url().should('match', /account/)
	// 	})
	// })

	context('Projects', function(){

		beforeEach(() => {
			cy.loginByUI()
		})

		// it('create project', function(){
		// 	cy.get('a.projects').click()
		// 	cy.get('a.icon-add').click()
		// 	cy.get('#project_name').type('Softbox14')
		// 	cy.get('#project_description').type('vaga para desenvolvedor de automação de testes')
		// 	cy.get('#project_trackers > :nth-child(3) > input').click()
		// 	cy.get('#project_trackers > :nth-child(4) > input').click()
		// 	cy.get('[name="commit"]').click()
		// })

		it('create new issue', function(){
			cy.get('a.projects').click()
			cy.get('#project_quick_jump_box').select('Softbox14')
			cy.get('.new-issue').click()
			cy.get('#issue_tracker_id').select('Bug')
			cy.get('#issue_subject').type('Issue99')
			cy.get('#issue_status_id').select('New')
			cy.get('#issue_priority_id').select('Normal')
			cy.get('[name="continue"]').click()
		})

	})
})