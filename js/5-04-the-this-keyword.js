// const Circle = function() {
//   this.draw = function() {
//     console.log(this);
//   };
// };

// const c = new Circle();
// // Method call
// c.draw(); // circle object

// /*
// - get "the reference" for this method,
//   store it on the "constant" for draw
// - we call this method as a function,
//   BY DEFAULT "this" will point to "the global object"
// */
// const draw = c.draw;
// // Function call
// draw(); // window object

/*
in JavaScript we have this mode, that is called "STRICT MODE".
- add on the top: 'use strict';
- draw() -> returns "undefined"

  note: 
  EXPLICITLY ENABLE "this strict mode" on the top of this file OR NOT,
	JavaScript engine WILL EXECUTE  this body of this class, in the "strict mode" 
*/
'use strict';

const Circle = function() {
  this.draw = function() {
    console.log(this);
  };
};

const c = new Circle();
// Method call
c.draw(); // circle object

/*
- get "the reference" for this method,
  store it on the "constant" for draw
- we call this method as a function, 
  BY DEFAULT "this" will point to "the global object"
*/
const draw = c.draw;
// Function call
draw(); // undefined
