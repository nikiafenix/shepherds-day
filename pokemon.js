function preload() {
  pokeclose = loadImage(
    "https://cdn.glitch.global/e86eebde-5afa-40d3-b965-2a225d2a1c02/pokeclose.jpg?v=1679348071717"
  );
  turtwig = loadImage(
    "https://cdn.glitch.global/e86eebde-5afa-40d3-b965-2a225d2a1c02/turtwig.jpg?v=1679348179734"
  );
  chik = loadImage(
    "https://cdn.glitch.global/e86eebde-5afa-40d3-b965-2a225d2a1c02/chik.jpg?v=1679348210216"
  );
  osh = loadImage(
    "https://cdn.glitch.global/e86eebde-5afa-40d3-b965-2a225d2a1c02/oshawott.jpg?v=1679348238504"
  );
  pokemonmusic = loadSound(
    "https://cdn.glitch.global/e86eebde-5afa-40d3-b965-2a225d2a1c02/New%20Bark%20Town%20%5BPoke%CC%81mon_%20HeartGold%20%26%20SoulSilver%5D.mp3?v=1679443333850"
  );
  silkScreen = loadFont(
    "https://cdn.glitch.global/e86eebde-5afa-40d3-b965-2a225d2a1c02/slkscr.ttf?v=1677108549904"
  );
}
function setup() {
  createCanvas(1000, 667);
}

function draw() {
  background(220);
  textFont(silkScreen);
  fill(255);
  textSize(22);
  if (mouseX > 24 && mouseX < 287 && mouseY > 293 && mouseY < 575) {
    image(turtwig, 0, 0);
    text(
      "He got his first Pokemon game after his cousin showed him a DS",
      30,
      40
    );
    text(
      "for the first time at a family gathering. It was a Christmas present,",
      30,
      65
    );
    text("and Turtwig will forever be his very first Pokemon.", 30, 90);
  } else if (mouseX > 365 && mouseX < 624 && mouseY > 291 && mouseY < 570) {
    image(chik, 0, 0);
    text(
      "The year was '09, and now, Joji also had a DS. When they started the",
      30,
      40
    );
    text(
      "game together, Joji picked Totodile before asking RJ. Obviously they ",
      30,
      65
    );
    text(
      "couldn't have the same starter, so RJ ended up with Chikorita. Despite ",
      30,
      90
    );
    text(
      "their rough beginning, she became his all-time favorite pokemon.",
      30,
      115
    );
  } else if (mouseX > 729 && mouseX < 983 && mouseY > 287 && mouseY < 559) {
    image(osh, 0, 0);
    text(
      "RJ didn't actually play Pokemon Black until he was 19 years old.",
      30,
      40
    );
    text(
      "While adulthood gifted all of his friends freedom, it only had",
      30,
      65
    );
    text(
      "free time to spare for him. In the blurry haze of community college",
      30,
      90
    );
    text("and too much parent-time, Oshawott became his best friend.", 30, 115);
  } else {
    image(pokeclose, 0, 0);
  }
}
function mousePressed() {
  if (pokemonmusic.isPlaying()) {
    pokemonmusic.stop();
  } else {
    pokemonmusic.loop();
  }
}
