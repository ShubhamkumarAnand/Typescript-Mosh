// JavaScript object are expandable
const employees: {
	readonly id: number // Making this attribute not modified
	name: string
	retire: (date: Date) => void
} = {
	id: 1,
	name: 'Shubham',
	retire: (date: Date) => {
		console.log(date)
	},
}
console.log(employees)

employees.name = 'jesus'
employees.retire(new Date())
console.log(employees)
