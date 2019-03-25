describe('Project test', function () {

	beforeEach(() => {
   		cy.loginByUI()
  	})
  
	it('create project', function(){
		cy.get('a.projects').click()
		cy.get('a.icon-add').click()
		cy.get('#project_name').type('Softbox13')
		cy.get('#project_description').type('vaga para desenvolvedor de automação de testes')
		//cy.get('#project_identifier').type('')
		cy.get('#project_trackers > :nth-child(3) > input').click()
		cy.get('#project_trackers > :nth-child(4) > input').click()
		cy.get('[name="commit"]').click()
	})

		it('visit project', function(){
		cy.get('a.projects').click()
	})
})