
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof1 = new Roof(400, 200, 500, 20);

	bobObject1 = new Bob(300, 400, 20);
	rope1 = new Rope(bobObject1.body, {x:300, y:200});
	bobObject2 = new Bob(340, 400, 20);
	rope2 = new Rope(bobObject2.body, {x:340, y:200});
	bobObject3 = new Bob(380, 400, 20);
	rope3 = new Rope(bobObject3.body, {x:380, y:200});
	bobObject4 = new Bob(420, 400, 20);
	rope4 = new Rope(bobObject4.body, {x:420, y:200});
	bobObject5 = new Bob(460, 400, 20);
	rope5 = new Rope(bobObject5.body, {x:460, y:200});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("gray");
  roof1.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position,{x:-150, y:0});
}
}

