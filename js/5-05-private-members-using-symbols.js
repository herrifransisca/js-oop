const _radius = Symbol();
const _draw = Symbol();

class Circle {
  constructor(radius) {
    this[_radius] = radius;
  }

  [_draw]() {
    console.log('draw');
  }
}

const circle = new Circle(1);
const key = Object.getOwnPropertySymbols(circle)[1];
console.log(circle[key]);
