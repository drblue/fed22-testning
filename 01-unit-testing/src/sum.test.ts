import { it, expect } from 'vitest'
import { sum } from './sum'

it('should sum two numbers', () => {
	expect( sum(1, 2) ).toBe( 3 )
})

it('should sum three numbers', () => {
	expect( sum(1, 2, 3) ).toBe( 6 )
})

it('should sum four numbers', () => {
	expect( sum(1, 2, 3, 4) ).toBe( 10 )
})
