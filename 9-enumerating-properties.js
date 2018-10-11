// using "for in loop"
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  };
}

const circle = new Circle(10);

for (let key in circle) {
  if (typeof circle[key] !== 'function')
    console.log(key, circle[key], typeof circle[key]);
}

/* There's another approach to get all the keys in a object 
	This would return all the keys in the "circle" as an array.
	With this approach we cannot separate properties from method */
const keys = Object.keys('circle');
console.log(keys); // ["radius", "draw"]

/*Finally, sometimes you wanna know if an object has given property.
For that we use "IN" operator*/
if ('radius' in circle) console.log('Circle has a radius.');
