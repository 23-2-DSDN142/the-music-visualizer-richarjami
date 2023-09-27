
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  textFont('Helvetica'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

  console.log(counter);

   let bar_spacing = height / 10;
   let bar_height = width / 12;
   let bar_pos_x = width / 2;
 
   let vocalHeight = map(vocal, 0,100, 0,50)

   //Gradient BG
   let blueColorNew = color(0, 0, 0);
   let blueColorOld = color(68, 126, 227);
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

   strokeWeight(0)

   if (counter > 1225) {
      rect(0,0,100,100)
   }

   // vocal bar is red
   fill(200, 0, 0);
   rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, vocalHeight);
   fill(0);
   text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
   // drum bar is green
   fill(0, 200, 0);
   rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
   fill(0);
   text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
   // bass bar is blue
   fill(50, 50, 240);
   rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
   fill(0);
   text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
   // other bar is white
   fill(200, 200, 200);
   rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
   fill(0);
   text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
   fill(255, 255, 0);
 
   // display "words"
   textAlign(CENTER);
   textSize(vocal);
   text(words, width/2, height/3);
}