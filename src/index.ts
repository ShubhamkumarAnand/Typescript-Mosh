// Generics in Typescript -> Try to solve the common problem related to the types of attributes.

function wrapInArray<T>(value: T) {
	return [value]
}

let numbers = wrapInArray('1')
console.log(numbers)
