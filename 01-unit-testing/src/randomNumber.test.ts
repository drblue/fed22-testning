import { test, expect } from 'vitest'
import { getRandomNumber } from './randomNumber'

test('generates a random number between 1-10', () => {
	const randomNumber = getRandomNumber()

	expect(randomNumber).toBeGreaterThanOrEqual(1)   // assertion
	expect(randomNumber).toBeLessThanOrEqual(10)
})

test('generates a random number between 1-50', () => {
	const max = 50
	const randomNumber = getRandomNumber(max)

	expect(randomNumber).toBeGreaterThanOrEqual(1)   // assertion
	expect(randomNumber).toBeLessThanOrEqual(max)
})

test('generates 10 random numbers between 1-10', () => {
	for (let i = 0; i < 10; i++) {
		const randomNumber = getRandomNumber()

		expect(randomNumber).toBeGreaterThanOrEqual(1)   // assertion
		expect(randomNumber).toBeLessThanOrEqual(10)
	}
})
