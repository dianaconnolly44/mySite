var myTurtle;
var startFrame;
var maze;
var myCanvas;

function preload() {
    maze = loadImage("http://i.imgur.com/dwclzf4.png");
}

function setup() {
    myCanvas = createCanvas(400, 440);
        myCanvas.parent("secondCanvasGoesHere");
    image(maze,0,20,width,height); //background maze image
    myTurtle = makeTurtle(30, 30); //starts turtle at starting point
    myTurtle.setColor(color(255, 200, 200)); //light pink turtle
    myTurtle.setWeight(2); //stroke weight of 2
    myTurtle.penDown();
    resetCanvas(); //resets canvas to keep drawing the line
    frameRate(10);
}

function draw() {
    if (mouseIsPressed) { //makes turtle follow where your mouse is dragged
        var step = (frameCount - startFrame)/30.0;
        myTurtle.goto(mouseX,mouseY);
        if (myTurtle.y > height) resetCanvas();
    }
}

function resetCanvas() { //updates the image
    image(maze,0,0,width,height);
    startFrame = frameCount;
    myTurtle.penUp();
    myTurtle.goto(30, 30);
    myTurtle.penDown();
}











//-------------------------------------------------------
//Turtle graphics given code
function turtleLeft(d){this.angle-=d;}function turtleRight(d){this.angle+=d;}
function turtleForward(p){var rad=radians(this.angle);var newx=this.x+cos(rad)*p;
var newy=this.y+sin(rad)*p;this.goto(newx,newy);}function turtleBack(p){
this.forward(-p);}function turtlePenDown(){this.penIsDown=true;}
function turtlePenUp(){this.penIsDown = false;}function turtleGoTo(x,y){
if(this.penIsDown){stroke(this.color);strokeWeight(this.weight);
line(this.x,this.y,x,y);}this.x = x;this.y = y;}function turtleDistTo(x,y){
return sqrt(sq(this.x-x)+sq(this.y-y));}function turtleAngleTo(x,y){
var absAngle=degrees(atan2(y-this.y,x-this.x));
var angle=((absAngle-this.angle)+360)%360.0;return angle;}
function turtleTurnToward(x,y,d){var angle = this.angleTo(x,y);if(angle< 180){
this.angle+=d;}else{this.angle-=d;}}function turtleSetColor(c){this.color=c;}
function turtleSetWeight(w){this.weight=w;}function turtleFace(angle){
this.angle = angle;}function makeTurtle(tx,ty){var turtle={x:tx,y:ty,
angle:0.0,penIsDown:true,color:color(128),weight:1,left:turtleLeft,
right:turtleRight,forward:turtleForward, back:turtleBack,penDown:turtlePenDown,
penUp:turtlePenUp,goto:turtleGoTo, angleto:turtleAngleTo,
turnToward:turtleTurnToward,distanceTo:turtleDistTo, angleTo:turtleAngleTo,
setColor:turtleSetColor, setWeight:turtleSetWeight,face:turtleFace};
return turtle;}