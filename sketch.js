
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine , world

var ball, btn
var ground, left, right

function preload()
{
}

function setup() {
	createCanvas(1300, 800);

	var ball_options =
	{
		restitution : 0.3,
		friction : 0,
		density : 1.2
	}

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(650,780,1300,15)
	left = new Ground(800,705,20,135)
	right = new Ground (1050,705,20,135)

	//Create the Bodies Here.
	ball = Bodies.circle(180,100,40,ball_options)
	World.add(world,ball)

	btn = createImg("up.png")
	btn.position (20,30)
	btn.size (50,50)
	btn.mouseClicked (jump)
	

	Engine.run(engine);

	rectMode(CENTER)
	ellipseMode (RADIUS) 
}


function draw() 
{
  background(0);

  ground.show()
  left.show()
  right.show()

  Engine.update (engine)

  ellipse (ball.position.x,ball.position.y,30)
  push()
  stroke(255)
  fill ('WHITE')
  pop()
  drawSprites()

  fill ("white")
  textSize (20)
  text ("Press UP ARROW KEY to throw the ball into the basket",400,75)
}
function jump()
{
	Matter.Body.applyForce(ball, ball.position, {x:275, y:-275})
}