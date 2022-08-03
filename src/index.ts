// Generic Constraints -> Limiting the type of the value which can be accepted

interface Person {
	name: string
}

function echo<T extends Person>(value: T): T {
	console.log(value)
	return value
}

console.log(echo({ name: 'Hello All!' }))
// console.log(echo(2))
