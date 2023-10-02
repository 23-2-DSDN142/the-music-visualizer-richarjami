let firstRun = true
let cityFront;
let cityMid;
let cityBack;
let cityFrontgra;
let cityMidgra;
let cityBackgra;
let vignette;
let sunGlow;

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);






//Image Loading
if (firstRun) {
  cityFront = loadImage('frontcity960.png');
  cityMid = loadImage('midcity960.png');
  cityBack = loadImage('backcity960.png');
  cityFrontgra = loadImage('frontcitygra960.png');
  cityMidgra = loadImage('midcitygra960.png');
  cityBackgra = loadImage('backcitygra960.png');
  vignette = loadImage('vignette.png');
  sunGlow = loadImage('sunGlow.png');

  firstRun = false
 }






//Gradient BG
let blueColorNew = color(15, 7, 7);
let blueColorOld = color(220, 106, 103);
let skyColorNew = color(37, 12, 1);
let skyColorOld = color(241, 130, 31);
strokeWeight(1);

for (let bg = 0; bg < 540; bg++) {
 
 let gradientAmount = map(bg,0,1080,0,1)
 let orangeColorGradient = map(counter,0,1215,0,1)
 let orangeColor = lerpColor(skyColorNew, skyColorOld, orangeColorGradient)
 let blueColorGradient = map(counter,0,1215,0,1)
 let blueColor = lerpColor(blueColorNew, blueColorOld, blueColorGradient)
 let strokeColor = lerpColor(blueColor, orangeColor, gradientAmount)
 stroke(strokeColor)

 line(0,bg, width,bg)
}





//SUN
let sunRad = map(other, 30,100, 0,300);

if (counter < 12300){
   let sunHeight = map(counter, 0,12300, height-200,height/2)
      fill(255, 221, 120)
      strokeWeight(0)
      //image(sunGlow,0,sunHeight-height/2)
      circle(width/2,sunHeight,sunRad)
      
}


//City
strokeWeight(1)
   
   let imageHeights = counter*0.15*0.25

   let fogAmount = map(counter, 0,1225, 255,0)

push();

   scale(1);
  image(cityBackgra,0,imageHeights*0.25);
    tint(255,255,255,fogAmount);
  
   image(cityBack,0,imageHeights*0.25);
     tint(255,255,255,255);
     

   image(cityMidgra,0,imageHeights*0.5);
    tint(255,255,255,fogAmount);
   image(cityMid,0,imageHeights*0.5);
    tint(255,255,255,255);

   image(cityFrontgra,0,imageHeights);
     tint(255,255,255,fogAmount);
   image(cityFront,0,imageHeights);
     tint(255,255,255,255);

pop();
     
//let shapegradient = 

//square(width/2, height/2, 100);


//if (counter < 1215) {image(vignette, 0,0)}


//Lyrics
  
if (counter > 1215) {
   textAlign(CENTER);
   let vocalsCol = map(vocal, 40,100, 100,255);
   fill(vocalsCol, vocalsCol, vocalsCol, vocalsCol);
   strokeWeight(0);
   stroke(5);
   textSize(40);
   text(words, width/2, 300);
}

if (counter < 1215){
   textAlign(CENTER);
   fill(255);960
   
   textSize(30);
   text(words, width/2, height/2);

}




//Now Playing

   let nowPlayingAlpha = map(counter, 1150,1250, 0 ,255)

   let nowPlayingVocal = map(vocal, 0, 100, 0, -20);
   let nowPlayingDrums = map(drum, 0, 100, 0, -20);
   let nowPlayingBass = map(bass, 0, 100, 0, -20);
   let nowPlayingOther = map(other, 0, 100, 0, -20);

   if (counter > 1215) {
   fill(242, 156, 107, nowPlayingAlpha);
   textAlign(LEFT);
   textSize(20);
   text("Two Door Cinema Club - Sun", 20,50);

   rectMode(CORNERS);

   rect(480, 50, 490, 50+nowPlayingVocal)
   rect(495, 50, 505, 50+nowPlayingDrums)
   rect(510, 50, 520, 50+nowPlayingBass)
   rect(525, 50, 535, 50+nowPlayingOther)


   }




}