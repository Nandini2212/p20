var car,wall,speed,weight
function setup() {
  createCanvas(1600,400);
 car= createSprite(50, 200, 50, 50);
 car.shapeColor="white";
 wall=createSprite(1600,200,60,150);
 speed=random(55,90);
 weight=random(400,1500);
 car.velocityX=speed;

}

function draw() {
  background(0);  
  if(wall.x-car.x<=wall.width/2+car.width/2){
    car.velocityX=0;
    var d=0.5*weight*speed*speed/(22500);
    if(d>180){
      car.shapeColor="red";

    }
    else if(d<180&&d>100){
      car.shapeColor="yellow";
    }
    else{
      car.shapeColor="green";
    }
  }
  drawSprites();
}