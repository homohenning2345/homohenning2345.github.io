function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  let centerHeadx;
  centerHeadx =200;
  let centerHeadY =100;

  let headSize = 50;

  // Tegner hovedet
  circle(centerHeadx, centerHeadY, headSize);

  strokeWeight(2)
  line(centerHeadx,125,200,230)
  // Tegner ben
  line(200,230,230,280)
  line(200,230,170,280)
  // Tegner Arme 
  line(200,160,150,135)
  line(200,160,250,135)
  // Tegner Øjne
  circle(190,98,10)
  circle(210,98,10)
  // Tegner mund
  noFill();
 arc(200,105, 20, 25,QUARTER_PI,PI-QUARTER_PI);
}