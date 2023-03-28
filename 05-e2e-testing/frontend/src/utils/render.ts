import { getTodos } from '../services/TodoAPI'
import { Todo } from '../types/Todo'

// get and render todos
export const getAndRenderTodos = async () => {
	const todos = await getTodos()
	renderTodos(todos)
}

// render output to DOM
export const render = (element: HTMLElement, html: string) => {
	element.innerHTML = html
}

// render todos
export const renderTodos = (todos: Todo[]) => {
	render(
		document.querySelector<HTMLUListElement>('#todos')!,
		transformTodosToHtml(todos)
	)
}

// transform todos to HTML(-string)
export const transformTodosToHtml = (todos: Todo[]) => {
	return todos
		.map(todo =>
			`<li class="list-group-item todo ${todo.completed ? 'completed' : ''}" data-todo-id="${todo.id}">
				<span class="todo-title">${todo.title}</span>
				${todo.completed
					? '<span class="delete-todo" role="button" title="Delete todo">🗑️</span>'
					: ''
				}
			</li>`
		)
		.join('')
}
