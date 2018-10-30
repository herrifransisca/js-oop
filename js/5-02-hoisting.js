sayHello(); // works -> hoisted
sayGoodbye(); // NOT WORKING -> NOT HOISTED
console.log(number); // we're going to get the same error like sayGoodbye() -> NOT HOISTED / NOT INITALIZED

// Function Declaration
function sayHello() {}

// Function Expression
const sayGoodbye = function() {};
const number = 1;

/*
When It comes to CLASSES, 
we CAN DEFINE CLASSES using a "Declaration Syntax" or "Expression Syntax"
*/
const circle = new Circle(); // NOT WORKING -> NOT HOISTED
const square = new Square(); // NOT WORKING -> NOT HOISTED

// Function Declaration
class Circle {}

// Function Expression
const Square = class {};
