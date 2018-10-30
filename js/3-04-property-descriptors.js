/*
Here's :
	- a person object and 
	- it is prototype ( __proto__: Object )
we have all this methods available
*/
let person = { name: 'Mosh' };
console.log(person); // { name: "Mosh" }

// So, we can type "person.toString()" and it works
let person = { name: 'Mosh' };
console.log(person.toString()); // "[object Object]"

/*
However if we iterate over the members of this object, WE'RE NOT GOING TO SEE "THIS METHOD: toString()"
The ONLY KEY we have here is "name"
None of the properties and methods defined in "objectBase"  are visible here.
*/
let person = { name: 'Mosh' };
for (let key in person) console.log(key); // name

/*
By the same token, 
if we call "Object.keys(person)", 
again we ONLY SEE the "name" property.
*/
console.log(Object.keys(person)); // ["name"]

/*
So, HOW COME WE CAN'T ITERATE OVER ALL THE PROPERTIES AND METHODS DEFINED IN "objectBase"?
	Well, the reason is because in JavaScript our properties have attributes attached to them.
	Sometimes these attributes prevent a property from being enumerated.
*/
let person = { name: 'Mosh' };
let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
console.log(descriptor);

// Now, WHEN YOU CREATE YOUR OWN OBJECTS, WE CAN SET THESE ATTRIBUTES TO YOUR PROPERTIES.
let person = { name: 'Mosh' };
Object.defineProperties(person, 'name', {
  writable: false,
  enumerable: false,
  configurable: false
});

person.name = 'John'; // no effect, name still 'Mosh'
console.log(Object.keys(person)); // [] empty array
delete person.name; // ["name"]

console.log(person);
