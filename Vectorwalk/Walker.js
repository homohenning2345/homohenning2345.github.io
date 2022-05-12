class Walker {
  constructor(x, y) {
    this.pos = createVector(x, y);
  }

  update() {
    this.pos.x = this.pos.x + random(-1, 1);
    this.pos.y = this.pos.y + random(-1, 1);
  }

  show() {
    stroke(0, 255, 0);
    strokeWeight(4);
    point(this.pos.x, this.pos.y);
  }
}