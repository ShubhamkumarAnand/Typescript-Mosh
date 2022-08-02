"use strict";
class Person {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    walk() {
        console.log('Walking');
    }
}
class Student extends Person {
    studentId;
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    talking() {
        this.walk();
        console.log('Now Talking');
    }
}
class Teacher extends Person {
    get fullName() {
        return 'Prof. ' + super.fullName;
    }
}
class Principal extends Person {
    get fullName() {
        return 'Principal ' + super.fullName;
    }
}
printName([
    new Student(1, 'Mosh', 'li'),
    new Teacher('Mosh', 'li'),
    new Principal('Shubham', 'Anand'),
]);
function printName(people) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
//# sourceMappingURL=index.js.map