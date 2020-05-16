function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  
  
}

function draw() {
  background(255,255,255); 
  for (i = 1000000;i>1;i++){
    raindrop = new Raindrop('green',random(10,50),random(10,50))
    raindrop.velocityY = 10
    raindrop.display()
    
    console.log("hi")

  } 
  drawSprites();
  
}