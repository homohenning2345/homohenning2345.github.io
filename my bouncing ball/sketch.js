
let xPos = 200;
let yPos = xPos
let Size = 40
let xSpeed = 1
let ySpeed = 2
let diameter = Size * 2
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  // Tegner bolden
  circle(xPos, yPos, diameter)

  xPos = xPos +  xSpeed
  yPos = yPos +  ySpeed

  // Farve til bolden
  let pastMiddleOfCanvas = width / 2 > xPos
  if (pastMiddleOfCanvas) {
    fill('yellow')
  } else {
    fill('orange')
  }

  // For den til at flytte sig fra 
  let pastLeftEdge = 0 > xPos - Size
  let pastRightEdge = width < xPos + Size
  if (pastRightEdge || pastLeftEdge) {
    xSpeed = -xSpeed
  }

  let belowbottom = height < yPos + Size
  let abovetop = 0 > yPos - Size
  if(belowbottom || abovetop){
    ySpeed = -ySpeed
  }
}
