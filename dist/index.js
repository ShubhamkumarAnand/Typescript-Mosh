"use strict";
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Customer extends Person {
}
function echo(value) {
    console.log(value);
    return value;
}
console.log(echo(new Person('Mosh')));
console.log(echo(new Customer('Mosh Pro')));
//# sourceMappingURL=index.js.map