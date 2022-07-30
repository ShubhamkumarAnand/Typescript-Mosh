/*
  Problem with the following code
    - if we want to create another employee, we need to repeat the code !== DRY
    - Too much jiggle in the code
    - The other employee will have other shape which makes it inconsistent
*/

let employee: {
	readonly id: number
	eName: string
	joinedDate: (date: Date) => void
} = {
	id: 1_900_268,
	eName: 'Snow White',
	joinedDate: (date: Date) => {
		console.log(date)
	},
}

console.log(employee)
