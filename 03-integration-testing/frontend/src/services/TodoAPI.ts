import axios from 'axios'
import { Todo, TodoData } from '../types/Todo'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

/**
 * Generic get request
 */
export const get = async <T>(endpoint: string) => {
	const res = await axios.get<T>(BASE_URL + endpoint)
	return res.data
}

/**
 * Generic post request
 */
export const post = async <T>(endpoint: string, data: any) => {
	const res = await axios.post<T>(BASE_URL + endpoint, data)
	return res.data
}

/**
 * Generic patch request
 */
export const patch = async <T>(endpoint: string, data: any) => {
	const res = await axios.patch<T>(BASE_URL + endpoint, data)
	return res.data
}

/**
 * Generic delete request
 */
export const del = async (endpoint: string) => {
	const res = await axios.delete(BASE_URL + endpoint)
	return res.data
}

/**
 * Get all todos
 */
export const getTodos = () => {
	return get<Todo[]>('/todos')

	/*
	const res = await axios.get<Todo[]>(`${BASE_URL}/todos`)
	return res.data
	*/
}

/**
 * Get a single todo
 */
export const getTodo = (id: number) => {
	return get<Todo>(`/todos/${id}`)
}

/**
 * Create a new todo
 */
export const createTodo = (todo: TodoData) => {
	return post<Todo>(`/todos`, todo)
}

/**
 * Update a todo
 */
export const updateTodo = (id: number, todo: Partial<TodoData>) => {
	return patch<Todo>(`/todos/${id}`, todo)
}

/**
 * Delete a todo
 */
export const deleteTodo = (id: number) => {
	return del(`/todos/${id}`)
}
