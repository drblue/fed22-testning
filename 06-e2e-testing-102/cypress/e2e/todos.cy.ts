describe('Firebase Todos', () => {
	beforeEach(() => {
		cy.visit('/login')
	})

	afterEach(() => {
		cy.visit('/logout')
		cy.wait(1500)
	})

	context('can log in', () => {

		it('should log in with a existing user', () => {
			cy.login('jn@thehiveresistance.com', 'appapp')
			cy.location('pathname').should('eq', '/')
		})

		it('should not be able to visit todos page as a guest', () => {
			cy.visit('/todos')
			cy.location('pathname').should('eq', '/login')
		})

		it('should log in and visit todos page', () => {
			cy.login('jn@thehiveresistance.com', 'appapp')
			cy.location('pathname').should('eq', '/')

			cy.visit('/todos')
			cy.location('pathname').should('eq', '/todos')
		})
	})

	context('todo actions', () => {

		it('should click on the first todo and land on a page with the todo\'s id in the URL', () => {
			cy.login('jn@thehiveresistance.com', 'appapp')
			cy.visit('/todos')
			cy.wait(1500)

			// get the first todo item in the list
			cy.get('.todo-list-item')
				.first()
				.invoke('attr', 'data-todo-id')
				.then((todoId) => {
					cy.log(`Got me some todoId: ${todoId}`)

					cy.get('.todo-list-item')
						.first()
						.click()

					cy.wait(500)

					cy.location('pathname').should('eq', `/todos/${todoId}`)
				})
		})
	})

	context('todo metadata', () => {
		it('all todos should have a title', () => {
			cy.login('jn@thehiveresistance.com', 'appapp')
			cy.visit('/todos')

			cy.get('.todo-list-item > span:first-of-type')
				.each(($el) => {
					cy.wrap($el).should('not.be.empty')
				})
		})
	})
})
