
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var survivalTime = 0
function preload(){
  monkey_running =  loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(400,400);
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  ground=createSprite(400,350,900,20);
  ground.velocityX=-4;
  console.log(ground.x);
  FoodGroup = new Group();
  obstacleGroup = new Group();
}

function draw() {
  background(300);
  ground.x=ground.width/2;
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  if(keyDown("space")&&monkey.y>300){
    monkey.velocityY=-16;
  }
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: " + survivalTime,100,50)
  spawnFood();
  spawnObstacles();
  drawSprites();
}

function spawnFood() {
  if(World.frameCount%80==0){
    banana = createSprite(450,Math.round(random(120,200)),20,20);
    banana.velocityX=-4;
    banana.scale=0.1;
    banana.lifetime=150;
    banana.addImage(bananaImage);
    banana.debug = true;
    FoodGroup.add(banana);
  }
}

function spawnObstacles() {
  if(World.frameCount%300==0){
    obstacle=createSprite(450,315,20,20);
    obstacle.velocityX=-6;
    obstacle.lifetime=150;
    obstacle.scale=0.3;
    obstacle.addImage(obstacleImage)
  }
}