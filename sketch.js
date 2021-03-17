
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	dustbinSprite=createSprite(605, 620, 15, 99);
	dustbinSprite.shapeColor=color("red")

	dustbin2Sprite=createSprite(795, 620, 15, 99);
	dustbin2Sprite.shapeColor=color("red")

	paperUno = new Paper(200, 620, 5, 5);

    groundSprite=createSprite(width/2, height-35, width,10);

	groundSprite.shapeColor=color(255)

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );

 	World.add(world, ground);
	 var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });
	Engine.run(engine);
  
}




function draw() {

	rectMode(CENTER);
  
  background(0);

  Engine.update(engine);

  paperUno.display();

  
  drawSprites();
  
}

function keyPressed() {

	if (keyCode === UP_ARROW) {
	
	Matter.Body.applyForce(paperUno.body, paperUno.body.position, {x: 85, y:-85});
	
	}
	}

