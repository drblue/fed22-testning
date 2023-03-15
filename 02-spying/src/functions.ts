import { Todo } from './types/Todo'
import { Result } from './types/Result'

/**
 * Add a new todo
 *
 * @param title Title of the todo
 * @param todos Todos-array
 */
export const addTodo = (title: string, todos: Todo[]): Result => {
	// check if title is empty
	if (title === '') {
		return {
			success: false,
			error: 'Title cannot be empty',
		}
	}

	// check if title isn't long enough
	if (title.length < 3) {
		return {
			success: false,
			error: 'Title must be at least 3 characters long',
		}
	}

	// find maximum id in the todos-array
	const todoIds = todos.map(todo => todo.id)   // todoIds = [1, 2, 3]
	const id = Math.max(0, ...todoIds) + 1 // 4

	// push todo into list of todos
	const newTodo: Todo = {
		id,
		title,
		completed: false,
	}
	todos.push(newTodo)

	return {
		success: true,
	}
}

/**
 * Toggle todo completed-status
 *
 * @param id Id of the todo
 * @param todos Todos-array
 */
export const toggleTodo = (id: number, todos: Todo[]): Result => {
	// find todo by id
	const todo = todos.find(todo => todo.id === id)

	// if no todo is found, return error
	if (!todo) {
		return {
			success: false,
			error: 'Todo not found',
		}
	}

	todo.completed = !todo.completed

	return {
		success: true,
	}
}

/**
 * Delete todo
 *
 * @param id Id of the todo
 * @param todos Todos-array
 */
export const deleteTodo = (id: number, todos: Todo[]): Result => {
	// find todo by id
	const index = todos.findIndex(todo => todo.id === id)

	// if no todo is found, return error
	if (index === -1) {
		return {
			success: false,
			error: 'Todo not found',
		}
	}

	// remove todo from todos-array
	todos.splice(index, 1)

	return {
		success: true,
	}
}
