
//function setup() {
 // createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
//}

//function draw() {
 // background(255,255,255);  
 // drawSprites();
//}
function setup() {
  createCanvas(600, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(200,200);
  rotate(-90);
  
  var a = hour();
  var b = minute();
  var c = second();
  
  //making second dial
  
  strokeWeight(10);
  stroke("cyan");
  noFill();
  let secondHand= map(c,0,60,0,360);
  arc(0,0,300,300,0,secondHand);
  
  //making minute dial
  
  stroke("red");
  let minuteHand=map(b,0,60,0,360);
  arc(0,0,280,280,0,minuteHand);
  
  //making hour dial
  
  stroke("orange");
  let hourHand = map(a%12,0,12,0,360);
  arc(0,0,260,260,0,hourHand);
  
  //making second hand
  
  push();
  rotate(secondHand);
  stroke("cyan");
  line(0,0,50,0);
  pop();
  
  //making minute Hand
  
  push();
  rotate(minuteHand);
  stroke("purple");
  line(0,0,75,0);
  pop();
  
  //making hour hand
  
  push();
  rotate(hourHand);
  stroke("red");
  line(0,0,50,0);
  pop();
  fill("green")
  strokeWeight(4);
  stroke("orange");
  
  