// Generics in Typescript -> Try to solve the common problem related to the types of attributes.

class ArrayUtils {
	static wrapInArray<T>(value: T) {
		return [value]
	}
}

let numbers = ArrayUtils.wrapInArray('1')
console.log(numbers)
