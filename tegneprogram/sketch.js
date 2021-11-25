// line start points
let startXs = []
let startYs = []
// line end points
let endXs = []
let endYs = []

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function reset() {
  startXs = []
  endXs = []
  startYs = []
  endYs = []
}

function addLine(x1, y1, x2, y2) {
  startXs.push(x1)
  startYs.push(y1)
  endXs.push(x2)
  endYs.push(y2)
}

function draw() {
  background(220)
  for (let i = 0; i < endXs.length; i++) {
    line(startXs[i], startYs[i], endXs[i], endYs[i])
  }

  if (mouseIsPressed) {
    setLastEnd(mouseX, mouseY)
  }
}

function setLastEnd(x, y) {
  let lastIndex = endXs.length - 1
  endXs[lastIndex] = x
  endYs[lastIndex] = y
}

function keyPressed() {
  if (key == 'e') {
    reset();
  }
}

function mousePressed() {
  let x = mouseX
  let y = mouseY
  startXs.push(x)
  startYs.push(y)
  endXs.push(x)
  endYs.push(y)
}

function mouseReleased() {
  setLastEnd(mouseX, mouseY)
}