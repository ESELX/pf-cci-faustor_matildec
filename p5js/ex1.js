//variáveis
let circles = [];
let primos = [2,3,5,7,11,13,17,19,23,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97];
let score = 100;
let hp = false;


function setup(){

  createCanvas(windowWidth,windowHeight);
  let i = 1
  for (; i < 101; i++) {
    let x = random(width);
    let y = random(50, height);
    let d = 50;
    let c = new circle (x,y,d,i);
    circles.push(c);
  }


}

function mousePressed() {
  for (let i = 0; i <circles.length; i++) {
    if (circles[i].contains(mouseX, mouseY)) {
      let c = 0;
      while(c<primos.length){
        if(circles[i].num == primos[c]){
          hp = true;
        }
        c++;
      }
      circles.splice(i,1);
      score = score-1;
      }

  }

}


function draw() {
  background(50);
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

    if(hp == true){
      noStroke();
      fill(250);
      textSize(100);
      textAlign(CENTER);
      text('Perdeste', width/2, height/2);
    }

    if(score < 25){
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
  constructor(x, y, d, num) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.brightness = 0;
    this.num = num;
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
   text(this.num, this.x,this.y);
  }

}
