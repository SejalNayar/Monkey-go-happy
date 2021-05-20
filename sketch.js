var jungle,monkey,invisibleGround,banana,stone;
var jungleImage,monkey_running,bananaImage,stoneImage;
var score = 0;
var gameState = "play";
function preload() {
jungleImage=loadImage("jungle.jpg");
  monkey_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bananaImage=loadImage("banana.png");
  stoneImage = loadImage("stone.png");

}
function setup() {
 createCanvas(400, 400);
 jungle = createSprite(0,0,600,600);
 jungle.addImage(jungleImage);
 jungle.scale = 1.5;
 
  monkey=createSprite(100,300,100,150)
  monkey.addAnimation("monkeyImage",monkey_running);
  monkey.scale = 0.2
  invisibleGround=createSprite(300,350,600,15);
  invisibleGround.visible = false;
   bananaGroup = new Group();
  stoneGroup = new Group();
}

function draw() {      
 background(220);
   
  monkey.collide(invisibleGround);
   
  if(gameState==="play"){
    jungle.velocityX =-4 ;
     if(jungle.x<300){
    jungle.x = jungle.width/2;
  } 
  if(keyDown("space")){
    monkey.velocityY = -12;
   } 
  monkey.velocityY = monkey.velocityY + 0.8;
    if(bananaGroup.isTouching(monkey)){
    score = score+2;
    
     }
     if(bananaGroup.isTouching(monkey)){
     bananaGroup.destroyEach();
  switch(score){
    case  10:monkey.scale = 0.3;
              break;
    case 20:monkey.scale = 0.4;
             break;
    case 30:monkey.scale = 0.5;
            break;
    case 40:monkey.scale = 0.6;
              break;
              default:break; } 
      
         }
    
    if (stoneGroup.isTouching(monkey)){
  monkey.scale = 0.2;
    } 
    spawnBanana();
    spawnStone();
    }
  if(gameState==="end"){
     
    jungle.velocityX = 0;
    bananaGroup.destroyEach();
    stoneGroup.destroyEach();
   
    }
   if(stoneGroup.isTouching(monkey)){
    gameState= "end";
      }
  
  
      drawSprites() ;
stroke("white");
  fill("white");
  textSize(20);
  text("score:"+score,300,50);
  
}
function spawnBanana(){
 if (frameCount % 80 === 0){
   banana = createSprite(400,165,10,40);
   banana.velocityX = -6;
   banana.addImage(bananaImage);
   banana.scale = 0.05;
   banana.lifetime = 66;
  bananaGroup.add(banana);
}
  }
function spawnStone(){
  //write code here to spawn the clouds
  if (frameCount % 300 === 0) {
     stone = createSprite(301,325,40,10);
    
    stone.addImage(stoneImage);
    stone.scale = 0.2;
    stone.velocityX = -3;
    
     
    stone.lifetime = 134;
    
    
    stone.depth = monkey.depth;
    monkey.depth = stone.depth + 1;
    
    
   stoneGroup.add(stone);
  }
  
}

