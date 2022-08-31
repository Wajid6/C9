

function setup() {
  createCanvas(900,900); 
  ball=createSprite (width/2,height/3)
 Edges=createEdgeSprites() 
}

function draw() 
{
  background(30);
  if (keyIsDown(RIGHT_ARROW)) {
    ball.position.x+=10
    ball.shapeColor= "red"
  }
  if (keyDown(LEFT_ARROW)) {
    ball.x-=10
    ball.shapeColor= "blue"
  }
  if (keyDown("up")) {
    ball.position.y-=10
    ball.shapeColor= "yellow"
  }
  if (keyDown("down")) {
    ball.y+=10
    ball.shapeColor= "green"
  }
  ball.bounceOff(Edges)
drawSprites ()
}




