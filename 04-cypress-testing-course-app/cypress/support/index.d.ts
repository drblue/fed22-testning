declare namespace Cypress {
	interface Chainable {
		/**
		 * Custom command to select DOM element by data-test attribute.
		 * @example cy.getByDataTest('email-input')
		 */
		getByDataTest(selector: string): Chainable<JQuery<HTMLElement>>
	}
}
