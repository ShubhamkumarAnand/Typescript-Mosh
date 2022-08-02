// ^ Private vs Protected Methods
// * Both are same but only to say -> Protected Methods are inherited

class Person {
	constructor(public firstName: string, public lastName: string) {}

	get fullName() {
		return this.firstName + ' ' + this.lastName
	}

	/*
  private sing() {
		console.log('can sing')
	}
  */

	protected walk() {
		console.log('Walking')
	}
}

class Student extends Person {
	constructor(public studentId: number, firstName: string, lastName: string) {
		super(firstName, lastName)
	}

	talking() {
		this.walk()
		console.log('Now Talking')
	}
}

class Teacher extends Person {
	override get fullName(): string {
		return 'Prof. ' + super.fullName
	}
}

class Principal extends Person {
	override get fullName() {
		return 'Principal ' + super.fullName
	}
}

printName([
	new Student(1, 'Mosh', 'li'),
	new Teacher('Mosh', 'li'),
	new Principal('Shubham', 'Anand'),
])
function printName(people: Person[]) {
	for (let person of people) {
		console.log(person.fullName)
	}
}
