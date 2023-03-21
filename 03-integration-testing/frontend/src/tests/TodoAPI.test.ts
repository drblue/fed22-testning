import { describe, it, expect } from 'vitest'
import * as TodoAPI from '../services/TodoAPI'
import { CreateTodoData } from '../types/Todo'

const newTodo: CreateTodoData = {
	title: 'Test todo',
	completed: false,
}

describe('TodoAPI', () => {

	it('should return a list', async () => {
		const todos = await TodoAPI.getTodos()

		expect( Array.isArray(todos) ).toBe(true)
	})

	it('should create a todo', async () => {
		const todo = await TodoAPI.createTodo(newTodo)

		expect(todo).toMatchObject({
			id: expect.any(Number),
			title: newTodo.title,
			completed: newTodo.completed,
		})
	})

	it('should create and then get the todo', async () => {
		// create a new todo
		const createdTodo = await TodoAPI.createTodo(newTodo)

		// try to get the todo
		const todo = await TodoAPI.getTodo(createdTodo.id)

		// expect both todos to have the same key/values
		expect(todo).toStrictEqual(createdTodo)
	})

	it.todo('should create and then find the todo among all todo')

	it.todo('should create and then update the todo')

	it.todo('should create and then delete the todo')

})
