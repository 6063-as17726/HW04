function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  strokeWeight(0);
}

function secondincrease() {
  fill(random(0,255),255,255);
  ellipse(x, y,10,10);
  y = y+10; 
}

function draw() {
  let x = 50;
  let y = 50; 
  let secondsNow = second();
  
 
  
  }
  

  
  
  //let myDiameter = map(secondsNow, 0, 59, 100, height);
  //ellipse(width / 2, height / 2, myDiameter, myDiameter);


  
