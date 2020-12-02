var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
 var rect1,rect3,rect5,rect6,rect7,rect8,rect9,rect10,edges;

var rect4,rect4_8ty;
var rect2,rect2_8ty;

var score;
var level;





function preload(){
 loadAnimation("trex1.png","trex2.png","trex3.png");
  
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");

  trex_running = loadImage("Screenshot__8.png")
  
  rect4_8ty=loadImage("Screenshot (13).png");
  rect2_8ty=loadImage("Screenshot (13).png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  
  //create a trex sprite
  trex = createSprite(60,height-50,20,50);
  trex.addImage("running", trex_running);
  trex.scale = 0.15;
  
  
 
  
  
  rect4=createSprite(400,125,80,3);
  rect4.addImage("8ty",rect4_8ty);
  rect4.scale = 0.15;
  
  rect1=createSprite(400,113,38,3);
  
  

  
  
  //create a ground sprite
  ground = createSprite(width/2,height-20,width,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  
 

  
  //creating invisible ground
  invisibleGround = createSprite(width/2,height-10,width,10);
  invisibleGround.visible = false;
  
  rect1.visible = false;
  
  
  //generate random numbers
  var rand =  Math.round(random(1,100))
  
 
  
  
  rect2=createSprite(width/2,height-100,80,5);
  rect2.addImage("8ty",rect2_8ty);
  rect2.scale=0.15;
  
  
  
   rect3=createSprite(400,58,38,3);
  rect3.visible = false;
  
  rect5=createSprite(width/20,height-90,35,5);
  rect6=createSprite(width/4,height-150,10,10);
  
  rect7=createSprite(width-90,height/2,10,10);
  rect8=createSprite(width/3,height/3,8,8);
  
  rect9=createSprite(width/3,height/2,8,8);
   
 
  
  rect2.velocityX=-6;
  rect2.velocityY=0;
  
  rect3.velocityX=-6;
  rect3.velocityY=0;
  
  rect4.velocityX=6;
  rect4.velocityY=0;
  
    rect1.velocityX=6;
  rect1.velocityY=0;
  
   rect8.velocityX=-12;
  rect8.velocityY=0;
  
  rect9.velocityX=12;
  rect9.velocityY=0;
   
  score=0;
  level=0;
}



function draw() {   
  //set background color
  background("lightblue");
  
  text("Deaths:"+score, 500,50);
  text("Score:"+level,50,30);

   if(trex.isTouching(invisibleGround)){
     score=score + 1;
  }
   if(trex.isTouching(rect8)){
     level=level + 1;
  }
   if(trex.isTouching(rect9)){
     level=level + 1;
  }
  if(trex.isTouching(rect7)){
    trex.x=60;
    trex.y=160;
  }
  
  edges=createEdgeSprites();
   
  rect2.bounceOff(edges);
  rect3.bounceOff(edges);
  rect4.bounceOff(edges);
  rect5.bounceOff(edges);
  rect6.bounceOff(edges);
  rect8.bounceOff(edges);
  rect9.bounceOff(edges);
  rect1.bounceOff(edges);
  trex.bounceOff(rect4);
  trex.bounceOff(rect2);
  
  
  // jump when the space key is pressed
  
  
  if((keyDown("UP_ARROW") || touches.lenght>0)&& trex.y >=height-50) {
    trex.velocityY = -10;
  }
  touches =[]
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/ 2;
  }
  
 
  if(trex.isTouching(rect3)){
    trex.x=rect3.x;
    trex.y=rect3.y
    trex.collide(rect3);
    
  }
  if(score>300){
    level=0;
    score=0;
     trex.x=60;
    trex.y=160;
  }
   if(trex.isTouching(rect5)){
    trex.x=rect5.x;
    trex.y=rect5.y
    trex.collide(rect5);
  }
   
  if(trex.isTouching(rect1)){
    trex.x=rect1.x;
    trex.y=rect1.y;
    trex.collide(rect1);
  }
  
  
      ground.velocityX = -(4 + 3* score/150)
  
  
  
  if(trex.x<0){
    trex.x=60;
    trex.y=160;
  }

  if(keyDown("DOWN_ARROW")) {
      trex.x=60;
     trex.y=160;
  }

  if(trex.isTouching(rect6)){
     trex.x=60;
     trex.y=160
     }
 
  
  //stop trex from falling down
  trex.collide(invisibleGround);

  
  
 
 
  drawSprites();
}





