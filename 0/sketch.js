function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  strokeWeight(0);
}
 
let x = 25;
let y = 25;  

let lastSecondDrawn = 0; 
let lastMinuteDrawn = 0; 

function draw() {
  let secondsNow = second(); 
  let minuteNow = minute(); 
  if(lastSecondDrawn!=secondsNow){
  fill(random(0,255),255,255);
  ellipse(x, y,10,10);
  y = y + 10;
  lastSecondDrawn = secondsNow;
  }
  

}


  
  



  

  
  
  


  
