// OOPs - Inheritance

class Person {
	constructor(public firstName: string, public lastName: string, public email: string) {}

	get fullName() {
		return this.firstName + ' ' + this.lastName
	}

	walk() {
		console.log('Walking')
	}
}

class Student extends Person {
	constructor(public studentId: number, firstName: string, lastName: string, email: string) {
		super(firstName, lastName, email)
	}

	talking() {
		console.log('Now Talking')
	}
}

let student = new Student(1, 'Shubham', 'Anand', 'imskanand@gmail.com')
console.log(student.fullName)
console.log(student.walk(), student.talking())

class Teacher extends Person {
	override get fullName(): string {
		return 'Prof. ' + super.fullName
	}
}

let teacher = new Teacher('Mosh', 'li', 'abc@agc.com')
console.log(teacher.fullName)
