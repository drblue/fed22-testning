import { TodoData, Todo } from './types/Todo'
import { Result } from './types/Result'
import * as TodoAPI from './services/TodoAPI'

/**
 * Add a new todo
 *
 * @param title Title of the todo
 */
export const addTodo = async (title: string): Promise<Result> => {
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

	// create payload
	const newTodo: TodoData = {
		title,
		completed: false,
	}

	// create todo
	try {
		await TodoAPI.createTodo(newTodo)
	} catch (err) {
		return {
			success: false,
			error: 'Could not create todo',
		}
	}

	return {
		success: true,
	}
}

/**
 * Toggle todo completed-status
 *
 * @param id Id of the todo
 */
export const toggleTodo = async (id: number): Promise<Result> => {
	let todo: Todo

	// get todo
	try {
		todo = await TodoAPI.getTodo(id)
	} catch (err) {
		return {
			success: false,
			error: 'Todo not found',
		}
	}

	// update todo
	try {
		await TodoAPI.updateTodo(id, {
			completed: !todo.completed,
		})
	} catch (err) {
		return {
			success: false,
			error: 'Could not update todo',
		}
	}

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
export const deleteTodo = async (id: number): Promise<Result> => {
	// delete todo
	try {
		await TodoAPI.deleteTodo(id)
	} catch (err) {
		return {
			success: false,
			error: 'Could not delete todo',
		}
	}

	return {
		success: true,
	}
}
