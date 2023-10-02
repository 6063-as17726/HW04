function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  strokeWeight(0);
}
 
let x = 0;
let y = 0;  

let lastSecondDrawn = 0;
let lastMinuteDrawn = 0;  
let lastHourDrawn = 0; 

function draw() {
  let secondsNow = second(); 
  let minutesNow = minute(); 
  let hoursNow = hour(); 
  if(lastHourDrawn!=hoursNow){
    background(255);
    lastHourDrawn = hoursNow;
    x = 0; 
  }
  if(lastMinuteDrawn!=minutesNow){
    x = x + windowWidth/60; 
    y = 0; 
    lastMinuteDrawn = minutesNow; 
  }
  if(lastSecondDrawn!=secondsNow){
    fill(random(50,255),random(200,255),random(200,255));
    ellipse(x, y,10,10);
    y = y + windowHeight/60;
    lastSecondDrawn = secondsNow;
  }
}





  

  
  
  


  
