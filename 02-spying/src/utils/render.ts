import { Todo } from '../types/Todo'

// render todos
export const renderTodos = (todos: Todo[]) => {
	// replace todosList content
	const todosEl = document.querySelector<HTMLUListElement>('#todos')!
	todosEl.innerHTML = todos
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
