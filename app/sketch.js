let button;
let shapeSwitch = 0;

function setup() { 
    noCursor();
    createCanvas(windowWidth - 100 , windowHeight - 100); 
    background(51); //TODO@lavalord changed the background color
    button = createButton('click me'); 
    button.position(0, 0);
    button.mousePressed(changeShape);

}

//draw function with support for circles, triangles and squares.

function draw() {
  
if(shapeSwitch === 0)
  {
  ellipse(mouseX, mouseY, mouseY / 3)
  }
if(shapeSwitch === 1)
  {
    triangle(mouseX, mouseX*2, mouseY*2, mouseX,mouseY * 2,mouseX / 2)
  }
if(shapeSwitch === 2)
  {
    square(mouseX, mouseY, mouseY * 1.5);
  }

  let c = color(mouseX*2, mouseY/6, Math.floor(Math.random() * 777)) 
  fill(c)
}

//changeShape is a simple switch that iterates a variable when our button is clicked

function changeShape() {
  shapeSwitch++;
  
  if(shapeSwitch === 3)
    {
      shapeSwitch = 0;
    }
} 

//resizes canvas when window size is changed

function windowResized() {
  resizeCanvas(windowWidth - 100, windowHeight - 100);
}