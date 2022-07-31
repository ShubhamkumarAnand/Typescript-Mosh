//Never tells the compiler that the code after this function call will never be executed

function reject(message: string): never {
	throw new Error(message)
}

function updateScore(): never {
	while (true) {
		// Read the Score
	}
}
reject('...')
updateScore()
console.log('Hello world!')
