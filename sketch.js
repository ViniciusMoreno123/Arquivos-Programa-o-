var Objeto;
function setup() {
  createCanvas(400,400);
Objeto = createSprite(200,200,30,30);
}

function draw() 
{
  background(30);
if (keyIsDown(RIGHT_ARROW)){
Objeto.position.x =Objeto.position.x+5;
}
if (keyIsDown(LEFT_ARROW)){
  Objeto.position.x =Objeto.position.x-5;
  }
  if (keyIsDown(UP_ARROW)){
 Objeto.position.y =Objeto.position.y-5;

    }
    if (keyIsDown(DOWN_ARROW)){
Objeto.position.y =Objeto.position.y+5;     
      }
drawSprites();
}





