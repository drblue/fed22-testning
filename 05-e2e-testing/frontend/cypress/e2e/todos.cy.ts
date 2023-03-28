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
		it.skip('create todo form should be empty')

		it.skip('cant create a todo without a title')

		it.skip('can create a new todo (and see it in the list and clears input)')

		it.skip('can type in the create todo form and then reset the form')
	})
})
