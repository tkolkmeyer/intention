let button;
let shapeSwitch = 0;

function setup() { 
    createCanvas(1000, 600); 
    background(51); //TODO@lavalord changed the background color
    button = createButton('click me');
    button.position(0, 0);
    button.mousePressed(changeShape);

}

function draw() {
  
if(shapeSwitch === 0)
  {
  ellipse(mouseX, mouseY, mouseY / 3)
  }
if(shapeSwitch === 1)
  {
    triangle(mouseX, mouseX*2, mouseY*2, mouseX,0,0)
  }
if(shapeSwitch === 2)
  {
    square(mouseX, mouseX * 3, mouseY);
  }

  let c = color(mouseX*2, mouseY/6, Math.floor(Math.random() * 777)) 
  fill(c)
}

function changeShape() {
  shapeSwitch++;
  
  if(shapeSwitch === 3)
    {
      shapeSwitch = 0;
    }
}