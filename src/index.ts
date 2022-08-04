// Extending Generic Class

interface Product {
	name: string
	price: number
}

// index signature
// keyof
type ReadOnly<T> = {
	readonly [P in keyof T]: T[P]
}

type Optional<T> = {
	[P in keyof T]?: T[P]
}

type Nullable<T> = {
	[P in keyof T]: T[P] | null
}
