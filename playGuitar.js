function preload() {
  Drake14 = loadSound(
    "https://cdn.glitch.global/e86eebde-5afa-40d3-b965-2a225d2a1c02/no%20talking%20sudden%20strum.m4a?v=1679437597376"
  );
  Drake13 = loadSound(
    "https://cdn.glitch.global/e86eebde-5afa-40d3-b965-2a225d2a1c02/Drake13.mp3?v=1679438294550"
  );
  Song2 = loadSound(
    "https://cdn.glitch.global/e86eebde-5afa-40d3-b965-2a225d2a1c02/Song2.m4a?v=1679438844912"
  );
  Song1 = loadSound(
    "https://cdn.glitch.global/e86eebde-5afa-40d3-b965-2a225d2a1c02/Song1.m4a?v=1679439340391"
  );
  Drake12 = loadSound(
    "https://cdn.glitch.global/e86eebde-5afa-40d3-b965-2a225d2a1c02/Drake12.m4a?v=1679439478137"
  );
}

function setup() {
  let PlayDrake14 = select("#Drake14");
  PlayDrake14.mousePressed(DRAKE14);

  let PlayDrake13 = select("#Drake13");
  PlayDrake13.mousePressed(DRAKE13);

  let PlaySong2 = select("#Drake12");
  PlaySong2.mousePressed(SONG2);

  let PlaySong1 = select("#Drake11");
  PlaySong1.mousePressed(SONG1);

  let PlayDrake12 = select("#Drake10");
  PlayDrake12.mousePressed(DRAKE12);
}

function DRAKE14() {
  if (Drake13.isPlaying()) {
    Drake13.stop();
  }
  if (Song1.isPlaying()) {
    Song1.stop();
  }
  if (Song2.isPlaying()) {
    Song2.stop();
  }
  if (Drake12.isPlaying()) {
    Drake12.stop();
  }

  if (Drake14.isPlaying()) {
    Drake14.stop();
  } else {
    Drake14.play();
  }
}

function DRAKE13() {
  if (Drake14.isPlaying()) {
    Drake14.stop();
  }
  if (Song1.isPlaying()) {
    Song1.stop();
  }
  if (Song2.isPlaying()) {
    Song2.stop();
  }
  if (Drake12.isPlaying()) {
    Drake12.stop();
  }
  if (Drake13.isPlaying()) {
    Drake13.stop();
  } else {
    Drake13.play();
  }
}

function SONG2() {
  if (Drake14.isPlaying()) {
    Drake14.stop();
  }
  if (Drake13.isPlaying()) {
    Drake13.stop();
  }
  if (Song1.isPlaying()) {
    Song1.stop();
  }
  if (Drake12.isPlaying()) {
    Drake12.stop();
  }
  if (Drake14.isPlaying()) {
    Drake14.stop();
  }
  if (Drake13.isPlaying()) {
    Drake13.stop();
  }

  if (Song2.isPlaying()) {
    Song2.stop();
  } else {
    Song2.play();
  }
}

function SONG1() {
  if (Drake14.isPlaying()) {
    Drake14.stop();
  }
  if (Drake13.isPlaying()) {
    Drake13.stop();
  }
  if (Song2.isPlaying()) {
    Song2.stop();
  }
  if (Drake12.isPlaying()) {
    Drake12.stop();
  }
  if (Song1.isPlaying()) {
    Song1.stop();
  } else {
    Song1.play();
  }
}

function DRAKE12() {
  if (Drake14.isPlaying()) {
    Drake14.stop();
  }
  if (Drake13.isPlaying()) {
    Drake13.stop();
  }
  if (Song1.isPlaying()) {
    Song1.stop();
  }
  if (Song2.isPlaying()) {
    Song2.stop();
  }
  if (Drake12.isPlaying()) {
    Drake12.stop();
  } else {
    Drake12.play();
  }
}
