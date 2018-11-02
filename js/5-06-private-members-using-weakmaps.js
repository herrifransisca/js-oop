/* 
  this.radius = public property
*/
class Circle {
  constructor(radius) {
    this.radius = radius;
    this.move = function() {
      console.log('move');
    };
  }

  draw() {
    console.log(this.radius); // 10
    this.move(); // move
  }
}

const c = new Circle(10);
console.log(c);
c.draw();

/* 
  MAKE IT PRIVATE, WAY #1 - "Multiple WeakMap"
  this.radius = private property
  "private method", seems that IT HAVE TO BE DEFINED IN THE "constructor function", see _fly
*/
const _radius = new WeakMap();
const _move = new WeakMap();
const _fly = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);

    _move.set(this, () => console.log('move'));
  }

  // _fly.set(this, () => console.log('fly')); // doesn't work. seems that "private method" should be in the "constructor function"

  draw() {
    console.log(_radius.get(this)); // 10
    _move.get(this)(); // move
  }
}

const c = new Circle(10);
console.log(c);
c.draw();

/* 
  MAKE IT PRIVATE, WAY #2 - One WeakMap
  this.radius = private property
  "private method", seems that IT HAVE TO BE DEFINED IN THE "constructor function", see _fly
*/
const privateProps = new WeakMap();

class Circle {
  constructor(radius) {
    privateProps.set(this, {
      radius: radius,
      move: () => console.log('move')
    });
  }

  draw() {
    console.log(privateProps.get(this)); // { radius: 10, move: f }
    console.log(privateProps.get(this).radius); // 10
    privateProps.get(this).move(); // move
  }
}

const c = new Circle(10);
console.log(c);
c.draw();
