// Log in a user
Cypress.Commands.add('login', (email, password) => {
	cy.get('input[type="email"]').type(email, { delay: 10 })
	cy.get('input[type="password"]').type(password)
	cy.get('button[type="submit"]').click()
	cy.wait(1000)
})
