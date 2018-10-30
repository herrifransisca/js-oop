/*Let's introduce some complexity in this example.
	- Define another : property: "defaultLocation"
	- Define another: method: "computeOptimumLocation"
	- Inside of "draw method": call this method: "computeOptimumLocation"  */
function Circle(radius) {
  this.radius = radius;

  this.defaultLocation = { x: 0, y: 0 };

  this.computeOptimumLocation = function() {
    // ...
  };

  this.draw = function() {
    this.computeOptimumLocation();

    console.log('draw');
  };
}

const circle = new Circle(10);
