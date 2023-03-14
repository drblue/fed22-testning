import { describe, it, expect } from 'vitest'
import { add, sub } from './sum'

describe('tests addition', () => {
	it('should add two numbers', () => {
		expect( add(1, 2) ).toBe( 3 )
	})

	it('should add three numbers', () => {
		expect( add(1, 2, 3) ).toBe( 6 )
	})

	it('should add four numbers', () => {
		expect( add(1, 2, 3, 4) ).toBe( 10 )
	})
})

describe('tests subtraction', () => {
	it('should subtract 50 from 100', () => {
		expect( sub(100, 50) ).toBe(50)
	})
})
