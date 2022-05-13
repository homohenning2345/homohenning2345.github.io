let points = []
let mult = 0.005

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(30)
  angleMode(radians)
  
  let density = 20
  let space = width / density

  for (let x = 0; x < width; x += space) {
    for (let y = 0; y < height; y += space) {
      let p = createVector(x + random(-10, 10), y + random(-10,10))
      points.push(p)
    }
  }
}

function draw() {
  noStroke()
  fill(255)
  for (let i = 0; i < points.length; i++) {

    let angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, TAU)

    points[i].add(createVector(cos(angle), sin(angle)))

    ellipse(points[i].x, points[i].y, 1)
  }
}