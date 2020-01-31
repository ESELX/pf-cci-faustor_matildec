let circles = [];

function setup(){

  createCanvas(windowWidth,windowHeight);
  for (let i = 0; i < 100; i++) {
    let x = random(width);
    let y = random(50, height);
    let d = 50;
    circles[i] = new circle (x,y,d);
  }

}


function draw() {
  background(50);

  for (let circle of circles) {
    circle.show();
  }

  for (let i = 0; i < circles.length; i++) {

    circles[i].show();
  }
}

class circle {
  constructor(x, y, d) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.brightness = 0;
  }

  changeColor(bright) {
      this.brightness = bright;
    }

    contains(px, py) {
      let r = dist(px, py, this.x, this.y);
      if (r < this.d) {
        return true;
      } else {
        return false;
      }
    }

  show() {
   stroke(255);
   strokeWeight(4);
   fill(this.brightness, 125);
   ellipse(this.x, this.y, this.d);
  }
}
