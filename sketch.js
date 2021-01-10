const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon,Img,Img2,poly;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18;

function preload(){
  Img = loadImage("dede.jpg");
  Imag2 = loadImage("dayday.jpg");
}
function setup() {
  var canvas = createCanvas(1000,400);
  engine = Engine.create();
  
  world = engine.world;
  block1=new Box(480,275);
  block2=new Box(510,275);
  block3=new Box(540,275);
  block4=new Box(570,275);
  block5=new Box(600,275);
  block6=new Box(450,275);
  block7=new Box(630,275);
  block8=new Box(480,235);
  block9=new Box(510,235);
  block10=new Box(540,235);
  block11=new Box(570,235);
  block12=new Box(600,235);
  block13=new Box(510,195);
  block14=new Box(530,195);
  block15=new Box(560,195);
  block16=new Box(530,155);
  block17=new Box(800,100);
  block18=new Box(800,140);

  ground1=new Ground(500,390,1000,20);
  ground2=new Ground(550,305,250,20);
  
  var options={
    density:2.5,
    restitution:0.5,
    friction:1.2,
  }
  polygon=Bodies.circle(200,200,20,options);
  
  World.add(world,polygon);
  chain1=new SlingShot(this.polygon,{x:200,y:200});
}
function draw() {
  background(Img); 
 
  Engine.update(engine);
  fill("white")
  textSize(15)
  text("Press space to get 2nd chance,also use mouse to play",300,100);
  fill(135,206,234);

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  
  
  chain1.display();
  
  ground1.display();
  ground2.display();
 getBack 
 
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  chain1.fly();
}
function keyPressed(){
  if(keyCode === 32){
      chain1.attach(this.polygon);
  }
}

async function getBack(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  if(hour >= 06 && hour <= 19){
      
      Img = "dayday.jpg";
  }
  else{
    Img = "dede.jpg";
  }
  backgroundImg = loadImage(Img);
  }