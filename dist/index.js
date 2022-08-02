"use strict";
class Logger {
    fileName;
    constructor(fileName) {
        this.fileName = fileName;
    }
    write(message) {
        console.log(message);
    }
}
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
}
class Employee extends Person {
    salary;
    constructor(salary, firstName, lastName) {
        super(firstName, lastName);
        this.salary = salary;
    }
}
//# sourceMappingURL=index.js.map