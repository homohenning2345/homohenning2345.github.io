let walker;

function setup() {
  createCanvas(windowWidth, windowHeight);
  walker = new Walker(windowWidth/2 , windowHeight/2);
  background(0);
}

function draw() {
  walker.update();
  walker.show();
}