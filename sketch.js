
var P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11;
var O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11;
var groundImg, ballImg, ball;

function preload()
{
  groundImg = loadImage("ground final.jpg");
  ballImg = loadImage("football.png");
}

function setup() 
{
  createCanvas(1500, displayHeight);
  
  // making players for team 'A' computerised
  //creating attackers
  P1 = createSprite(640, 130, 50, 50);
  P1.shapeColor = "red";
  P2 = createSprite(660, 260, 50, 50);
  P2.shapeColor = "red";
  P3 = createSprite(640, 490, 50, 50);
  P3.shapeColor = "red";
  P4 = createSprite(660, 640, 50, 50);
  P4.shapeColor = "red";
  //creating midfielders
  P5 = createSprite(520, 340, 50, 50);
  P5.shapeColor = "red";
  P6 = createSprite(520, 470, 50, 50);
  P6.shapeColor = "red";
  //creating defenders
  P7 = createSprite(360, 150, 50, 50);
  P7.shapeColor = "red";
  P8 = createSprite(360, 280, 50, 50);
  P8.shapeColor = "red";
  P9 = createSprite(360, 480, 50, 50);
  P9.shapeColor = "red";
  P10 = createSprite(360, 620, 50, 50);
  P10.shapeColor = "red";
  //creating GK
  P11 = createSprite(120, 385, 50, 50);
  P11.shapeColor = "blue";
  //making players for team 'B' personified
  //creating attackers
  O1 = createSprite(830, 255, 50, 50);
  O1.shapeColor = "blue";
  O2 = createSprite(810, 380, 50, 50);
  O2.shapeColor = "blue";
  //creating midfielders
  O3 = createSprite(1000, 225, 50, 50);
  O3.shapeColor = "blue";
  O4 = createSprite(1000, 400, 50, 50);
  O4.shapeColor = "blue";
  O5 = createSprite(1000, 550, 50, 50);
  O5.shapeColor = "blue";
  //creating defenders
  O6 = createSprite(1170, 85, 50, 50);
  O6.shapeColor = "blue";
  O7 = createSprite(1130, 215, 50, 50);
  O7.shapeColor = "blue";
  O8 = createSprite(1150, 345, 50, 50);
  O8.shapeColor = "blue";
  O9 = createSprite(1150, 475, 50, 50);
  O9.shapeColor = "blue";
  O10 = createSprite(1170, 650, 50, 50);
  O10.shapeColor = "blue";
  //creating GK
  O11 = createSprite(1400, 385, 50, 50);
  O11.shapeColor = "red";


  ball = createSprite(750, displayHeight/2, 20, 20);
  ball.addImage("ball", ballImg);
  ball.scale = 0.04;

  O2.density = ball.density;
  ball.density = ball.density + 50;


  edge1 = createSprite(1500, displayHeight/2, 20,displayHeight);
  edge1.visible = false;
  edge2 = createSprite(0, displayHeight/2, 20,displayHeight);
  edge2.visible = false;
  edge3 = createSprite(750, 0, 1500, 20);
  edge3.visible = false;
  edge4 = createSprite(750, displayHeight, 1500, 20);
  edge4.visible = false;


}

function draw() 
{
  background(groundImg); 
  
  
  //giving control to player (random)
  //if (mousePressedOver(O1))
  //{
  if(keyDown("up"))
  {
     O1.y = O1.y - 3;
  }
  
  if (keyDown("down"))
  {
    O1.y = O1.y + 3;
  }

  if (keyDown("left"))
  {
    O1.x = O1.x - 3;
  }

  if (keyDown("right"))
  {
    O1.x = O1.x + 3;
  }
  //}

  //if(mousePressedOver(O2))
 // {
    //if(keyDown("up"))
  //{
     //O2.y = O2.y - 3;
 // }
  
  //if (keyDown("down"))
 // {
    //O2.y = O2.y + 3;
 // }

  //if (keyDown("left"))
 // {
  //  O2.x = O2.x - 3;
 // }

 // if (keyDown("right"))
 // {
   // O2.x = O2.x + 3;
 // }
 // }


 //giving motion to football

 if (O1.isTouching(ball) && keyDown("space"))
 {
   ball.velocityX = random(4,8);
   ball.velocityY = random(-8,8);
 }

 ball.bounceOff(edge1);
 ball.bounceOff(edge2);
 ball.bounceOff(edge3);
 ball.bounceOff(edge4);


  
  drawSprites();
}