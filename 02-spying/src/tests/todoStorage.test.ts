import { afterEach, describe, expect, it } from 'vitest'
import mockLocalStorage from '../mocks/mockedLocalStorage'
import { getTodos, saveTodos } from '../utils/todoStorage'
import { Todo } from '../types/Todo'

global.localStorage = mockLocalStorage()

const TODO: Todo = {
	id: 1,
	title: 'My first todo',
	completed: false,
}

describe('get todos', () => {
	it('returns empty list of todos', () => {
		const todos = getTodos()

		expect(todos.length).toBe(0)
	})
})

describe('save todos', () => {
	afterEach(() => {
		global.localStorage.clear()
	})

	it('can save a todo', () => {
		const result = saveTodos( [ TODO ] )

		expect(result.success).toBe(true)
	})

	it.todo('can save a todo and then get it', () => {
		// localStorage will be empty
	})
})
