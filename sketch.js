// Variables

let canvasWidth = 1400;
let canvasHeight = 900;


let xspeed = 100 * frameCount;
let yspeed = 200 * frameCount;

frameRate(30)

// Setup Function
function setup() {
  createCanvas(canvasWidth, canvasHeight);
}

// Draw Function
function draw() {
  noStroke();
  background(0, 1);
  let r = color(250, 0, 0, 100);
  let c = color(15, 100, 200, 200);
  let p = color(0, 150, 100, 50);
  let b = color(0, 15)
  let negFr = -frameCount;

  fill(r)
  rect(frameCount/2, frameCount/3, 175, 350)

  fill(c)
  rect(frameCount/1.8, frameCount/5, 400, 175)

  fill(p)
  rect(1400+negFr, 900, 100 , negFr)

  fill(b)
  rect(0+frameCount, 300, frameCount/2, 10)

  rect(0+frameCount, 490, frameCount, 10)

  rect(0+frameCount, 530, frameCount/2, 10)

  rect(0+frameCount, 570, frameCount, 10) 

  fill(b)
  rect(450, 0+frameCount, 10, frameCount/2)
  
  fill(b)
  rect(1600-frameCount, 0+frameCount, 10, 10)

  fill(b)
  rect(1600-frameCount, 40+frameCount, 10, 10)

  fill(b)
  rect(1600-frameCount, 80+frameCount, 10, 10)

  fill(b)
  rect(1600-frameCount, 120+frameCount, 10, 10)

  
  rotate(frameCount, 100*100)
  line(0, 150, 100, 100);



}
