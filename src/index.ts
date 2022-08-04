// Extending Generic Class

interface Product {
	name: string
	price: number
}

class Store<T> {
	protected _objects: T[] = []

	add(obj: T) {
		this._objects.push(obj)
	}

	// T is a Product
	// keyof T -> 'name', 'price'

	find(property: keyof T, value: unknown): T | undefined {
		return this._objects.find((obj) => obj[property] === value)
	}
}

let store = new Store()
store.add({ name: 'a', price: 100 })
store.find('name', 'a')
store.find('price', 1)
