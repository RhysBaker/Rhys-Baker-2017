//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//01_For-Loop

//Define the variable for the size


let size = 50;
var r, g, b;


function setup() {
  var cnv = createCanvas(windowWidth - 150, windowHeight - 150);
  cnv.position(50, 50);
  frameRate(120);
  r = random(255)
  g = random(255)
  b = random(255)

//RED COLOUR
  var Button = createButton("red");
  Button.mousePressed(colorRed);
  function colorRed(){
    r = 255
    g = 0
    b = 0
    size = 50
  }

//GREEN COLOUR
  var greenButton = createButton("green");
  greenButton.mousePressed(colorGreen);
  function colorGreen(){
    r = 0
    g = 255
    b = 0
    size = 50
  }

//BlUE COLOUR
  var blueButton = createButton("blue");
  blueButton.mousePressed(colorBlue);
  function colorBlue(){
    r = 0
    g = 0
    b = 255
    size = 50
  }

  //RANDOM COLOUR
    var randomButton = createButton("random");
    randomButton.mousePressed(colorRandom);
    function colorRandom(){
      r = random(255)
      g = random(255)
      b = random(255)
      size = 50
    }

  //ERASER
    var eraserButton = createButton("eraser");
    eraserButton.mousePressed(eraser);
    function eraser(){
      r = 0
      g = 0
      b = 0
      size = 150
    }

}


function windowResized() {
  resizeCanvas(windowWidth - 150, windowHeight - 150);
}



function draw() {
  noStroke()
  fill(r, g, b);
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, size, size)
  }
}
