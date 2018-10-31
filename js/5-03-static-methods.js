class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // Instance method
  draw() {
    console.log('draw');
  }

  // Static method
  static parse(str) {
    const radius = JSON.parse(str).radius;
    return new Circle(radius);
  }
}

// const circle = new Circle(1);
const circle = Circle.parse('{ "radius": 1 }');
console.log(circle);

// another example
class Math2 {
  static abs(value) {
    // ...
  }
}

Math2.abs();
