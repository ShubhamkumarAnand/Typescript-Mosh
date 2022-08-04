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
}

// Extending the generic Class -> Passing on the generic type parameters
class CompressStore<T> extends Store<T> {
	compress() {}
}

let store = new CompressStore<Product>()
store.add({ name: 'SmartWatch', price: 10 })
store.compress()

// Restricting the generic type parameters
class SearchableStore<T extends { name: string }> extends Store<T> {
	find(name: string): T | undefined {
		return this._objects.find((obj) => obj.name === name)
	}
}

// Fix the Generic type parameters
class ProductStore extends Store<Product> {
	filterByCategory(category: string): Product[] {
		console.log(category)
		return []
	}
}
