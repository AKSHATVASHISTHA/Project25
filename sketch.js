
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var db,dbimg;
var dustbin1;
var p,pimg;
var paper123;
var gr;


function preload(){
dbimg=loadImage("dustbingreen.png");
pimg=loadImage("paper.png");

}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbin1= createSprite(1200,500,40,40);
	dustbin1.addImage(dbimg);
	paper123= createSprite(1200,100,40,40);
	paper123.addImage(pimg);
	gr= createSprite(1000,670,600,10);
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("white");
  if(keyDown("down")){
paper123.velocityY=4;
	//paper123.y=paper123.y+2;

}
 paper123.collide(gr);

 drawSprites();
  groundObject.display();
  dustbinObj.display();

}

function keyPressed() {
	if(keyCode===("space")){
	
		Body.setStatic(starBody,false);
	
	}
	
	}