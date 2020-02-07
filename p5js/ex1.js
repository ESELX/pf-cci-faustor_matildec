//lista de variáveis

let circles = [];
let primos = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97];

let score = 75;
let hp = false;

let control = false;


//setup
function setup(){

  createCanvas(windowWidth,windowHeight);

  let i = 1
  for (; i < 101; i++) {
    let x = random(75,width-75);
    let y = random(75,height-50);
    let r = 25;
    let c = new circle (x,y,r,i);
    let otherx = random(75,width-75);
    let othery = random(75,height-50);
    circles.push(c);

  }
}

//draw
function draw() {
  background(50);

  noStroke();
  fill(250);
  textSize(20);
  textAlign(LEFT);
  text('Retira os números compostos', 10, 25);

  text(score, width-60 ,25);

  // textSize(10);
  // text('© Fausto Ribeiro e Matilde Coelho, 2020', width-200, height-10);

  for (let i = 0; i < circles.length; i++) {
    if (circles[i].contains(mouseX,mouseY)) {
      circles[i].changeColor(255);
    } else {
      circles[i].changeColor(50);
    }
      circles[i].show();
      circles[i].move();
  }

    if(score < 1){
      background('rgba(random(150,255),0,0, 0.25)');
      noStroke();
      fill(250);
      textSize(100);
      textAlign(CENTER);
      text('Conseguiste!', width/2, height/2);
      textSize(40);
      text('Conheces os números primos!', width/2, height/2+75);
      textSize(25);
      text('Eles são', width/2, height/2+120);
      textSize(20);
      text('2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97', width/2, height/2+160);
      noLoop();
    }

    if(hp == true){
      background(random(150,255),0,0);
      fill(250);
      textSize(100);
      textAlign(CENTER);
      text('Perdeste!', width/2, height/2);4
      textSize(40);
      text('Clica F5 para tentar outra vez', width/2, height/2+75);
      noLoop();
    }

}

//mouse
function mousePressed() {

  for (let i = 0; i <circles.length; i++) {
    if (circles[i].contains(mouseX, mouseY)) {
      let c = 0;
      while(c<primos.length){
        if(circles[i].num == primos[c]){
          hp = true;
          control = true;
      }
        c++;
      }
      circles.splice(i,1);
      score = score-1;
      }

  }

}

//class para um círculo
class circle {
  constructor(x, y, r, num) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
    this.num = num;

}

//sobreposição do rato
  changeColor(bright) {
    this.brightness = bright;
}

  contains(x, y) {

    let d = dist(mouseX, mouseY, this.x, this.y);
      if (d < this.r) {
        return true;
      } else {
        return false;

      }
}

//velocidade
  move() {

    this.x = this.x + random(-0.75, 0.75);
    this.y = this.y + random(-0.75, 0.75);
}


  show() {
   stroke(255);
   strokeWeight(4);
   fill(this.brightness, 125);
   ellipse(this.x, this.y, this.r*2 ,this.r*2);

   noStroke();
   fill(255);
   textAlign(CENTER, CENTER);
   textSize(20);
   text(this.num, this.x,this.y);
  }
}
