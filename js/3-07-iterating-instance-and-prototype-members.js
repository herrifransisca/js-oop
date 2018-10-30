// 	It doesn't matter WHEN you change the prototype

// you're modifying the prototype before creating an object
function Circle(radius) {
  this.radius = radius;

  this.move = function() {
    console.log('move');
  };
}

// Prototype members
Circle.prototype.draw = function() {
  console.log('draw');
};

const c1 = new Circle(1);

// You can create an object first and then modify the prototype
function Circle(radius) {
  this.radius = radius;

  this.move = function() {
    console.log('move');
  };
}

const c1 = new Circle(1);

// Prototype members
Circle.prototype.draw = function() {
  console.log('draw');
};

// The draw method will still be available on the "Circle object"
c1.draw();

// 	HOW TO ITERATE OVER "INSTANCE" VERSUS "PROTOTYPE" PROPERTY

// "Object.keys() method"
// returns instance members
console.log(Object.keys(c1)); // ["radius", "move"]

// "FOR IN LOOP"
// returns all members (instance + prototype)
for (let key in c1) console.log(key);

/*
	In JavaScript language, we often use the word "OWN" instead of "INSTANCE"
	So, in some documents, tutorials, you might hear "OWN PROPERTY" VERSUS "PROTOTYPE PROPERTY"
*/

// "A USEFUL METHOD"
c1.hasOwnProperty('radius'); // true
c1.hasOwnProperty('draw'); // false
