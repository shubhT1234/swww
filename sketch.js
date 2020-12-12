var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,options
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var score,ph,file,lo;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
score=0;
ph=0;
file=0;
lo=0;
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5);
	World.add(world, packageBody);
	 

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  background(0);
  drawSprites();
  text(score,200,200);
  text(file,500,200);
  console.log(mouseX,mouseY)
  if(keyDown("down")){
   packageSprite.velocityY=4;
  }
  if(packageSprite.isTouching(groundSprite)){
  packageSprite.velocityY=-4;
  ph=1;
  }
  if(ph==1 && lo==0){
  score=score+1;
  }
  if(score>10 && lo==0){
	  score=0;
	  ph=0;
	  packageSprite.velocityY=3;
	  file=file+1;
  }
  if(file>3){
	  file=0;
	  ph=0;
	  score=0;
	  lo=1
	  packageSprite.y=636.7;
	  packageSprite.velocityY=0;
  }
  if(lo==1){
	  packageSprite.velocityY=0;
  }
}





