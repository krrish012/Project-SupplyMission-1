var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody,ground

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageBody = createSprite(width/2 , 200 , 5 );

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;
	//packageSprite.x = packageBody.position.x;
	//packageSprite.y = packageBody.position.y;
	packageSprite.visible = false;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	//groundSprite=createSprite(width/2, height-35, width,10);
	//groundSprite.shapeColor=color(255);
	

	//Create a Ground
	ground = createSprite(width/2, 650, width, 10 );
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  packageBody.visible = false;
  packageIMG.visible = false;

  //packageSprite.x= packageBody.position.x 
  //packageSprite.y= packageBody.position.y 

  keyPressed();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	packageSprite.visible = true;
	packageSprite.y = helicopterSprite.y+5;
	packageSprite.velocityY = 2;
	packageSprite.collide(ground);
  }
}



