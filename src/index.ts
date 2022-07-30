console.log('Typescript Master!')

// enums
let small = 1
let medium = 2
let large = 3

// PascalCase
const enum Size {
	Small = 1,
	Medium,
	Large,
}

let mySize: Size = Size.Medium
console.log(mySize)

let myBrotherSize: Size = Size.Small
console.log(myBrotherSize)
