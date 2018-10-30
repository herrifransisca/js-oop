/*
In the last lecture we converted these two members to private members,
more accurately these are NOT PRIVATE MEMBERS of this "Circle object", 
Because technically they are not inside of the "Circle object".
They are "local variable" that we have defined inside of this "Circle function"
But from the OBJECT-ORIENTED POINT OF VIEW, we can refer to them AS PRIVATE MEMBERS of the "Circle object"
*/
// function Circle(radius) {
//   this.radius = radius;

//   let defaultLocation = { x: 0, y: 0 };

//   let computeOptimumLocation = function(factor) {
//     // ...
//   };

//   this.draw = function() {
//     computeOptimumLocation(0.1);

//     console.log('draw');
//   };
// }

// const circle = new Circle(10);
// circle.draw();

/*
What if we wanna display that "defaultLocation" somewhere in our application
We don't wanna modify, just wanna be able to read it.
*/

// ONE SOLUTION:
// function Circle(radius) {
//   this.radius = radius;

//   let defaultLocation = { x: 0, y: 0 };

//   this.getDefaultLocation = function() {
//     return defaultLocation;
//   };

//   let computeOptimumLocation = function(factor) {
//     // ...
//   };

//   this.draw = function() {
//     computeOptimumLocation(0.1);

//     console.log('draw');
//   };
// }

// const circle = new Circle(10);
// circle.draw();
// circle.getDefaultLocation();

// ANOTHER SOLUTION
// GETTER, SETTER
function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  this.getDefaultLocation = function() {
    return defaultLocation;
  };

  let computeOptimumLocation = function(factor) {
    // ...
  };

  this.draw = function() {
    computeOptimumLocation(0.1);

    console.log('draw');
  };

  Object.defineProperty(this, 'defaultLocation', {
    get: function() {
      return defaultLocation;
    },
    set: function(value) {
      if (!value.x || !value.y) throw new Error('Invalid location.');
      defaultLocation = value;
    }
  });
}

const circle = new Circle(10);
circle.draw();
console.log(circle.defaultLocation);
