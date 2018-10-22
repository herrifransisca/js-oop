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

  this.render = function() {
    const options = this.items
      .map(value => `<option>${value}</option>`)
      .join('');
    console.log(this.items);
    console.log(options);
  };
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

const s = new HtmlSelectElement([1, 2, 3]);
console.log('test');
