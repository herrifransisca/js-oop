function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}

const canEat = {
  eat() {
    this.hunger--; // reduce the hunger
    console.log('eating');
  }
};

const canWalk = {
  walk() {
    console.log('walking');
  }
};

const canSwim = {
  swim: function() {
    console.log('swimming');
  }
};

function Person() {}

// Object.assign(Person.prototype, canEat, canWalk);
mixin(Person.prototype, canEat, canWalk);

// Object.assign({}, canEat, canWalk);
const person = new Person();
console.log(person);

function Goldfish() {}

mixin(Goldfish.prototype, canEat, canSwim);

const goldfish = new Goldfish();
console.log(goldfish);
