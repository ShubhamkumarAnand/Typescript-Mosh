// Nullish coalescing operator

/*
  Falsy value in JavaScript : (false, null, undefined, 0, '')
*/

let speed: number | null = null
let ride = {
	// speed: speed || 40
	// * Here if speed is given 0 it will be ignored and 40 will be taken as the value of the speed parameter
	speed: speed ?? 40,
	// * Only the null or undefined value is checked this is equivalent to (speed!==null ? speed:40)
}

console.log(ride.speed)
