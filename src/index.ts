// Generic Constraints -> Limiting the type of the value which can be accepted

function echo<T extends string | number>(value: T): T {
	console.log(value)
	return value
}

console.log(echo('Hello All'))
console.log(echo(2))
