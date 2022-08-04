// Extending Generic Class

interface Product {
	name: string
	price: number
}

// index signature
// keyof
type ReadOnlyProduct = {
	readonly [P in keyof Product]: Product[P]
}

let product: ReadOnlyProduct = {
	name: 'a',
	price: 12,
}

// Cannot be changed
product.name = 'c'
