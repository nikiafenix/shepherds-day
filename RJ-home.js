var LoadRJGif, CreateRJGif, CreateObjectSelect;

function preload() {
  CreateRJGif = createImg(
    "https://cdn.glitch.global/e86eebde-5afa-40d3-b965-2a225d2a1c02/RJ.gif?v=1677566982282",
    "RJ Gif"
  );
  audio = loadImage(
    "https://cdn.glitch.global/e86eebde-5afa-40d3-b965-2a225d2a1c02/volume.png?v=1678828137082"
  );
  objectSelect = loadImage(
    "https://cdn.glitch.global/e86eebde-5afa-40d3-b965-2a225d2a1c02/RJSelect.jpg?v=1679275083359"
  );
  argueAudio = loadSound(
    "https://cdn.glitch.global/e86eebde-5afa-40d3-b965-2a225d2a1c02/Arguing.mp3?v=1678172511857"
  );
}
function setup() {
  createCanvas(1000, 667);
}

function draw() {
  //draw background
  CreateRJGif.id("CreateRJGif");
  CreateRJGif.addClass("swag");
  CreateRJGif.position(0, 0);
  CreateRJGif.size(1000, 667);
  CreateRJGif.style("z-index", "-1");

  //highlight when hovered
  if (mouseX > 178 && mouseX < 243 && mouseY > 403 && mouseY < 570) {
    image(objectSelect, 178, 403, 65, 167, 178, 403, 65, 167);
    cursor(HAND);
  } else if (mouseX > 902 && mouseX < 927 && mouseY > 315 && mouseY < 484) {
    image(objectSelect, 902, 315, 25, 169, 902, 315, 25, 169);
    cursor(HAND);
  } else if (mouseX > 406 && mouseX < 581 && mouseY > 277 && mouseY < 375) {
    image(objectSelect, 400, 270, 183, 107, 400, 270, 183, 107);
    cursor(HAND);
    // } else if (mouseX > 309 && mouseX < 398 && mouseY > 614 && mouseY < 664) {
    //   image(objectSelect, 309, 610, 89, 55, 309, 610, 89, 55);
    //   cursor(HAND);
  } else if (mouseX > 58 && mouseX < 136 && mouseY > 400 && mouseY < 444) {
    image(objectSelect, 58, 400, 78, 44, 58, 400, 78, 44);
    cursor(HAND);
  } else {
    clear();
    cursor(MOVE);
  }

  image(audio, 0, 0, 60, 60);
}

function mousePressed() {
  // guitar
  if (mouseX > 178 && mouseX < 243 && mouseY > 403 && mouseY < 570) {
    window.location.href = "RJ-guitar.html";
  }
  //height
  if (mouseX > 902 && mouseX < 927 && mouseY > 315 && mouseY < 484) {
    window.location.href = "RJ-height.html";
  }
  //map
  if (mouseX > 406 && mouseX < 581 && mouseY > 277 && mouseY < 375) {
    window.location.href = "RJ-map.html";
  }
  //book
  // if (mouseX > 309 && mouseX < 398 && mouseY > 610 && mouseY < 664) {
  //   window.location.href = "RJ-book.html";
  // }
  //pokemon
  if (mouseX > 58 && mouseX < 136 && mouseY > 400 && mouseY < 444) {
    window.location.href = "RJ-pokemon.html";
  }
  if (mouseX < 60 && mouseY < 60 && argueAudio.isPlaying()) {
    argueAudio.stop();
  } else if (mouseX < 60 && mouseY < 60) {
    argueAudio.play();
  }
}
