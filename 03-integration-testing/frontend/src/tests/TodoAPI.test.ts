import { describe, it, expect } from 'vitest'
import * as TodoAPI from '../services/TodoAPI'
import { TodoData } from '../types/Todo'

const newTodo: TodoData = {
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

	it('should create and then find the todo among all todo', async () => {
		// create a new todo
		const todo = await TodoAPI.createTodo(newTodo)

		// get all todos
		const todos = await TodoAPI.getTodos()

		// expect createdTodo to exist in the array of all todos
		expect(todos).toContainEqual(todo)
	})

	it('should create and then update the todo', async () => {
		const todo = await TodoAPI.createTodo(newTodo)

		const updatedTodo = await TodoAPI.updateTodo(todo.id, {
			completed: true,
		})

		expect(updatedTodo).toMatchObject({
			id: todo.id,
			title: todo.title,
			completed: true,
		})
	})

	it('should create and then delete the todo', async () => {
		const todo = await TodoAPI.createTodo(newTodo)

		await TodoAPI.deleteTodo(todo.id)

		const todos = await TodoAPI.getTodos()

		expect(todos).not.toContainEqual(todo)
	})

})
