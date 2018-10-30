/*
So with current implementation, 
if we have, let say "1000 circle objects" in the memory,
We're going to have "1000 copies" of the draw method.
Now this is a very simplified example, 
In a real world application, your object might have several methods, 
So if you want to have a large number of these objects in the memory,
You're going to waste a lot of memory by keeping copies of all these methods
*/
// function Circle(radius) {
//   this.radius = radius;

//   this.draw = function() {
//     console.log('draw');
//   };
// }

// const c1 = new Circle(1);
// const c2 = new Circle(1);

// console.log(Object.keys(c1)); // ["radius", "draw"]

/*
So what's the solution ?
you can :
		- take this "draw method" out of circle object, and 
		- put it in it's prototype
*/
// function Circle(radius) {
//   this.radius = radius;
// }

// Circle.prototype.draw = function() {
//   console.log('draw');
// };

// const c1 = new Circle(1);
// const c2 = new Circle(1);

// console.log(Object.keys(c1)); // ["radius"]
// console.log(c1.toString()); // "[object Object]" -> Default Implementation of toString() method

/*
So essentially we have 2 kinds of properties and methods in JavaScript.
  We have:
    i. INSTANCE MEMBERS (Instance properties and methods)
    ii. PROTOTYPE MEMBERS
We can overwrite the implementation of this method in the prototype of our "Circle objects"
*/
// function Circle(radius) {
//   this.radius = radius;
// }

// Circle.prototype.draw = function() {
//   console.log('draw');
// };

// Circle.prototype.toString = function() {
//   console.log('Circle with radius ' + this.radius);
// };

// const c1 = new Circle(1);
// const c2 = new Circle(1);

// console.log(c1.toString()); // "Circle with radius 1"

/* BTW, REMEMBER THAT IN BOTH THIS KIND OF MEMBERS, YOU CAN REFERENCE OTHER MEMBERS
  ABILITY #1  ( "a prototype method/member" call "instance method/member" ) */
// function Circle(radius) {
//   this.radius = radius;

//   this.move = function() {
//     console.log('move');
//   }
// }

// Circle.prototype.draw = function() {
//   this.move();
//   console.log('draw');
// };

// Circle.prototype.toString = function() {
//   console.log('Circle with radius ' + this.radius);
// };

// const c1 = new Circle(1);
// const c2 = new Circle(1);

// console.log(c1.draw()); // move, draw

/* ABILITY #2 ( "a instance method/member" call "prototype method/member" ) */
function Circle(radius) {
  this.radius = radius;

  this.move = function() {
    this.draw();
    console.log('move');
  };
}

Circle.prototype.draw = function() {
  console.log('draw');
};

Circle.prototype.toString = function() {
  console.log('Circle with radius ' + this.radius);
};

const c1 = new Circle(1);
const c2 = new Circle(1);

console.log(c1.move()); // draw, move
