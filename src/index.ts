// Static Members

// A Static property is the property which belongs to the class not the object itself
// A Static property has only one memory space in the computer which is on the class.
class Ride {
	private static _activeRides: number = 0
	start() {
		Ride._activeRides++
	}
	stop() {
		Ride._activeRides--
	}
	// Only to prevent it to set it from outside
	static get activeRides() {
		return Ride._activeRides
	}
}

// Property '_activeRides' is private and only accessible within class 'Ride'.
// Ride._activeRides = 10

let ride1 = new Ride()
ride1.start()

let ride2 = new Ride()
ride2.start()

console.log(Ride.activeRides)
