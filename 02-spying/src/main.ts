import { Todo } from './types/Todo'
import { addTodo, deleteTodo, toggleTodo } from './functions'
import { showError, hideError } from './utils/error'
import { getTodos, saveTodos } from './utils/localStorage'
import { renderTodos } from './utils/render'
import './assets/scss/main.scss'

let todos: Todo[] = getTodos()

const todosEl = document.querySelector<HTMLUListElement>('#todos')!
const newTodoFormEl = document.querySelector<HTMLFormElement>('#new-todo-form')!

// listen for click-events on the todo list
todosEl.addEventListener('click', (e: MouseEvent) => {
	const target = e.target as HTMLElement

	if (target.classList.contains('todo')) {
		// toggle todo if click was on the todo-title element
		const todoId = Number(target.dataset.todoId)
		const result = toggleTodo(todoId, todos)

		// if toggle wasn't successful, show error
		if (!result.success) {
			showError(result.error!)
			return
		}

		// hide error
		hideError()

		// save todos
		saveTodos(todos)

		// at last, re-render todo list
		renderTodos(todos)

	} else if (target.classList.contains('delete-todo')) {
		// delete todo if click was on the trashcan
		e.stopPropagation()

		const todoId = Number(target.parentElement!.dataset.todoId)
		const result = deleteTodo(todoId, todos)

		// if delete wasn't successful, show error
		if (!result.success) {
			showError(result.error!)
			return
		}

		// hide error
		hideError()

		// save todos
		saveTodos(todos)

		// at last, re-render todo list
		renderTodos(todos)
	}
});

// create a new todo form
newTodoFormEl.addEventListener('submit', (e: SubmitEvent) => {
	e.preventDefault()

	const newTodoTitle = document.querySelector<HTMLInputElement>('#new-todo-title')!.value

	const result = addTodo(newTodoTitle, todos)

	if (!result.success) {
		showError(result.error!)
		return
	}

	hideError()
	saveTodos(todos)

	// empty input
	document.querySelector<HTMLInputElement>('#new-todo-title')!.value = ''

	// render all todos
	renderTodos(todos)
})

// hide error on reset
newTodoFormEl.addEventListener('reset', () => {
	hideError()
})

// render all todos
renderTodos(todos)
