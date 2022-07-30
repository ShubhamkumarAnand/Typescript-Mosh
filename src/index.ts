console.log('Typescript Master!')

// enums -
// let small = 1
// let medium = 2
// let large = 3

// PascalCase

/*
  Making the enum constant make the js file more precise
*/
const enum Size {
	Small = 1, // Default is 0
	Medium, // Also string as well as all data type can be assigned
	Large,
}

let mySize: Size = Size.Medium
console.log(mySize)

let myBrotherSize: Size = Size.Small
console.log(myBrotherSize)
