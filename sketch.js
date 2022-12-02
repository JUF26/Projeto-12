var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage ("path.png")
  boyImg = loadAnimetion ("Runner-1png , Runner-2png")
 
}

function setup(){
  
  createCanvas(400,400);
 
  path = createSprite(200,0)
  path.addimage(pathImg)
  path.scale =1.2
  path.velocityY = 4


boy = createSprite(200,300)
boy.addAnimation("menino", boyImg)
boy.scale = 0.08

//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false
}

function draw() {
  background(0);
  
  
  boy.x = mouseX

  boy.collide(rightBoundary)
  boy.collide(leftBoundary)
 
  if(path.y > 400 ){
    path.y = 0;
  }
  
  drawSprites();
}
