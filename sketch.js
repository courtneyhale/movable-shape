// give movableShape a nice, descriptive name to work with here
// (i.e., replace the variable name myShape with something more descriptive (e.g., myCar, myRocket).)
var myShape = movableShape;

// Redefine drawShape() by putting your moving shape in here
// (Basically, you can copy and paste your code from last time, although you may wish to refactor it so that it's more readable.)
// That said, you may wish to try putting your unrefactored, raw drawing code from week 1 in here
myShape.drawShape = function () {
	// your code goes here
};

// You will also need to do some work to set the speed of the shape. How do you want it to move? What do you need to change to get it to move?

setup = function() {
	createCanvas(600, 600);
};

draw = function() {
  background(100); // refresh the background
  myShape.display(); // display myShape
  myShape.update(); // and then update it
};
