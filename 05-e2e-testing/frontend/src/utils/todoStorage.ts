import DOMException from 'domexception'
import { Todo } from '../types/Todo'

/**
 * Get todos from localStorage
 *
 */
export const getTodos = (): Todo[] => {
	// get json-todos from localStorage
	const json = localStorage.getItem('todos') ?? '[]'

	// parse json-todos into an array of Todo-objects
	const todos: Todo[] = JSON.parse(json)

	return todos
}

/**
 * Save todos to localStorage
 *
 * @param todos Todos-array
 */
export const saveTodos = (todos: Todo[]) => {
	try {
		// convert todos-array to JSON
		const json = JSON.stringify(todos)

		// save JSON to localStorage
		localStorage.setItem('todos', json)

		return {
			success: true,
		}

	} catch (error) {
		// if DomainException is thrown, return error
		if (error instanceof DOMException) {
			return {
				success: false,
				error: error.message,
			}
		}

		// return unknown error
		return {
			success: false,
			error: 'Unknown error',
		}
	}
}
