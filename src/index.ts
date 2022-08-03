// Generic Constraints -> Limiting the type of the value which can be accepted

class Person {
	constructor(public name: string) {}
}

class Customer extends Person {}

function echo<T extends Person>(value: T): T {
	console.log(value)
	return value
}

console.log(echo(new Person('Mosh')))
console.log(echo(new Customer('Mosh Pro')))
// console.log(echo(2))
