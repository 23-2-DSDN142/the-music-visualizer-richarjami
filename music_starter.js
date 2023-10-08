let firstRun = true
let cityFront;
let cityMid;
let cityBack;
let cityFrontgra;
let cityMidgra;
let cityBackgra;
let cloud1;
let cloud2;
let cloud3;
let arrayX = [];
let arrayY = [];
let arrayImg = [cloud1, cloud2, cloud3];


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
  cloud1 = loadImage('cloud1.png');
  cloud2 = loadImage('cloud2.png');
  cloud3 = loadImage('cloud3.png');

  firstRun = false

  for (let cn = 0; cn < 20; cn++){
   let randomX = random(0-960,960)
   arrayX[cn] = randomX;
  }
   for (let cn = 0; cn < 20; cn++){
      let randomY = random(-200,200)
      arrayY[cn] = randomY;
   }

   for (let cn = 0; cn < 20; cn++){
      let randomised = int(random(0,3));
      arrayImg[cn] = randomised;
   }

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
let sunX = map(other, 0,100, 0,300);

if (counter < 12300){
   let sunHeight = map(counter, 0,12300, 400,100)
      fill(255, 221, 120)

      drawingContext.shadowBlur = 200;
      drawingContext.shadowColor = color(255, 204, 51);

      strokeWeight(0)
      //image(sunGlow,0,sunHeight-height/2)
      circle(width/2,sunHeight, sunX)
      
}

drawingContext.shadowBlur = 0;
  

//Clouds

let cloudRun1 = map(counter, 0,12300, 0, 300);
let cloudRun2 = map(counter, 0,12300, 0, 600);
let cloudRun3 = map(counter, 0,12300, 0, 1200);


for (let cn = 0; cn < 20; cn++) {
   tint(255, 255, 255, 20);
   let randomiser = arrayImg[cn]
   
   
   if (randomiser == 0) {
      image(cloud1, arrayX[cn] + cloudRun1, arrayY[cn])
 } else if (randomiser == 1){
       image(cloud2, arrayX[cn] + cloudRun2, arrayY[cn])
 } else {
       image(cloud3, arrayX[cn] + cloudRun3, arrayY[cn])
 } 

}

tint(255,255,255,255)



//City
strokeWeight(1)
   
   let imageHeights = counter*0.15*0.9

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
     



//Lyrics
  
let vocalsCol = map(vocal, 40,100, 100,220);
//rest of the song
if (counter > 1215) {
   textAlign(RIGHT);
   fill(242, 156, 107);
   strokeWeight(0);
   stroke(5);
   textSize(15);
   text(words, 945, 30);
}

//intro
if (counter < 1215){
   textAlign(CENTER);
   fill(255);
   textSize(30);
   text(words, width/2, height/2);

}




//Now Playing

   let nowPlayingAlpha = map(counter, 1150,1250, 0 ,255)

   let nowPlayingVocal = map(vocal, 0, 100, 0, -10);
   let nowPlayingDrums = map(drum, 0, 100, 0, -10);
   let nowPlayingBass = map(bass, 0, 100, 0, -10);
   let nowPlayingOther = map(other, 0, 100, 0, -10);

   if (counter > 1150) {
   fill(242, 156, 107, nowPlayingAlpha);
   textAlign(LEFT);
   textSize(15);
   text("Two Door Cinema Club - Sun", 15,30);

   rectMode(CORNERS);

   rect(250, 30, 258, 30+nowPlayingVocal)
   rect(260, 30, 268, 30+nowPlayingDrums)
   rect(270, 30, 278, 30+nowPlayingBass)
   rect(280, 30, 288, 30+nowPlayingOther)


   }

//Ending
let endingOp = map(counter, 11000,11050, 0 ,255)
strokeWeight(0);
fill(0,0,0,endingOp)
rect(0,0, width*2,height*2);

console.log(counter)

}
