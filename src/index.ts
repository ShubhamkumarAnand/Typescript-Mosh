// Exercise

function echo<T>(value: T): T {
	return value
}

function printName<T extends { name: string }>(obj: T) {
	console.log(obj.name)
}

class Entity<T> {
	constructor(public id: T) {}
}
