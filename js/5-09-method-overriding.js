// /*
// METHOD OVERRIDING
// */

// /*
// using ES6
// */
class Shape {
  move() {
    console.log('move');
  }
}

class Circle extends Shape {
  move() {
    console.log('circle move');
  }
}

const c = new Circle();

// /*
// NOT using ES6 / Prototypical Inheritance
// */
function Shape() {}

Shape.prototype.move = function() {
  console.log('move');
};

function Circle() {}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.move = function() {
  console.log('circle move');
};

const c = new Circle();

// /*
// CALL THE IMPLEMENTATION ON THE PARENT
// */

// /*
// using ES6
// */
class Shape {
  move() {
    console.log('move');
  }
}

class Circle extends Shape {
  move() {
    super.move();
    console.log('circle move');
  }
}

const c = new Circle();

// /*
// NOT using ES6 / Prototypical Inheritance
// */
function Shape() {}

Shape.prototype.move = function() {
  console.log('move');
};

function Circle() {}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.move = function() {
  // Shape.prototype.move.call(this);
  Shape.prototype.move();
  console.log('circle move');
};

const c = new Circle();
