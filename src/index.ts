// Type Assertions - when you know the type of the value returned by the variable

let phone = document.getElementById('phone') as HTMLInputElement

let myName = <HTMLInputElement>document.getElementById('myName')

console.log(phone.value)
console.log(myName.value)
