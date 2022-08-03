// Generics in Typescript -> Try to solve the common problem related to the types of attributes.

// www.amazon.com/products
// www.amazon.com/users

interface Results<T> {
	data: T | null
	error: string | null
}

function fetch<T>(url: string): Results<T> {
	console.log(url)
	return { data: null, error: null }
}

interface User {
	fullName: string
}

interface Product {
	title: string
}

let user = fetch<User>('www.example.com/users')
console.log(user.data?.fullName)

let product = fetch<Product>('www.example.com/products')
console.log(product.data?.title)
