// give movableShape a nice, descriptive name to work with here
// (i.e., replace the variable name myShape with something more descriptive (e.g., myCar, myRocket).)
var myGirl = movableShape;

// Redefine drawShape() by putting your moving shape in here
// (Basically, you can copy and paste your code from last time, although you may wish to refactor it so that it's more readable.)
// That said, you may wish to try putting your unrefactored, raw drawing code from week 1 in here
myGirl.drawShape = function () {
	createCanvas(1000,1000)
	background('yellow');//yellow background
	line(200,400,350,500);//left arm
	line(600,400,400,540);//right arm
	line(350,700,350,800);//left leg
	line(450,700,450,800);//right leg
	fill('blue');//blue feet
	ellipse(310,800,90,30);//left foot
	ellipse(490,800,90,30);//right foot
	fill('pink');//pink dress
	triangle(400,400,250,700,550,700);//girl dress
	fill('white');//white face
	ellipse(400,360,180,180);//head
	ellipse(360,340,20,20);//left eye
	ellipse(440,340,20,20);//right eye
	fill('black');// black eyeball
	ellipse(360,342,12,17);//left eyeball
	ellipse(440,342,12,17);//right eyeball
	line(370,400,420,400);//smile

};

draw = function() {
  background(100); // refresh the background
	myGirl.x = 0;
	myGirl.speed.x = 1;
  myGirl.display(); // display myShape
  myGirl.update(); // and then update it
};
