// Index Signatures

class seatArrangements {
	// A1,A2,A3,A4...
	// Mosh, Jha, Spa,Her...
	// Index Signature property
	[seatNumber: string]: string
}

let seat = new seatArrangements()
seat.A1 = 'imskanand'
seat['A2'] = 'Mosh'

console.log(seat.A1)
console.log(seat.A2)
