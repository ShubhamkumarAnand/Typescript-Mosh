"use strict";
class Person {
    firstName;
    lastName;
    email;
    constructor(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
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
    constructor(studentId, firstName, lastName, email) {
        super(firstName, lastName, email);
        this.studentId = studentId;
    }
    talking() {
        console.log('Now Talking');
    }
}
let student = new Student(1, 'Shubham', 'Anand', 'imskanand@gmail.com');
console.log(student.fullName);
console.log(student.walk(), student.talking());
//# sourceMappingURL=index.js.map