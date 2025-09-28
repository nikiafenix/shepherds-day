let unfinished = [
  "with bills to pay",
  "with songs to write",
  "before saying goodbye",
  "with a jug of milk in the fridge",
  "with a grudge in their heart",
  "before finding love",
  "before seeing someone else die",
  "with unfinished business",
  "too soon",
  "their kids behind",
  "before their parents did",
];

function setup() {
  // createCanvas(400,40);
  createCanvas(400, 40);
  // select("#defaultCanvas0").id("newCanvasID");
  // let cnv = select("#defaultCanvas0")
  // cnv.style("visibility","initial")
  //   cnv.parent(select("#canvasContainer"));
  stroke(5);
  background(5);
  stroke(255);
  line(75, 35, 315, 35);
}

function mousePressed() {
  let business = random(unfinished);
  background(100);
  strokeWeight(1);
  stroke(255);
  line(75, 35, 315, 35);
  // line((windowWidth/2)-120),45,((windowWidth/2)+120),45)
  strokeWeight(0);
  fill(255);
  textFont("Pixel");
  text(business, mouseX, mouseY);
}
