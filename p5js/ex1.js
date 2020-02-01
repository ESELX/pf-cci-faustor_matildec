

let circles = [];
let num = 1;
var score = 100;

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
      score = score-1;
    }
  }

}


function draw() {
  background(50);
  // mousePressed();
  noStroke();
  fill(250);
  textSize(20);
  textAlign(LEFT);
  text('Retira todos números que não são primos!', 10, 25);
  text(score, width-60 ,25);
  for (let i = 0; i < circles.length; i++) {
    if (circles[i].contains(mouseX,mouseY)) {
      circles[i].changeColor(255);
    } else {
      circles[i].changeColor(50);
    }
      circles[i].show();
    }

    if(score < 26){
      noStroke();
      fill(250);
      textSize(100);
      textAlign(CENTER);
      text('Conseguiste!', width/2, height/2);
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
   noStroke();
   fill(255);
   textAlign(CENTER, CENTER);
   text(num, this.x,this.y);
  }
}
