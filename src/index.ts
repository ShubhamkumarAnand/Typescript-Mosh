// Exercises
type Users = {
	name: string
	age: number
	occupation?: string
}

type Bird = {
	fly: () => void
}

type Fish = {
	swim: () => void
}

let pet: Bird | Fish

type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'
