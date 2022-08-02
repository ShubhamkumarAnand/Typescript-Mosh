// Abstract Classes and Methods - A class which is not ready to be used so it will be implemented.

abstract class Shape {
	constructor(public color: string) {}

	// Abstract Methods - A method which is not ready to be implemented so other methods will override this.
	// Abstract Methods - Only available inside abstract class.
	abstract render(): void
}

class Circle extends Shape {
	constructor(public radius: number, color: string) {
		super(color)
	}
	override render(): void {
		console.log('rendering the circle shape')
	}
}

/*
* This doesn't mean anything at all. so to stop the rendering of the class shape we created it as an abstract class.
let shape = new Shape('red')
shape.render()
*/

let circle = new Circle(12, 'blue')
circle.render()
