// Generics in Typescript -> Try to solve the common problem related to the types of attributes.

class ArrayUtils {
	wrapInArray<T>(value: T) {
		return [value]
	}
}

let utils = new ArrayUtils()
let numbers = utils.wrapInArray('1')
console.log(numbers)
