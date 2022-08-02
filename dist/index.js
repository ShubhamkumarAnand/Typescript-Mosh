"use strict";
class Shape {
    color;
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    radius;
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log('rendering the circle shape');
    }
}
let circle = new Circle(12, 'blue');
circle.render();
//# sourceMappingURL=index.js.map