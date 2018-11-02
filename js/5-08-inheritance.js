// /*
// 1ST LEVEL - IMPLEMENT INHERITANCE
// */

// /*
// implement inheritance - NOT using ES6
// */
// function Shape() {}

// Shape.prototype.move = function() {
//   console.log('move');
// };

// function Circle() {}

// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;

// Circle.prototype.draw = function() {
//   console.log('draw');
// };

// const c = new Circle();

// /*
// implement inheritance - using ES6
// */
// class Shape {
//   move() {
//     console.log('move');
//   }
// }

// class Circle extends Shape {
//   draw() {
//     console.log('draw');
//   }
// }

// const c = new Circle();

/*
NEXT LEVEL - CALLING THE SUPER CONSTRUCTOR
*/

/*
calling the super constructor - NOT using ES6
*/
// function Shape(color) {
//   this.color = color;
// }

// Shape.prototype.move = function() {
//   console.log('move');
// };

// function Circle(color, radius) {
//   Shape.call(this, color);
//   this.radius = radius;
// }

// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;

// Circle.prototype.draw = function() {
//   console.log('draw');
// };

// const c = new Circle('red', 1);

/*
calling the super constructor - using ES6
*/
class Shape {
  constructor(color) {
    this.color = color;
  }

  move() {
    console.log('move');
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);

    this.radius = radius;
  }

  draw() {
    console.log('draw');
  }
}

const c = new Circle('red', 1);
