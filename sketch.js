const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var engine,world,ball,ball2

function setup(){
createCanvas(400,400)
engine=Engine.create()
world=engine.world

var freez={
  isStatic:true
}
var option2={
  restitution:1.0
}
ball=Bodies.circle(100,100,25,option2);
World.add(world,ball)

ball2=Bodies.rectangle(10,5,20,10,option2);
World.add(world,ball2)

ground=Bodies.rectangle(200,380,400,10,freez);
World.add(world,ground)
}


function draw(){
background(0)
Engine.update(engine)
rectMode(CENTER)
ellipse(ball.position.x,ball.position.y,25);
rect(ball2.position.x,ball2.position.y,20,10);
rect(ground.position.x,ground.position.y,400,10)

}