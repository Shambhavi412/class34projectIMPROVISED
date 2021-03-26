const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var slingshot;
var ball;
var bg;
var lives = 5;
var pin1, pin2, pin3, pin4,pin5, pin6, pin7, pin8, pin9, pin10;
var pin1Sling, pin2Sling, pin3Sling, pin4Sling, pin5Sling, pin6Sling, pin7Sling, pin8Sling, pin9Sling, pin10Sling;
var alley;
var pin1Img
var gameState = "play";
var gameOverImg;
var pin1score,pin2score,pin3score,pin4score,pin5score,pin6score,pin7score,pin8score,pin9score,pin10score;
var PinScoreArray = [];
function preload()
{
  //bg = loadImage("alley3.png")
  gameOverImg = loadImage("gameOverImg.jpg");

}


function setup() 
{
  createCanvas(windowWidth,windowHeight);
  
  engine = Engine.create();
  world = engine.world;
  
  ball = new Ball(730,620);

 slingshot = new Slingshot(ball.body,{x:760,y:620})

 pin1 = new Pin(650,50);
 pin1Sling = new pinSlingshot(pin1.body,{x:650,y:30});

 pin2 = new Pin(750,50);
 pin2Sling = new pinSlingshot(pin2.body,{x:750,y:30});

 pin3 = new Pin(850,50);
 pin3Sling = new pinSlingshot(pin3.body,{x:850,y:30});

 pin4 = new Pin(950,50);
 pin4Sling = new pinSlingshot(pin4.body,{x:950,y:30});

 pin5 = new Pin(700,120);
 pin5Sling = new pinSlingshot(pin5.body,{x:700,y:90});

 pin6 = new Pin(800,120);
 pin6Sling = new pinSlingshot(pin6.body,{x:800,y:90});

 pin7 = new Pin(900,120);
 pin7Sling = new pinSlingshot(pin7.body,{x:900,y:90});

 pin8 = new Pin(750,190);
 pin8Sling = new pinSlingshot(pin8.body,{x:750,y:160});

 pin9 = new Pin(850,190);
 pin9Sling = new pinSlingshot(pin9.body,{x:850,y:160});

 pin10 = new Pin(800,260);
 pin10Sling = new pinSlingshot(pin10.body,{x:800,y:230});

 alley = Bodies.rectangle(windowWidth/2+30,windowHeight/2,300,windowHeight);

 pin1score = "Pin1IsRemoved";
pin2score = "Pin2IsRemoved";
pin3score = "Pin3IsRemoved";
pin4score = "Pin4IsRemoved";
pin5score = "Pin5IsRemoved";
pin6score = "Pin6IsRemoved";
pin7score = "Pin7IsRemoved";
pin8score = "Pin8IsRemoved";
pin9score = "Pin9IsRemoved";
pin10score = "Pin10IsRemoved";
        
}



function draw() 
{
  Engine.update(engine);
 // background(247,159,70); 
  background("black");


  fill(50)
  rectMode(CENTER)
  rect(alley.position.x+30,alley.position.y,390,windowHeight)


  ball.display();

  slingshot.display();

  pin1.display();
  pin2.display();
  pin3.display();
  pin4.display();
  pin5.display();
  pin6.display();
  pin7.display();
  pin8.display();
  pin9.display();
  pin10.display();
  
  pin1.remove();
  pin2.remove();
  pin3.remove();
  pin4.remove();
  pin5.remove();
  pin6.remove();
  pin7.remove();
  pin8.remove();
  pin9.remove();
  pin10.remove();
  

  pin1.try();

  /*if(pin1.try)
  {
    rect(300,500,40,40)
  }*/
  gameOver();
  //pin1.addImage();
 
  if(gameState==="play")
  {
    noFill();
    //stroke();
    stroke("cyan")
    strokeWeight(0.6);
    textSize(30);
    textFont("jokerman");
    text("*Drag  the mouse  and  release it",1010,250);
    text("to  throw  the  ball",1070,300);
    
    strokeWeight(0.7);
    stroke("cyan")
    //fill("cyan")
    textSize(50);
    textFont("jokerman");
    text("Lives:"+lives,1100,100)
    

    strokeWeight(5);
    stroke("purple")
    fill("cyan")
    textSize(60);
    textFont("jokerman");
    text("CATAPULT",60,100);
    text("BOWLING",60,200)



  }
  
 












  /*pin1Sling.display();
  pin2Sling.display();
  pin3Sling.display();
  pin4Sling.display();
  pin5Sling.display();
  pin6Sling.display();
  pin7Sling.display();
  pin8Sling.display();
  pin9Sling.display();
  pin10Sling.display();*/

  drawSprites();
  }



  function mouseDragged()
  {

  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});

  }



  function mouseReleased()
  {
    slingshot.fly();
  }



  function keyPressed(){
    if(keyCode === 32 ){
      lives = lives-1;
        //ball.trajectory= [];
        Matter.Body.setPosition(ball.body,{x:760,y:620});
       slingshot.attach(ball.body);
    }
  
  }

  function gameOver()
  {
    if(lives===0)
    {
gameState = "over";
background(0);
imageMode(CENTER);
image(gameOverImg,750,windowHeight/2,600,windowHeight)
//rect(500,500,60,60)
    }
  }