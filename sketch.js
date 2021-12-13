const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var groundImage;
var engine, world;
var box1, pig1;
function preload(){
groundImage=loadImage("./sprites/ground1.jpg")
}


function setup(){
    var canvas = createCanvas(1200,700);
   // background(groundImage)
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(600,670,1200,20)
    goal = new Goal(600,350,150,100,-120)

   ball=new Ball(300,300)
  

}

function draw(){
    background(groundImage);
    Engine.update(engine);
  
 ground.display()  
    goal.display();
    ball.display();
    
}