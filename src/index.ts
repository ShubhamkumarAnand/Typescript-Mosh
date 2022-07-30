// Type Aliases uses the PascalCase naming convention

type Employee = {
	readonly id: number
	eName: string
	joinedDate: (date: Date) => void
}

let employee: Employee = {
	id: 1_900_268,
	eName: 'Snow White',
	joinedDate: (date: Date) => {
		console.log(new Date(date.getTime()))
	},
}

console.log(employee)
