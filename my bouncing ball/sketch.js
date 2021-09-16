
let xPos = 0;
let yPos = 200;
let Size = 75
let speed = 1

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

circle(xPos,yPos,Size)
xPos = xPos +(3*speed);


}
