// Generic Constraints -> Limiting the type of the value which can be accepted

function echo<T extends { name: string }>(value: T): T {
	console.log(value)
	return value
}

console.log(echo({ name: 'Hello All!' }))
// console.log(echo(2))
