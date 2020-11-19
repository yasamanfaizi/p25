
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function preload(){
	dustbin = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600, 370, 1200, 20);
	ball = new Ball(200, 150, 20);
	left = new Ground(900, 285, 20, 150);
	right = new Ground(1100, 285, 20, 150);
	bottom = new Ground(1000, 350, 200, 20);
	Engine.run(engine);
  
}


function draw() {
 
  background(255);
  
  ground.display()
  ball.display()
  left.display()
  right.display()
  bottom.display()

  image(dustbin,900, 180, 200, 200)
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{
			x: 65, y:-65
		})
		}
	}





