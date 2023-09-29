function setup() {
  createCanvas(windowWidth, windowHeight);
  background('SeaShell');
  fill(0);
}

function draw() {
}

function mouseClicked() {
  strokeWeight(0);
  fill(random(100, 200), 150, random(0,100));
  ellipse(mouseX, mouseY, random(10,80), random(10,80));
}

function mouseDragged() {
  stroke(0);
  strokeWeight(1);
  stroke(random(50,80), random(200,220), 204);
  line(random(0,width), random(0,height), mouseX, mouseY);
}

function doubleClicked() {
  strokeWeight(0);
  fill(250,random(100,130), random(100,120));
  triangle(mouseX, mouseY,random(0,width/2), random(0,height/2), random(0,width/4), random(0,height/4)); 
}

function keyPressed() {
  if (key == 's') {
    saveCanvas('myCanvas', 'jpg');
  } else if (key == 'r') {
    background('SeaShell');
  }
}