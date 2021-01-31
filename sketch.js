// Variables for Player 1
var Player1;
var Player1_win,Player1_win_still;
var Player1_LS_lose_still;
    // Left Side
    var Player1_LS_anim_norm;
    var Player1_LS_anim_move_right,Player1_LS_anim_move_left;
    var Player1_LS_anim_fly,Player1_LS_anim_crouch;
    var Player1_LS_anim_punch,Player1_LS_anim_kick;
    var Player2_LS_block_still;
    // Right Side
    var Player1_RS_anim_norm;
    var Player1_RS_anim_move_right,Player1_RS_anim_move_left;
    var Player1_RS_anim_fly,Player1_RS_anim_crouch;
    var Player1_RS_anim_punch,Player1_RS_anim_kick;
    var Player2_RS_block_still;

//sound

var spookySound;
// Variables for Player 2
var Player2;
var Player2_win;
var Player2_LS_lose_still;
    // Left Side
    var Player2_LS_anim_norm;
    var Player2_LS_anim_move_right,Player2_LS_anim_move_left;
    var Player2_LS_anim_fly,Player2_LS_anim_crouch;
    var Player2_LS_anim_punch,Player2_LS_anim_kick;
    var Player2_LS_block_still;
    // Right Side
    var Player2_RS_anim_norm;
    var Player2_RS_anim_move_right,Player2_RS_anim_move_left;
    var Player2_RS_anim_fly,Player2_RS_anim_crouch;
    var Player2_RS_anim_punch,Player2_RS_anim_kick;
    var Player2_RS_block_still;

// Buttons for playing in mobile

var Lbtn1,Rbtn1,UPbtn1,DWbtn1;
var UImg1,RImg1,LImg1,DImg1;
var punch1,punchImg1;
var kick1,kickImg1;
var block1,blockImg1;

// Buttons for playing in mobile
var Lbtn2,Rbtn2,UPbtn2,DWbtn2;
var UImg2,RImg2,LImg2,DImg2;
var punch2,punchImg2;
var kick2,kickImg2;
var block2,blockImg2;

// Variable for Ground
var invisibleGround;

// Health
var health1;
var health2;
var healthBar1,healthBlock1;
var healthLevel1;
var healthBar2;
var healthLevel2,healthBlock2;

var bmode1 = 0;
var bmode2 = 0;

// Gamestates
var gameState;
var play;
var start;
var redWin;
var blueWin;

function preload() {

  // Background Image

  BG = loadImage("bg.png");

  // Player 1 Images for Left Side 

  Player1_LS_anim_norm = loadAnimation("img/player1/left/p1m.jpg");

  Player1_LS_anim_move_right = loadAnimation("img/player1/left/p1walkr1.jpg","img/player1/left/p1walk2.jpg");

  Player1_LS_anim_move_left = loadAnimation("img/player1/left/p1walk1.jpg","img/player1/left/p1walk2.jpg");

  Player1_LS_anim_fly = loadAnimation("img/player1/left/p1m.jpg");

  
 

  Player1_LS_lose_still = loadAnimation("img/player1/left/p1m.jpg");

  // Player 1 Images for Right Side

  Player1_RS_anim_norm = loadAnimation("img/player1/left/p1m.jpg");

  Player1_RS_anim_move_right = loadAnimation("img/player1/left/p1m.jpg");

  Player1_RS_anim_move_left = loadAnimation("img/player1/left/p1m.jpg");

  Player1_RS_anim_fly = loadAnimation("img/player1/left/p1m.jpg");

 
  Player1_RS_lose_still = loadAnimation("img/player1/left/p1m.jpg");



  Player1_win = loadAnimation("img/player1/left/p1m.jpg");

  Player1_win_still = loadAnimation("img/player1/left/p1m.jpg");


  // Player 2 Images for Left Side

  Player2_LS_anim_norm = loadAnimation("img/player1/left/p1m.jpg");

  Player2_LS_anim_move_right = loadAnimation("img/player1/left/p1m.jpg");

  Player2_LS_anim_move_left = loadAnimation("img/player1/left/p1m.jpg");

  Player2_LS_anim_fly = loadAnimation("img/player1/left/p1m.jpg");


  Player2_LS_lose_still = loadAnimation("img/player1/left/p1m.jpg");

  // Player 2 Images for Right Side

  Player2_RS_anim_norm = loadAnimation("img/player1/left/p1m.jpg");

  Player2_RS_anim_move_right = loadAnimation("img/player1/left/p1m.jpg");

  Player2_RS_anim_move_left = loadAnimation("img/player1/left/p1m.jpg");

  Player2_RS_anim_fly = loadAnimation("img/player1/left/p1m.jpg");

  
  Player2_RS_lose_still = loadAnimation("img/player1/left/p1m.jpg");

  Player2_win = loadAnimation("img/player1/left/p1m.jpg");



 
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  frameRate(70);
  gameState = "play";
  
  // The Ground for making the player stand
  invisibleGround = createSprite(windowWidth/2,windowHeight-40,windowWidth,15);
  invisibleGround.visible = false;

  // Player 1
  Player1 = createSprite(400, windowHeight-40, 50, 50);
  Player1.addAnimation("win1",Player1_win);
  Player1.addAnimation("win1_still",Player1_win_still);
      // Left Side
      Player1.addAnimation("Normal_LS_1",Player1_LS_anim_norm);
      Player1.addAnimation("right_LS_1",Player1_LS_anim_move_right);
      Player1.addAnimation("left_LS_1",Player1_LS_anim_move_left);
      Player1.addAnimation("jump_LS_1",Player1_LS_anim_fly);
      Player1.addAnimation("lose_LS_still_1",Player1_LS_lose_still);
      // Right Side
      Player1.addAnimation("Normal_RS_1",Player1_RS_anim_norm);
      Player1.addAnimation("right_RS_1",Player1_RS_anim_move_right);
      Player1.addAnimation("left_RS_1",Player1_RS_anim_move_left);
      Player1.addAnimation("jump_RS_1",Player1_RS_anim_fly);
      Player1.addAnimation("lose_RS_still_1",Player1_RS_lose_still);
  Player1.scale = 0.5;

  // Player 2
  Player2 = createSprite(windowWidth-400, windowHeight-40, 50, 50);
  Player2.addAnimation("win2",Player2_win);
      // Left Side
      Player2.addAnimation("Normal_LS_2",Player2_LS_anim_norm);
      Player2.addAnimation("right_LS_2",Player2_LS_anim_move_right);
      Player2.addAnimation("left_LS_2",Player2_LS_anim_move_left);
      Player2.addAnimation("jump_LS_2",Player2_LS_anim_fly);
      Player2.addAnimation("lose_LS_still_2",Player2_LS_lose_still);
      // Right Side
      Player2.addAnimation("Normal_RS_2",Player2_RS_anim_norm);
      Player2.addAnimation("right_RS_2",Player2_RS_anim_move_right);
      Player2.addAnimation("left_RS_2",Player2_RS_anim_move_left);
      Player2.addAnimation("jump_RS_2",Player2_RS_anim_fly);   
      Player2.addAnimation("lose_RS_still_2",Player2_RS_lose_still);
  Player2.scale = 0.5;

  // Health

  healthBar1 = createSprite(175,100,300,25);
  healthBar1.shapeColor = "white";

  healthLevel1 = createSprite(175,100,290,15);
  healthLevel1.shapeColor = "red";

  healthBlock1 = createSprite(19,100,40,45);
  healthBlock1.shapeColor = "lightgrey";
  
  healthBar2 = createSprite(windowWidth-175,100,300,25);
  healthBar2.shapeColor = "white";

  healthLevel2 = createSprite(windowWidth-175,100,290,15);
  healthLevel2.shapeColor = "red";

  healthBlock2 = createSprite(windowWidth-19,100,40,45);
  healthBlock2.shapeColor = "lightgrey";

 // healthBlock1.depth = healthLevel2.depth;
  //healthLevel2.depth -= 1;

  

  // restart btn
  restart = createButton('RESTART');
  restart.position(windowWidth/2-60,windowHeight/2-100);
  restart.style('width','120px');
  restart.style('height','60px');
  restart.style('border-radius','20px');
  restart.style('color','black');
  restart.style('font-size','20px');
  restart.hide();
  restart.mousePressed(() => {
    gameState = "play";
    healthLevel1.x = 175;
    healthLevel2.x = windowWidth-175;
    Player1.x = 400;
    Player2.x =windowWidth-400;
  })


}

function draw() {

  // Gravity
  Player1.velocityY += 0.8;
  Player2.velocityY += 0.8;

  if(gameState === "play") {

    background(BG); 

    frameRate(550);
    restart.hide()
  
  /* --------------------------- Computer Movements --------------------------- */

  // Function for right movement of player 1
  if(keyDown("D")){
    Player1.x += 6;
    if(Player1.x<Player2.x) {
      Player1.changeAnimation("right_LS_1",Player1_LS_anim_move_right);
    }else if(Player1.x>Player2.x) {
      Player1.changeAnimation("right_RS_1",Player1_RS_anim_move_right);
    }
  }else {
    if(Player1.x<Player2.x) {
      Player1.changeAnimation("Normal_LS_1",Player1_LS_anim_norm);
    }else if(Player1.x>Player2.x) {
      Player1.changeAnimation("Normal_RS_1",Player1_RS_anim_norm);
    }
  }

  // Function for left movement of player 1
  if(keyDown("A")){
    Player1.x -= 6;
    if(Player1.x<Player2.x) {
      Player1.changeAnimation("left_LS_1",Player1_LS_anim_move_left);
    }else if(Player1.x>Player2.x) {
      Player1.changeAnimation("left_RS_1",Player1_RS_anim_move_left);
    }
  }

  // Function for flying of player 1
  if(keyDown("W") && Player1.y > invisibleGround.y-150) {
    Player1.velocityY = -15;
    if(Player1.x<Player2.x) {
      Player1.changeAnimation("jump_LS_1",Player1_LS_anim_fly);
    }else if(Player1.x>Player2.x) {
      Player1.changeAnimation("jump_RS_1",Player1_RS_anim_fly);
    }
  }




/* --------------------------- Computer Movements --------------------------- */


/* --------------------------- Computer Movements --------------------------- */

  // Function for right movement of player 2
  if(keyDown(RIGHT_ARROW)){
    Player2.x += 6;
    if(Player2.x>Player1.x) {
      Player2.changeAnimation("right_RS_2",Player2_RS_anim_move_right);
    }else if(Player2.x<Player1.x) {
      Player2.changeAnimation("right_LS_2",Player2_LS_anim_move_right);
    }
  }else {
    if(Player2.x>Player1.x) {
      Player2.changeAnimation("Normal_RS_2",Player2_RS_anim_norm);
    }else if(Player2.x<Player1.x) {
      Player2.changeAnimation("Normal_LS_2",Player2_LS_anim_norm);
    }
  }

  // Function for left movement of player 2
  if(keyDown(LEFT_ARROW)){
    Player2.x -= 6;
    if(Player2.x>Player1.x) {
      Player2.changeAnimation("left_RS_2",Player2_RS_anim_move_left);;
    }else if(Player2.x<Player1.x) {
      Player2.changeAnimation("left_LS_2",Player2_LS_anim_move_left);
    }
  }

  // Function for flying of Player 2 
  if(keyDown(UP_ARROW) && Player2.y > invisibleGround.y-150) {
    Player2.velocityY = -15;
    if(Player2.x>Player1.x) {
      Player2.changeAnimation("jump_RS_2",Player2_RS_anim_fly);
    }else if(Player2.x<Player1.x) {
      Player2.changeAnimation("jump_LS_2",Player2_LS_anim_fly);
    }
  }

  

 

  

  /* --------------------------- Computer Movements --------------------------- */



  if(healthLevel1.x<-105) {
    gameState = "redWin";
  }

  if(healthLevel2.x>windowWidth+105) {
    gameState = "blueWin";
  }

}else if (gameState === "redWin") {

  background(BG); 

  textSize(25);
  fill("red");
  text("RED WINS!!",windowWidth/2-70,windowHeight/2-125);
  restart.style('background','red');
  restart.show();
  frameRate(25);

  Player2.changeAnimation("win2",Player2_win);

  if(Player1.x<Player2.x) {
      Player1.changeAnimation("lose_LS_still_1",Player1_LS_lose_still);
  }else if(Player1.x>Player2.x) {
      Player1.changeAnimation("lose_RS_still_1",Player1_RS_lose_still);
  }

}else if(gameState === "blueWin") {

  background(BG); 

  textSize(25);
  fill("blue");
  text("BLUE WINS!!",windowWidth/2-70,windowHeight/2-125);
  restart.style('background','blue');
  restart.show();
  frameRate(25);

  Player1.changeAnimation("win1",Player2_win);

  setTimeout(() => {
    Player1.changeAnimation("win1_still",Player1_win_still);
  }, 1000);

  if(Player2.x>Player1.x) {
      Player2.changeAnimation("lose_RS_still_2",Player2_RS_lose_still);
  }else if(Player2.x<Player1.x) {
      Player2.changeAnimation("lose_LS_still_2",Player2_LS_lose_still);
  }
}

// Screen walk management
if(Player1.x<0) {
  Player1.x = windowWidth;
}else if(Player1.x>windowWidth) {
  Player1.x = 0;
}

if(Player2.x<0) {
  Player2.x = windowWidth;
}else if(Player2.x>windowWidth) {
  Player2.x = 0;
}

  // collision
  Player1.collide(invisibleGround);
  Player2.collide(invisibleGround);
  drawSprites();
}