var crater,craterImg,cratersGroup;
var rocket, rocketImg;
var back,backImg;
var crater2,crater2Img,crater2sGroup;

var END = 0;
var PLAY=1;
var gameState = PLAY;
var game,gameImg;


function preload(){
backImg = loadImage("SPACE.jpg");
rocketImg = loadImage("Rocket.png");
craterImg = loadImage("Crater.jfif");
crater2Img = loadImage("download.jfif");
gameImg = loadImage("download1.jfif");
}

function setup() {
createCanvas(400,400);
  
back = createSprite(200,200);
back.addImage("back",backImg);
back.scale = 2.2;
back.velocityY = 2;
  
rocket = createSprite(200,300);
rocket.addImage("rocket",rocketImg);
rocket.scale = 0.1;
  
game = createSprite(200,200);
game.addImage("game",gameImg);
game.visible = false;
  
cratersGorup = new Group();
crater2sGroup = new Group();
  
}

function draw() {
background("white");
  
if(back.y>300){
back.y = 200; 
}
  
if(gameState === PLAY){
    
if(keyDown(LEFT_ARROW)){
rocket.x = rocket.x-3;
}
    
if(keyDown(RIGHT_ARROW)){
rocket.x = rocket.x+3;
}
   
if(rocket.isTouching(cratersGroup)){
gameState = END;
rocket.velocity = 0;
crater.velocity = 0;
}
    
if(rocket.isTouching(crater2Group)){
gameState=END;
crater2.velocity = 0;
}
    
} else if(gameState===END){
game.visible = true;
}
spawnCraters();
drawSprites();

}

function spawnCraters(){
  
if(frameCount%240===0){
crater = createSprite(100,100);
crater.addImage("crater",craterImg);
crater.scale = 0.3;
crater.x= Math.round(random(120,380));
crater.velocityY = 1;
    
crater2 = createSprite(200,100);
crater2.addImage("crater2",crater2Img);
crater2.scale = 0.3;
crater2.velocityY = 1;
crater2.x = crater.x;
    
crater2.lifetime = 800; 
crater2sGroup.add(crater2);
    
crater.lifetime = 800;
cratersGroup.add(crater);
}
}
