// Static Members

// A Static property is the property which belongs to the class not the object itself
class Ride {
	activeRides: number = 0
	start() {
		this.activeRides++
	}
	stop() {
		this.activeRides--
	}
}

let ride1 = new Ride()
ride1.start()
console.log(ride1.activeRides)

let ride2 = new Ride()
ride2.start()
console.log(ride2.activeRides)
