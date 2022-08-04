// Extending Generic Classes

interface Product {
	name: string
	price: number
}

class Store<T> {
	private _objects: T[] = []

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
