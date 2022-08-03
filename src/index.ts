// Generic Constraints

function echo<T extends string | number>(value: T): T {
	console.log(value)
	return value
}

console.log(echo('1'))
console.log(echo(2))
