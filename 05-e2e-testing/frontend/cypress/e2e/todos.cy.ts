describe('Todos', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	it('should see at least one todo', { defaultCommandTimeout: 6000 }, () => {
		cy.get('#todos')
			.find('li')
			.should('have.length.at.least', 1)
	})

	context('create todo', () => {
		it('create todo form should be empty', () => {
			cy.get('#new-todo-title').should('have.value', '')
		})

		it('cant create a todo without a title', () => {
			// cy.get('#new-todo-title').type('{enter}')
			cy.get('[type="submit"]').click()
			cy.get('#error').should('be.visible').contains('Title cannot be empty')
		})

		it('can create a new todo (and see it in the list and clears input)', () => {
			// enter todo title and submit form
			cy.get('#new-todo-title').type('My test todo')
			cy.get('[type="submit"]').click()

			// check that a todo with the title exists in the list
			cy.get('#todos').find('li').last().contains('My test todo')

			// expect input to be empty
			cy.get('#new-todo-title').should('have.value', '')
		})

		it('can type in the create todo form and then reset the form', () => {
			cy.get('#new-todo-title').type('My ephemeral todo')
			cy.get('[type="reset"]').click()
			cy.get('#new-todo-title').should('have.value', '')
		})
	})
})
