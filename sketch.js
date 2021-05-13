
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paperObject;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new Ground(width/2,670,width,20);
	dustbinObj=new Dustbin(1200,650);
	paperObject=new Paper(460,600);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 Engine.update(engine);

  groundObject.display();
  paperObject.display();
  dustbinObj.display();

  //this function is not for bodies
  //if (keyWentDown('up')) {
	  //paperObject.body.velocity.x = 6;
	 // paperObject.body.velocity.y = -20; 
 //}

 // paperObject.velocityY = 5;

  drawSprites();
}

function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:120,y:-270});
	}
}