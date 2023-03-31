declare namespace Cypress {
	interface Chainable {
		/**
		 * Custom command to log in.
		 *
		 * @param email Email
		 * @param password Password
		 */
		login(email: string, password: string): Chainable<void>
	}
}
