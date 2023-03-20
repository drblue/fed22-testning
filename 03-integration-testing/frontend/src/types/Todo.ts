export type Todo = {
	id: number,
	title: string,
	completed: boolean,
}

export type CreateTodoData = {
	title: string,
	completed: boolean,
}

export type UpdateTodoData = {
	title?: string,
	completed?: boolean,
}
