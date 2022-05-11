let walker;

function setup() {
  createCanvas(windowWidth, windowHeight);
  walker = new Walker(windowWidth/2 , windowHeight/2);

}

function draw() {
background(0);
  walker.update();
  walker.show();
}