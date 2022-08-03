// Generics in Typescript -> Try to solve the common problem related to the types of attributes.

class KeyValuePair<K, V> {
	constructor(public key: K, public value: V) {}
}

let pair = new KeyValuePair<number, string>(1, 'AAA')
let pair1 = new KeyValuePair<string, string>('a', 'AAB')
console.log(pair.key.valueOf())
console.log(pair1.key.valueOf())
