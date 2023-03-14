// add a and b together and return sum 🤯
export const sum = (...numbers: number[]) => {
	return numbers.reduce((acc, num) => acc + num, 0)
}
