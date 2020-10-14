
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var b4fwer,b2fwer,b3fwer,b5fwer;
var a=500,b=300;

function preload()
{
	
}
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var options={
		isStatic:false,
	
		density:1.2

		
		}

		var options2={
			isStatic:false,
			
			density:15

			
			}


	//Create the Bodies Here.
Ground = new ground(400,150,150,30);
	ball1=new ball(400,350,30,"red",options2);
	ball2=new ball(430,350,30,"green",options2);
	ball3=new ball(370,350,30,"orange",options2);
	ball4=new ball(460,350,30,"blue",options);
	ball5=new ball(340,350,30,"pink",options);
rope1= new Rope(ball1.body,Ground.body,0,0);
rope2= new Rope(ball2.body,Ground.body,-30,0);
rope3= new Rope(ball3.body,Ground.body,30,0);
rope4= new Rope(ball4.body,Ground.body,-60,0);
rope5= new Rope(ball5.body,Ground.body,60,0);


b4fwer=createSprite(460,350,30,30);
b4fwer.visible=false;
b2fwer=createSprite(430,350,30,30);
b2fwer.visible=false;

b3fwer=createSprite(370,350,30,30);
b3fwer.visible=false;
b5fwer=createSprite(340,350,30,30);
b5fwer.visible=false;


var render= Render.create({
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
  background("#b8b9b9");

  b4fwer.x=ball4.body.position.x;
  b4fwer.y=ball4.body.position.y;

  b5fwer.x=ball5.body.position.x;
  b5fwer.y=ball5.body.position.y;

  b2fwer.x=ball2.body.position.x;
  b2fwer.y=ball2.body.position.y;

  b3fwer.x=ball3.body.position.x;
  b3fwer.y=ball3.body.position.y;



  keyPressed();

  drawSprites();

  Ground.display();
 ball1.display();
 ball2.display();
 ball3.display();
 ball4.display();
 ball5.display();
 rope1.display();
 rope2.display();
 rope3.display();
rope4.display();
 rope5.display();




}
function keyPressed()
{
if(keyCode === UP_ARROW)
{

   Matter.Body.applyForce(ball4.body,ball4.body.position,{x:5,y:-5});

}
if(b4fwer.x > a)
{
	keyCode = DOWN_ARROW
	a=a-0.75;
}

if(keyCode === DOWN_ARROW)
{
	
   Matter.Body.applyForce(ball4.body,ball4.body.position,{x:-5,y:5});

}
if(b4fwer.isTouching(b2fwer) && keyCode === DOWN_ARROW)
{
	keyCode=RIGHT_ARROW
  
}
if(keyCode === RIGHT_ARROW)
{
	Matter.Body.applyForce(ball5.body,ball5.body.position,{x:-5,y:5});
}
if(b5fwer.x < b)
{
	keyCode = LEFT_ARROW
 b=b+0.75;
}

if(keyCode === LEFT_ARROW)
{
	
   Matter.Body.applyForce(ball5.body,ball5.body.position,{x:5,y:-5});

}
if(b5fwer.isTouching(b3fwer) && keyCode === LEFT_ARROW)
{
	keyCode = UP_ARROW
   
}
}
