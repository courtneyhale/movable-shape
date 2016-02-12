// give movableShape a nice, descriptive name to work with here
// (i.e., replace the variable name myShape with something more descriptive (e.g., myCar, myRocket).)
var myCar = movableShape;

// Redefine drawShape() by putting your moving shape in here
// (Basically, you can copy and paste your code from last time, although you may wish to refactor it so that it's more readable.)
// That said, you may wish to try putting your unrefactored, raw drawing code from week 1 in here
myCar.drawShape = function () {
	fill('green'); //green car
	rect(300,400,400,100); // car top
	rect(200,500,600,170);//car base
	fill('white');// white window color
	rect(610,420,60,60);//window
	fill('red'); //red break lights
	rect(200,560,20,50);// break lights
	fill('yellow');// yellow head lights
	rect(780,560,20,50);//head lights
	fill('black');//black tires
	ellipse(280,660,70,70);//rear tire
	ellipse(680,660,70,70);// front tire
	fill('white');// white inside circle
	ellipse(280,660,40,40);//rear inside circle
	ellipse(680,660,40,40);//front inside circle
};

// You will also need to do some work to set the speed of the shape. How do you want it to move? What do you need to change to get it to move?

setup = function() {
	createCanvas(1000, 1000);
	myCar.x = 0;
	myCar.speed.x = 1;
};

draw = function() {
  background(100); // refresh the background
  myCar.display(); // display myShape
  myCar.update(); // and then update it
};
