export type TodoData = {
	title: string,
	completed: boolean,
}

export type Todo = TodoData & {
	id: number,
}
