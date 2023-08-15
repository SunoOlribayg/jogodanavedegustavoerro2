let nave;
let nave_img;
let bg_img;


let forcaV = 0; //vy
let fundoMovimento;

let alien, alienImage;
let pedrasQ, pedrasQImage;
let asteroide, asteroideImage;
let asteroideFogo, asteroideFogoImage;

let vida;

let obstacles; // Grupo de obstáculos

function preload() {
  nave_img = loadImage("espacoNave.png");
  bg_img = loadImage("2.jpg");
  alienImage = loadImage("alienInimigo.png");
  pedrasQImage = loadImage("pedrasQuebradas.png");
  asteroideImage = loadImage("asteroide.png");
  asteroideFogoImage = loadImage("asteroideFogo.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(80);

 //fundoMovimento = createSprite(width / 2, height / 2, width, height);
//  fundoMovimento.addImage("background", bg_img);

  nave = createSprite(windowWidth / 2 - 600, windowHeight - 300, 30, 30);
  nave.addImage(nave_img);
  nave.scale = 0.5;

 
obstacles = new Group();
  rectMode(CENTER);
  textSize(15);

  vida = 3;
}

function draw() {
  
  background(0); // Muda o fundo para preto para diferenciar da imagem de fundo


  // Movimento do fundo
// console.log(fundoMovimento.position.x)
  
 // fundoMovimento.velocityX = -12;
 // if (fundoMovimento.position.x < width / 2 - 400) {
//    fundoMovimento.position.x = width + width / 2 ;
//  }
  textSize(30);
  fill('white');
  text("Vidas restantes : "+ vida, windowWidth / 2 - 700, windowHeight / 4 - 50)

  nave.velocityY = forcaV;

  if (nave.isTouching(obstacles)){
    vida = vida - 1;

  }
  

  if (keyIsDown(UP_ARROW)) {
    nave.y = nave.y - 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    nave.y = nave.y + 5;
  }
   if (keyIsDown(LEFT_ARROW)) {
    nave.x = nave.x - 5;
  }
   if (keyIsDown(RIGHT_ARROW)) {
    nave.x = nave.x + 5;
  }
  


  spawObstacles()
  drawSprites()

  
  
  
 
}
function spawObstacles(){
  if(frameCount % 60 === 0 ){
    var obstacle = createSprite(width + 50, random(20, height), 20 , 30)
    obstacle.velocityX = -6;

    var rand = Math.round(random(1,4));

    switch(rand ){
      case 1: obstacle.addImage(alienImage);
      break;
      case 2: obstacle.addImage(pedrasQImage);
      break;
      case 3: obstacle.addImage(asteroideImage);
      break;
      case 4: obstacle.addImage(asteroideFogoImage);
      break;
      default : break;

    }
    

  }
}


function windowResized(){
  resizedCanvas(windowWidth, windowHeight)
}
