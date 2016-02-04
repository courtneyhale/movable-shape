// give movableShape a nice, descriptive name to work with here
// (i.e., replace the variable name myShape with something more descriptive (e.g., myCar, myRocket).)
var myRocket = movableShape;

// Redefine drawShape() by putting your moving shape in here
// (Basically, you can copy and paste your code from last time, although you may wish to refactor it so that it's more readable.)
// That said, you may wish to try putting your unrefactored, raw drawing code from week 1 in here
myRocket.drawShape = function () {
	var rocket = {
	  x:100, // rocket x
	  y:300, // rocket y
	  width: 200, // rocket width
	  height: 400, // rocket body height
	  topHeight: 100,
	  draw: function () {
	    this.drawStructure();
	    this.drawTop();
	    this.drawLeftwing();
	    this.drawRightwing();
	  },
	  drawStructure: function() {
	    rect(this.x, this.y, this.width, this.height);//draw a structure
	  },
	  drawTop: function() {
	    var leftCorner = {
	      x: this.x,
	      y: this.y
	    };
	    var topPoint = {
	      x: this.width / 2 + this.x,
	      y: this.topHeight
	    };
	    var rightCorner = {
	      x: this.x + this.width,
	      y: this.y
	    }
	    triangle(leftCorner.x, leftCorner.y,topPoint.x, topPoint.y, rightCorner.x, rightCorner.y);
	  },
	  drawLeftwing: function() {
	    var leftwingCorner = {
	      x: this.x,
	      y: this.y
	    };
	    var topwingPoint = {
	      x: this.x,
	      y: this.y
	    };
	    var rightwingCorner = {
	      x: this.x,
	      y: this.y
	    }
	    triangle(leftwingCorner.x - 80, leftwingCorner.y + 400, topwingPoint.x, topwingPoint.y +300, rightwingCorner.x, rightwingCorner.y + 400);
	  },
	  drawRightwing: function() {
	    var leftwCorner = {
	      x: this.x,
	      y: this.y
	    };
	    var topwPoint = {
	      x: this.x,
	      y: this.y
	    };
	    var rightwCorner = {
	      x: this.x,
	      y: this.y
	    }
	    triangle(leftwCorner.x + 200, leftwCorner.y + 400, topwPoint.x + 200, topwPoint.y + 300, rightwCorner.x + 280, rightwCorner.y + 400);
	  },
	};
	function setup () {
	    createCanvas(700, 700);

	    rocket.draw();

	};

	function draw() {

	};
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
