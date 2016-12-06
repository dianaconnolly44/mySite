var cloudShape = {x: 30, y: 110, w:40, h: 20};
var cloud2Shape = {x: 500, y:50, w: 50, h:30};
var cloud3Shape = {x: 300, y: 70, w:25, h: 15};
var car = {x: 500, y: 340};
var car2 = {x: 200, y: 340};
var car3 = {x: 35, y:390};
var airplane = {x: 30, y: 30, w: 40, h: 10};
var airplane2 = {x: 590, y: 70, w: 40, h: 10};
var myCanvas;

//initial cloud colors and transparencies
var cloudColor = 150;
var cloudTransparency = 80;
var cloud2Color = 150;
var cloud2Transparency = 80;
var cloud3Color = 180;
var cloud3Transparency = 70;

//initial car1's color
var carR = 100;
var carG = 100;
var carB = 135;

//initial car2's color
var car2R = 100;
var car2G = 30;
var car2B = 80;

//initial car3's color
var car3R = 60;
var car3G = 180;
var car3B = 30;

var image1Location = 0; //begins first image at x=0
var image2Location = 1200; //begins second image at x=1200, twice the canvas width


function preload() {
    image1 = loadImage("http://i.imgur.com/kw0nRXj.png"); //loads fist background image
    image2 = loadImage("http://i.imgur.com/kw0nRXj.png"); //loads second background image
}

function setup() {
    myCanvas = createCanvas(600,400);
    myCanvas.parent("myCanvasGoesHere");
}

function draw() {
    noStroke();
    image(image1, image1Location,0, width*2,height); //background image
    image1Location = image1Location - 1; //shifts the background image to the left
    image(image2, image2Location,0, width*2,height); //background image
    image2Location = image2Location - 1; //shifts the background image#2 to the left
    //connects the two separate images into a continuous background loop:
    if (image1Location == -width) { //when image1 goes off the canvas
        image2Location = width; //start image2 on the canvas
    } else if (image2Location == -width) { //when image2 goes off the canvas
        image1Location = width; //start image1 on the canvas
    }

    drawStars();
    drawPlane();
    drawPlane2();
    drawCloud();
    drawCloud2();
    drawCloud3();
    drawCar1();
    drawCar2();
    drawCar3();
    
}

function drawStars() {
    fill(255,255,0,70); //yellow hue
    var starX = 60;
    var starY = 5;
    //draws lil star ellipses:
    ellipse(starX,60,starY,5);
    ellipse(starX+310,starY*6,8,8);
    ellipse(starX+325,starY*7,4,4);
    ellipse(starX+410,starY*9,6,6);
    ellipse(starX+100,starY*2,5,5);
    ellipse(starX+525,starY*4,4,4);
}

function drawPlane() {
    fill(0);
    ellipse(airplane.x, airplane.y, airplane.w, airplane.h); //body
    triangle(airplane.x-24,airplane.y-10, airplane.x-20,airplane.y, airplane.x-5,airplane.y); //tail
    ellipse(airplane.x+8,airplane.y+1,airplane.w-10,7); //nose
    triangle(airplane.x-3,airplane.y+10, airplane.x-6,airplane.y+5, airplane.x+5,airplane.y+5); //wing
    fill("yellow");
    ellipse(airplane.x+15,airplane.y-2,airplane.w/8,airplane.h-7); //eye
    airplane.x +=1.5; //moves right
    if (airplane.x >= 650) { //randomizes height of plane after off screen
        airplane.x = -130;
        airplane.y = random(10, 60);
    }
}

function drawPlane2() {
    fill(0);
    ellipse(airplane2.x, airplane2.y, airplane2.w, airplane2.h); //body
    triangle(airplane2.x+24,airplane2.y-10, airplane2.x+20,airplane2.y, airplane2.x+5,airplane2.y); //tail
    ellipse(airplane2.x-8,airplane2.y+1,airplane2.w-10,7); //nose
    triangle(airplane2.x-3,airplane2.y+10, airplane2.x-6,airplane2.y+5, airplane2.x+5,airplane2.y+5); //wing
    fill("yellow");
    ellipse(airplane2.x-15,airplane2.y-2,airplane2.w/8,airplane2.h-7); //eye
    airplane2.x -=1.5; //moves right
    if (airplane2.x <= -230) { //randomizes height of plane after off screen
        airplane2.x = width+130;
        airplane2.y = random(10, 60);
    }
}

function drawCloud() {
    fill(cloudColor, cloudTransparency);
    //ellipses to make up the cloud:
    ellipse(cloudShape.x-15, cloudShape.y, cloudShape.w+10,cloudShape.h);
    ellipse(cloudShape.x, cloudShape.y-10, cloudShape.w-10,cloudShape.h);
    ellipse(cloudShape.x+25, cloudShape.y-3, cloudShape.w,cloudShape.h);
    ellipse(cloudShape.x+35, cloudShape.y+5, cloudShape.w-10,cloudShape.h);
    ellipse(cloudShape.x+45, cloudShape.y, cloudShape.w,cloudShape.h);
    ellipse(cloudShape.x, cloudShape.y, cloudShape.w,cloudShape.h);
    cloudShape.x = cloudShape.x - .7; //moves right
    if(cloudShape.x <= -100) { //randomizes the properties once off screen
        cloudShape.x = width+80;
        cloudShape.y = random(30,110);
        cloudColor = random(150,255);
        cloudTransparency = random(60,80);
        cloudShape.h = random(30,25);
    }
}

function drawCloud2() {
    fill(cloud2Color, cloud2Transparency);
    //ellipses to make up the cloud:
    ellipse(cloud2Shape.x-15, cloud2Shape.y, cloud2Shape.w+10,cloud2Shape.h);
    ellipse(cloud2Shape.x, cloud2Shape.y-10, cloud2Shape.w-10,cloud2Shape.h);
    ellipse(cloud2Shape.x+25, cloud2Shape.y-3, cloud2Shape.w,cloud2Shape.h+5);
    ellipse(cloud2Shape.x+35, cloud2Shape.y+5, cloud2Shape.w-10,cloud2Shape.h);
    ellipse(cloud2Shape.x+45, cloud2Shape.y, cloud2Shape.w,cloud2Shape.h);
    ellipse(cloud2Shape.x, cloud2Shape.y, cloud2Shape.w,cloud2Shape.h);
    cloud2Shape.x = cloud2Shape.x - .6; //moves left
    if(cloud2Shape.x <= -100) { //randomizes the properties once off screen
        cloud2Shape.x = width+100;
        cloud2Shape.y = random(30,110);
        cloud2Color = random(150,255);
        cloud2Transparency = random(60,80);
        cloud2Shape.h = random(40,35);
    }
}

function drawCloud3() {
    fill(cloud3Color, cloud3Transparency);
    //ellipses to make up the cloud:
    ellipse(cloud3Shape.x-5, cloud3Shape.y, cloud3Shape.w+10,cloud3Shape.h);
    ellipse(cloud3Shape.x, cloud3Shape.y-7, cloud3Shape.w-10,cloud3Shape.h);
    ellipse(cloud3Shape.x+10, cloud3Shape.y-3, cloud3Shape.w,cloud3Shape.h+5);
    ellipse(cloud3Shape.x+15, cloud3Shape.y+3, cloud3Shape.w-10,cloud3Shape.h);
    ellipse(cloud3Shape.x+20, cloud3Shape.y, cloud3Shape.w,cloud3Shape.h);
    ellipse(cloud3Shape.x, cloud3Shape.y, cloud3Shape.w,cloud3Shape.h);
    cloud3Shape.x = cloud3Shape.x - .3; //moves left
    if(cloud3Shape.x <= -100) { //randomizes the properties once off screen
        cloud3Shape.x = width+100;
        cloud3Shape.y = random(30,110);
        cloud3Color = random(150,255);
        cloud3Transparency = random(60,80);
        cloud3Shape.h = random(5,25);
    }
}

function drawCar1() {
    var wheelSize = 15;

    fill(0);
        ellipse(car.x+2,car.y+25,wheelSize,wheelSize); //front wheel
        ellipse(car.x+45,car.y+25,wheelSize,wheelSize); //back wheel
    fill(carR, carG, carB);
        rect(car.x,car.y-5, 50,30,15,15,10,10); //top of car
        rect(car.x-18,car.y+10, 80,15,10); //body of car
    fill("lightBlue");
        rect(car.x+6,car.y,10,10,5,2,2,2); //front window
        rect(car.x+20,car.y,10,10,2,2,2,2); //middle window
        rect(car.x+34,car.y,10,10,2,5,2,2); //back window
    fill(255,255,0); //yellow
        rect(car.x-20,car.y+13,5,7,5,1,1,5); //headlight
    fill(255,255,0,75); //headlight haze
        triangle(car.x-40,car.y+10, car.x-20,car.y+17, car.x-40,car.y+26);
    car.x -=3; //moves left
    if (car.x <= -200) { //randomizes color when off screen and starts it back on the other side of canvas
        car.x = 800;
        carR = random(200);
        carG = random(200);
        carB = random(200);
    }
}

function drawCar2() {
    var wheelSize = 15;

    fill(0);
        ellipse(car2.x+2,car2.y+25,wheelSize,wheelSize); //front wheel
        ellipse(car2.x+45,car2.y+25,wheelSize,wheelSize); //back wheel
    fill(car2R, car2G, car2B);
        rect(car2.x,car2.y-5, 50,30,15,15,10,10); //top of car
        rect(car2.x-18,car2.y+10, 80,15,10); //body of car
    fill("lightBlue");
        rect(car2.x+6,car2.y,10,10,5,2,2,2); //front window
        rect(car2.x+20,car2.y,10,10,2,2,2,2); //middle window
        rect(car2.x+34,car2.y,10,10,2,5,2,2); //back window
    fill(255,255,0); //yellow
        rect(car2.x-20,car2.y+13,5,7,5,1,1,5); //headlight
    fill(255,255,0,75); //headlight haze
        triangle(car2.x-40,car2.y+10, car2.x-20,car2.y+17, car2.x-40,car2.y+26);
    car2.x -=3.8; //moves left
    if (car2.x <= -200) { //randomizes color when off screen and starts it back on the other side of canvas
        car2.x = 800;
        car2R = random(150);
        car2G = random(150);
        car2B = random(150);
    }
}

function drawCar3() {
    var wheelSize = 17;

    fill(0);
        ellipse(car3.x,car3.y, wheelSize, wheelSize); //back wheel
        ellipse(car3.x+50,car3.y, wheelSize, wheelSize); //front wheel
    fill(car3R, car3G, car3B);
        rect(car3.x-7,car3.y-34, 57,30,15,15,10,10); //top of car
        rect(car3.x-15,car3.y-17, 85,17,10); //body of car
    fill("lightBlue");
        rect(car3.x,car3.y-30,11,12,5,2,2,2); //front window
        rect(car3.x+16,car3.y-30,11,12,2,2,2,2); //middle window
        rect(car3.x+32,car3.y-30,11,12,2,5,2,2); //back window
    fill(255,255,0);
        rect(car3.x+65,car3.y-13,6,8,1,5,5,1); //headlight
    fill(255,255,0,75);
        triangle(car3.x+95,car3.y-20, car3.x+65,car3.y-10, car3.x+95,car3.y); //headlight haze
    car3.x +=3;
    if (car3.x >= width + 100) { //randomizes color when off screen and starts it back on the other side of canvas
        car3.x = -150;
        car3R = random(100);
        car3G = random(100);
        car3B = random(100);
    }
}