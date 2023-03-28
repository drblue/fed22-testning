// show error
export const showError = (error: string) => {
	const errorEl = document.querySelector<HTMLDivElement>('#error')!
	errorEl.innerText = error
	errorEl.classList.remove('hide')
}

// hide error
export const hideError = () => {
	const errorEl = document.querySelector<HTMLDivElement>('#error')!
	errorEl.innerText = ''
	errorEl.classList.add('hide')
}
