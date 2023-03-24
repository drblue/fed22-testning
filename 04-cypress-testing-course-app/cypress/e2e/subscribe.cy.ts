import { faker } from '@faker-js/faker'

describe('Newsletter Subscribe', () => {
	const email = faker.internet.email()
	const invalidEmail = 'pelle'
	const subscribedEmail = 'john@example.com'

	beforeEach(() => {
		cy.visit('http://localhost:3000')
	})

	it('allows users to subscribe to the email list', () => {
		// cy.get('[data-test="email-input"]')
		cy.getByDataTest('email-input').type(email)
		cy.getByDataTest('submit-button').click()
		cy.getByDataTest('success-message').should('exist').contains(email)
	})

	it.skip('displays an error message when the email is invalid')

	it.skip('should not allow users to subscribe twice')
})
