
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const plane = Matter.plane;

const block1 = Matter.block1;
const block2 = Matter.block2;

const rotator1 = Matter.rotator1;
const rotator2 = Matter.rotator1;
const rotator3 = Matter.rotator1;

const angle1 = 60;
const angle2 = 60;
const angle3 = 60;

const particule1 = Matter.particule1;
const particule2 = Matter.particule2;
const particule3 = Matter.particule3;
const particule4 = Matter.particule4;
const particule5 = Matter.particule5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var plane_opitions={
		isStatic: true
	}
	var block1_opitions={
		isStatic: true
	}
	
	var block2_opitions={
		isStatic: true
	}
	
	var rotator_opitions={
		isStatic: true
	}
	
	var particule_opitions={
		restitution:0.4,
		friction:0.02
	}
	
	
	
	//Crie os Corpos aqui.
	
	
	
	plane = Bodies.rectangle(100,10,20,plane_opitions);
	World.add(world,plane);
	
	block1 = Bodies.rectangle(50,40,20,block1_options);
	World.add(world,block1);
	
	block2 = Bodies.rectangle(800,30,20,block2_options);
	World.add(world,block2);
	
	rotator1 = Bodies.rectangle(250,200,150,20,rotator_options);
	World.add(world,rotator1);
	
	rotator2 = Bodies.rectangle(250,200,150,20,rotator_options);
	World.add(world,rotator2);
	
	rotator3 = Bodies.rectangle(250,200,150,20,rotator_options);
	World.add(world,rotator3);
	
	particule1 = Bodies.circle(220,20,10,particule_options);
	World.add(world,particule1);

	particule2 = Bodies.circle(220,20,10,particule_options);
	World.add(world,particule2);

	particule3 = Bodies.circle(220,20,10,particule_options);
	World.add(world,particule3);
	
	particule4 = Bodies.circle(220,20,10,particule_options);
	World.add(world,particule4);
	
	particule5 = Bodies.circle(220,20,10,particule_options);
	World.add(world,particule5);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
}
 
  background(0);
  
  fill("red");
  
Matter.Body.rotate(rotator1,angle1)

push();
translate(rotator1.position.x,rotator1.position.y)
rotate(angle1)
rect(0,0,150,20)


pop();
angle1 +=0.2;

Matter.Body.rotate(rotator2,angle2)

push();
translate(rotator2.position.x,rotator2.position.y)
rotate(angle2)
rect(0,0,150,20)


pop();
angle2 +=0.2;

Matter.Body.rotate(rotator2,angle2)

push();
translate(rotator2.position.x,rotator2.position.y)
rotate(angle2)
rect(0,0,150,20)


pop();
angle2 +=0.2;




ellipse(particule1.position.x,particule1.position.y,20);
ellipse(particule2.position.x,particule2.position.y,20); 
ellipse(particule3.position.x,particule3.position.y,20);  
ellipse(particule4.position.x,particule4.position.y,20);
ellipse(particule5.position.x,particule5.position.y,20);

drawSprites();
 




