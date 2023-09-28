let firstRun = true
let cityFront;
let cityMid;
let cityBack;
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
   cityFront = loadImage('cityfront.png');
   cityMid = loadImage('citymid.png');
   cityBack = loadImage('cityback.png');
   vignette = loadImage('vignette.png');
   sunGlow = loadImage('sunGlow.png');

   firstRun = false
  }






//Gradient BG

   let blueColorNew = color(31, 15, 15);
   let blueColorOld = color(220, 106, 103);
   let skyColorNew = color(37, 12, 1);
   let skyColorOld = color(241, 130, 31);
   strokeWeight(3);

   for (let bg = 0; bg < 1080; bg++) {
    
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
if (counter < 12300){
   let sunHeight = map(counter, 0,12300, height-200,height/2)
      fill(255, 221, 120)
      strokeWeight(0)
      image(sunGlow,0,sunHeight-height/2)
      circle(width/2,sunHeight,600)
      
}


//City

   

strokeWeight(1)
//let imageHeights = sin(1*counter)*100
let imageHeights = counter*0.15


image(cityBack,0,imageHeights*0.25);

let cityFogBottomBlack = color(0,0,0,90);
let cityFogBottomOrange = color(241,130,31,90);
let cityFogTop = color(241,130,31,0);

for (let fog = 0; fog < 1080; fog++) {

let fogGradientAmount = map(fog,0,1080,0,1);
let fogCol = map(counter, 0,1215, 0,1);
let cityFogBottom = lerpColor(cityFogBottomBlack, cityFogBottomOrange, fogCol);
let cityFogColor = lerpColor(cityFogTop, cityFogBottom, fogGradientAmount);

stroke(cityFogColor)

line(0,fog, width,fog)
}

image(cityMid,0,imageHeights*0.5);

for (let fog = 0; fog < 1080; fog++) {

let fogGradientAmount = map(fog,0,1080,0,1);
let fogCol = map(counter, 0,1215, 0,1);
let cityFogBottom = lerpColor(cityFogBottomBlack, cityFogBottomOrange, fogCol);
let cityFogColor = lerpColor(cityFogTop, cityFogBottom, fogGradientAmount);

stroke(cityFogColor)

line(0,fog, width,fog)
}

image(cityFront,0,imageHeights);


//if (counter < 1215) {image(vignette, 0,0)}


//Lyrics
  
if (counter > 1215) {
   textAlign(CENTER);
   let vocalsCol = map(vocal, 0,100, 100,255);
   fill(vocalsCol, vocalsCol, vocalsCol, vocalsCol);
   strokeWeight(0);
   stroke(5);
   textSize(60);
   text(words, width/2, 1020);
}

if (counter < 1215){
   textAlign(CENTER);
   fill(255);
   
   textSize(80);
   text(words, width/2, height/2);

}




//Now Playing

   let nowPlayingVocal = map(vocal, 0, 100, 0, -20);
   let nowPlayingDrums = map(drum, 0, 100, 0, -20);
   let nowPlayingBass = map(bass, 0, 100, 0, -20);
   let nowPlayingOther = map(other, 0, 100, 0, -20);

   if (counter > 1215) {
   fill(242, 156, 107);
   textAlign(LEFT);
   textSize(30);
   text("Two Door Cinema Club - Sun", 20,50);

   rectMode(CORNERS);

   rect(480, 50, 490, 50+nowPlayingVocal)
   rect(495, 50, 505, 50+nowPlayingDrums)
   rect(510, 50, 520, 50+nowPlayingBass)
   rect(525, 50, 535, 50+nowPlayingOther)


   }




}