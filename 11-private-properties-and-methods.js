/* How do we implement ABSTRACTION here ?
We wanna hide certain members from the outside. */

// 	END RESULT - BEFORE
function Circle(radius) {
  this.radius = radius;

  this.defaultLocation = { x: 0, y: 0 };

  this.computeOptimumLocation = function(factor) {
    // ...
  };

  this.draw = function() {
    this.computeOptimumLocation(0.1);

    console.log('draw');
  };
}

const circle = new Circle(10);
circle.draw();

// 	END RESULT - AFTER
function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  let computeOptimumLocation = function(factor) {
    // ...
  };

  this.draw = function() {
    computeOptimumLocation(0.1);

    console.log('draw');
  };
}

const circle = new Circle(10);
circle.draw();
