function setup() { 
    createCanvas(1000, 600); 
    background(51); //TODO@lavalord changed the background color

}

function draw() {
    triangle(mouseX, mouseX*2, mouseY*2, mouseX,0,0)
  let c = color(mouseX*2, mouseY/6, Math.floor(Math.random() * 777)) 
  fill(c)
}