var bgImage, bg;
var tiger, tigerImage;
var rockImage, rock;
var ground, groundImage;
var PLAY=1;
var END=0;
var gameState= PLAY;
var score;
var  obstacle, obstacleGroup;
function preload(){
bgImage=loadImage("bg.png");
tigerImage=loadImage("images.png");
rockImage=loadImage("download.jpg");
groundImage=loadImage("800px_COLOURBOX17853662.jpg");
}





function setup() {
  createCanvas(800,400);
  tiger=createSprite(400,300,20,20);
  tiger.addImage("tiger", tigerImage)
  tiger.scale=0.5

  ground=createSprite(500,500,1200,10)
ground.addImage("ground",groundImage)
ground.x= ground.width/2;
ground.velocityX=-4;

obstacleGroup=new Group();


score=0
}

function draw() {
  background(bgImage);  
text("Score:"+ score,700,50);
textSize(20)
if (gameState===PLAY){
score = score + Math.round(getFrameRate()/60);
if (ground.x<0){
  ground.x=ground.width/2;
}

if(keyDown("space")&& tiger.y >= 200){
tiger.velocityY=-25;
}


tiger.velocityY= tiger.velocityY+ 0.8

ground.velocityX=-4;

tiger.collide(ground)


if(obstacleGroup.isTouching(tiger)){
gameState=END
}



obstacles();



}
else if (gameState==END){
ground.velocityX=0;
tiger.velocityY=0;
obstacleGroup.setVelocityXEach(0);
obstacleGroup.setLifetimeEach(-1);

text("Game Over",200,200);
textSize(30)







}





  drawSprites();
}


function obstacles(){
if (frameCount%300===0){
obstacle=createSprite(600,300,40,40)
obstacle.addImage("rock", rockImage);
obstacle.scale=0.3
obstacle.lifetime=200;
obstacle.velocityX=-4 
obstacleGroup.add(obstacle)


}







}

















