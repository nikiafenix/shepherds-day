function preload() {
  home = loadImage(
    "https://cdn.glitch.global/e86eebde-5afa-40d3-b965-2a225d2a1c02/Home.png?v=1678186333720"
  );
  phoneHighlight = loadImage(
    "https://cdn.glitch.global/e86eebde-5afa-40d3-b965-2a225d2a1c02/phoneHighlight.png?v=1678826233575"
  );
  audio = loadImage(
    "https://cdn.glitch.global/e86eebde-5afa-40d3-b965-2a225d2a1c02/volume.png?v=1678828137082"
  );
  homeAudio = loadSound(
    "https://cdn.glitch.global/e86eebde-5afa-40d3-b965-2a225d2a1c02/homescreen-audio.mp3?v=1678828520963"
  );
}
function setup() {
  createCanvas(1000, 666);
}

function draw() {
  background(220);
  image(home, 0, 0, 1000, 666);
  noFill();
  stroke(255);
  strokeWeight(1);
  stroke(255);

  if (mouseX > 145 && mouseX < 270 && mouseY > 425 && mouseY < 525) {
    image(phoneHighlight, 0, 0, 1000, 666);
  }

  image(audio, 0, 0, 60, 60);
  
  
  textFont("Pixel");
  fill(255);
  stroke(255,255,255,50)
  strokeWeight(1);
  text('sound recommended',60, 30);
}

function mousePressed() {
  if (mouseX > 145 && mouseX < 270 && mouseY > 425 && mouseY < 525) {
    window.location.href = "start.html";
  }
  if (mouseX < 60 && mouseY < 60 && homeAudio.isPlaying()) {
    homeAudio.stop();
    
  } else if (mouseX < 60 && mouseY < 60) {
    homeAudio.play();
  }
}
