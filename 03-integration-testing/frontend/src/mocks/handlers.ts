import { rest } from 'msw'
import { Todo, TodoData } from '../types/Todo'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

const dummyTodos: Todo[] = [
	{ id: 1, title: 'My first todo', completed: false },
	{ id: 2, title: 'My second todo', completed: true },
]

export const handlers = [
	// Mock get all todos
	// GET http://localhost:3001/todos
	rest.get(BASE_URL + '/todos', (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json(dummyTodos)
		)
	}),

	// Mock get single todo
	// GET http://localhost:3001/todos/:todoId

	// Mock create todo
	// POST http://localhost:3001/todos

	// Mock update todo
	// PATCH http://localhost:3001/todos/:id

	// Mock delete todo
	// DELETE http://localhost:3001/todos/:id
]
