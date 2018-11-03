// mosh's code
const _items = new WeakMap();

class Stack {
  constructor() {
    _items.set(this, []);
  }

  push(obj) {
    _items.get(this).push(obj);
  }

  pop() {
    const items = _items.get(this);

    if (items.length === 0) throw new Error('Stack is empty.');

    return items.pop();
  }

  peek() {
    const items = _items.get(this);

    if (items.length === 0) throw new Error('Stack is empty.');

    return items[items.length - 1];
  }

  get count() {
    return _items.get(this).length;
  }
}

// herri's code - After Refactoring #2
// const _box = new WeakMap();

// class Stack {
//   constructor() {
//     _box.set(this, []);
//   }

//   get count() {
//     return _box.get(this).length;
//   }

//   push(obj) {
//     _box.get(this).push(obj);
//   }

//   pop() {
//     if (_box.get(this).length === 0) throw new Error('Stack is empty.');
//     return _box.get(this).pop();
//   }

//   peek() {
//     if (_box.get(this).length === 0) throw new Error('Stack is empty.');

//     // way #1
//     // return [..._box.get(this)].pop();

//     // way #2
//     const lastPosition = _box.get(this).length - 1;
//     return _box.get(this)[lastPosition];
//   }
// }

// herri's code - After Refactoring #1
// const _box = new WeakMap();

// class Stack {
//   constructor() {
//     _box.set(this, []);
//   }

//   get count() {
//     return _box.get(this).length;
//   }

//   push(obj) {
//     let box = _box.get(this);
//     box.push(obj);
//     _box.set(this, box);
//   }

//   pop() {
//     if (_box.get(this).length === 0) throw new Error('Stack is empty.');

//     const box = _box.get(this);
//     const item = box.pop();
//     _box.set(this, box);

//     return item;
//   }

//   peek() {
//     if (_box.get(this).length === 0) throw new Error('Stack is empty.');
//     return [..._box.get(this)].pop();
//   }
// }

// herri's code - Before Refactoring
// const _box = new WeakMap();
// const _count = new WeakMap();

// class Stack {
//   constructor() {
//     _box.set(this, []);
//     _count.set(this, 0);
//   }

//   get count() {
//     return _count.get(this);
//   }

//   push(obj) {
//     let box = _box.get(this);
//     box.push(obj);
//     _box.set(this, box);

//     let count = _count.get(this);
//     count++;
//     _count.set(this, count);
//   }

//   pop() {
//     if (_count.get(this) === 0) throw new Error('Stack is empty.');

//     let count = _count.get(this);
//     count--;
//     _count.set(this, count);

//     const box = _box.get(this);
//     const item = box.pop();
//     _box.set(this, box);

//     return item;
//   }

//   peek() {
//     if (_count.get(this) === 0) throw new Error('Stack is empty.');

//     const box = [..._box.get(this)];
//     return box.pop();
//   }
// }
