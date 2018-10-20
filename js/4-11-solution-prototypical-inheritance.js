// Mosh's code
function HtmlElement() {
  this.click = function() {
    console.log('clicked');
  };
}

HtmlElement.prototype.focus = function() {
  console.log('focused');
};

function HtmlSelectElement(items = []) {
  this.items = items;

  this.addItem = function(item) {
    this.item.push(item);
  };

  this.removeItem = function(item) {
    this.item.splice(this.items.indexOf(item), 1);
  };
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

// // Herri's code
// function extend() {
//   Child.prototype = Object.create(Parent.prototype);
//   Child.prototype.constructor = Child;
// }

// function HtmlElement() {
//   this.click = function() {
//     console.log('clicked');
//   };
// }

// HtmlElement.prototype.focus = function() {
//   console.log('focused');
// };

// const e = new HtmlElement();
// e.click();
// e.focus();

// function HtmlSelectElement(...items) {
//   // HtmlElement.call(this);

//   this.items = items;

//   this.addItem = function(item) {
//     this.items.push(item);
//   };

//   this.removeItem = function(item) {
//     const position = this.items.indexOf(item);
//     this.items.splice(position, 1);
//   };
// }

// // extend(HtmlSelectElement, HtmlElement);
// HtmlSelectElement.prototype = Object.create(e);
// HtmlSelectElement.prototype.constructor = HtmlSelectElement;

// const s = new HtmlSelectElement();
// console.log(s);
