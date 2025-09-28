let instructions, title;

function setup() {
  title = select("#title");
  instructions = select(".instructions");
  title.mouseOver(somethingCool);
}

function somethingCool() {
  createP(".instructions");
}

function draw() {
  if (mouseX > 600 && mouseX < 1000 && mouseY > 300 && mouseY > 600) {
    text(poop, 10, 10);
  }
}
