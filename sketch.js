var background;
var soldier;
var enemy;
var gameState="start";
function preload(){
background1=loadAnimation("pictures/bg1.jpeg","pictures/bg2");
soldierImg=loadImage("pictures/soldier.gif");
enemyImg1=loadImage("pictures/enemy1.gif");
background2=loadImage("pictures/background 2.jpeg");
background3=loadImage("pictures/background 3.jpeg");
background4=loadImage("pictures/background 4.jpeg");
background5=loadImage("pictures/background 5.jpeg");
background6=loadImage("pictures/background 6.jpeg");
fire=loadImage("pictures/Imported piskel (2).gif");
}

function setup(){
createCanvas(windowWidth,windowHeight);
//bg=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
soldier=createSprite(windowWidth/2,windowHeight/2+200);
soldier.addImage(soldierImg);
enemy1=createSprite(windowWidth/2,windowHeight/2+100);
enemy1.addImage(enemyImg1);
enemy1.scale=0.5;
start=createSprite(windowWidth/2,windowHeight/2);
bg=createSprite(10,10,200,200);
bg.addAnimation("background",background1);
}

function draw(){
background(0);
if(gameState==="start"){
    enemy1.visible=false;
    bg=background1;
}else if(gameState==="play"){
    soldier.x=350;
    enemy1.visible=true;
    start.visible=false;
    if(keyDown("space")){
        spowers();
    }
}
if(mousePressedOver(start)){
    console.log("start the game");
    gameState="play"
}
drawSprites();
}

function spowers(){
    var power1=createSprite(450,windowHeight/2+200)
    power1.addImage(fire);
    power1.scale=1/8
    power1.velocityX=3;
    power1.velocityY=-5;
}

