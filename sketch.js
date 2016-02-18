// give movableShape a nice, descriptive name to work with here
// (i.e., replace the variable name myShape with something more descriptive (e.g., myCar, myRocket).)
var myRocket = movableShape;

// Redefine drawShape() by putting your moving shape in here
// (Basically, you can copy and paste your code from last time, although you may wish to refactor it so that it's more readable.)
// That said, you may wish to try putting your unrefactored, raw drawing code from week 1 in here
myRocket.drawShape = function () {
	background('black');// black sky
  fill('red'); // rocket color
  rect(100,300,200,400); //rocket base
  fill('blue');//top color
  triangle(80,320,200,100,320,320); // rocket top
  fill('yellow'); //rocket window color
  ellipse(200,400,100,100); // rocket window
  fill('blue');//side triangle fill
  triangle(50,700,100,700,100,600);//left wing
  triangle(300,700,350,700,300,600);//right wing
};

// You will also need to do some work to set the speed of the shape. How do you want it to move? What do you need to change to get it to move?

setup = function() {
	createCanvas(1000, 1000);
	myRocket.y = 0;
	myRocket.speed.y = -1;
};

draw = function() {
  background(100); // refresh the background
  myRocket.display(); // display myShape
  myRocket.update(); // and then update it
};
