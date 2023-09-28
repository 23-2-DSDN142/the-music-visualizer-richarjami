let firstRun = true
let cityFront;
let cityMid;
let cityBack;

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
    let orangeColorGradient = map(counter,0,1225,0,1)
    let orangeColor = lerpColor(skyColorNew, skyColorOld, orangeColorGradient)
    let blueColorGradient = map(counter,0,1225,0,1)
    let blueColor = lerpColor(blueColorNew, blueColorOld, blueColorGradient)
    let strokeColor = lerpColor(blueColor, orangeColor, gradientAmount)
    stroke(strokeColor)

    line(0,bg, width,bg)
   }







//City

   strokeWeight(1)
   //let imageHeights = sin(1*counter)*100
   let imageHeights = counter*0.15
   

   image(cityBack,0,imageHeights*0.25);

   let cityFogBottomBlack = color(0,0,0,255);
   let cityFogBottomOrange = color(241,130,31,255);
   let cityFogTop = color(241,130,31,0);

   for (let fog = 0; fog < 1080; fog++) {

   let fogGradientAmount = map(fog,0,1080,0,1);
   let fogCol = map(counter, 0,1225, 0,1);
   let cityFogBottom = lerpColor(cityFogBottomBlack, cityFogBottomOrange, fogCol);
   let cityFogColor = lerpColor(cityFogTop, cityFogBottom, fogGradientAmount);

   stroke(cityFogColor)

   line(0,fog, width,fog)
   }
  
  image(cityMid,0,imageHeights*0.5);

  for (let fog = 0; fog < 1080; fog++) {

   let fogGradientAmount = map(fog,0,1080,0,1);
   let fogCol = map(counter, 0,1225, 0,1);
   let cityFogBottom = lerpColor(cityFogBottomBlack, cityFogBottomOrange, fogCol);
   let cityFogColor = lerpColor(cityFogTop, cityFogBottom, fogGradientAmount);

   stroke(cityFogColor)

   line(0,fog, width,fog)
   }

  image(cityFront,0,imageHeights);






//Lyrics
   textAlign(CENTER);

   let vocalsCol = map(vocal, 0,100, 100,255);
   fill(vocalsCol, vocalsCol, vocalsCol, vocalsCol);
   strokeWeight(0);
   stroke(5);
   textSize(60);
   text(words, width/2, 1020);







//Now Playing

   let nowPlayingVocal = map(vocal, 0, 100, 0, -20);
   let nowPlayingDrums = map(drum, 0, 100, 0, -20);
   let nowPlayingBass = map(bass, 0, 100, 0, -20);
   let nowPlayingOther = map(other, 0, 100, 0, -20);

   if (counter > 1225) {
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