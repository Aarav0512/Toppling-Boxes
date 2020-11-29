
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var myEngine,myWorld;
var box1;
var box2;
var box3;
var ground;

function setup() {
  createCanvas(800,400);
  myEngine =Engine.create();
 myWorld = myEngine.world;
 box1 = new Box(150,150,50,80);
 box2 = new Box(100,250,80,50);  
 box3 = new Box(125,200,50,50);
 ground = new Ground(400,380,800,30);
}

function draw() {
  background(0); 
  Engine.update(myEngine);  
  box1.display();
  box2.display();
  box3.display();
  ground.display();   
}   
          