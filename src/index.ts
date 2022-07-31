// Nullable values are not allowed in typescript by default

function greet(message: string | null | undefined) {
	if (message) console.log(message)
	else console.log('🙏🏻')
}

greet(null)
