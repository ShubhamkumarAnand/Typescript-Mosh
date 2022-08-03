// Generics in Typescript -> Try to solve the common problem related to the types of attributes.

class KeyValuePair {
	constructor(public key: number, public value: string) {}
}

let hash = new KeyValuePair(1, 'AA')

class StringKeyValuePair {
	constructor(public key: string, public value: string) {}
}

let stringHash = new StringKeyValuePair('1', 'AAA')
