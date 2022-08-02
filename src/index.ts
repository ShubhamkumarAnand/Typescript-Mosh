// Exercises

class Logger {
	constructor(public fileName: string) {}

	write(message: string) {
		console.log(message)
	}
}

class Person {
	constructor(public firstName: string, public lastName: string) {}

	get fullName() {
		return this.firstName + ' ' + this.lastName
	}
}

class Employee extends Person {
	constructor(public salary: number, firstName: string, lastName: string) {
		super(firstName, lastName)
	}
}
interface Address {
	street: string
	city: string
	zipcode: number
}

interface Employees {
	name: string
	salary: number
	address: Address
}
