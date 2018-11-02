const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);

    // Object.defineProperty(this, 'radius', {
    //   get: function() {
    //     return _radius.get(this);
    //   },
    //   set: function(value) {
    //     _radius.set(this, value);
    //   }
    // });
  }

  get radius() {
    return _radius.get(this);
  }

  set radius(value) {
    if (value <= 1) throw new Error('invalid radius');
    _radius.set(this, value);
  }
}

const c = new Circle(1);
console.log(c);
console.log(c.radius); // 1

c.radius = 10;
console.log(c.radius); // 10

c.radius = -1;
console.log(c.radius); // Error: invalid radius

console.log(c.radius); // 10
