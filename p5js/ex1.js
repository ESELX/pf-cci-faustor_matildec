let circles = [];

function setup(){

  createCanvas(windowWidth,windowHeight);
  for (let i = 0; i < 100; i++) {
    let x = random(width);
    let y = random(50, height);
    let d = 50;
    let c = new circle (x,y,d);
    circles.push(c);
  }

}

function mousePressed() {
  for (let i = circles.length - 1; i >= 0; i--) {
    if (circles[i].contains(mouseX, mouseY)) {
      circles.splice(i,1);
    }
  }
}


function draw() {
  background(50);
  for (let i = 0; i < circles.length; i++) {
    if (circles[i].contains(mouseX,mouseY)) {
      circles[i].changeColor(255);
    } else {
      circles[i].changeColor(50);
    }
      circles[i].show();
    }
  }
//  for (let circle of circles) {
//    circle.show();
//  }
//
//  for (let i = 0; i < circles.length; i++) {
//
//    circles[i].show();
//  }
//}

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
