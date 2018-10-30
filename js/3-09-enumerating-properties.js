function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  };
}

const circle = new Circle(10);

// Sometimes you need to iterate over / enumerate the properties on an object.
for (let key in circle) console.log(key, circle[key]); // radius 10, draw f {}

// What if you wanna GET ONLY THE PROPERTIES and NOT THE METHODS ?
for (let key in circle)
  if (typeof circle[key] !== 'function') console.log(key, circle[key]); // radius 10

/*
There's another approach to GET ALL THE KEYS IN A OBJECT.
	This would "RETURN ALL THE KEYS IN THE CIRCLE AS AN ARRAY"
	With this approach, we cannot separate properties from methods.
*/
const keys = Object.keys(circle);
console.log(keys);

/*
Finally sometimes you wanna know if an object has a given property
	For that we use "IN OPERATOR"
	Here we add "the name of the property as a string: 'radius'"
*/
if ('radius' in circle) console.log('Circle has a radius.');
