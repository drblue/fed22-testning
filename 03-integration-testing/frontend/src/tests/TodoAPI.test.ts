import { describe, it, expect } from 'vitest'
import * as TodoAPI from '../services/TodoAPI'

describe('TodoAPI', () => {

	it('should return a list', async () => {
		const todos = await TodoAPI.getTodos()

		expect( Array.isArray(todos) ).toBe(true)
	})

	it.todo('should create a todo')

	it.todo('should create and then get the todo')

	it.todo('should create and then find the todo among all todo')

	it.todo('should create and then update the todo')

	it.todo('should create and then delete the todo')

})
