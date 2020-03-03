const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var string, ball;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ball = new Ball(200,120,50)
    string = new String(ball.body, {x: 200,y: 80});

}

function draw(){
    background("white");
    Engine.update(engine);
    fill("green");
    text("Press and drag the mouse anywhere, and release", 50, 30)
    
    
    ball.display();
    string.display();

}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY})
}
 