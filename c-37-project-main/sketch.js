var dog,dogimg,happyDog,database,foodS,foodStock,foodGr;
var button1,button2,milkimg;
var feed,lastFed,FeedTime
var bgimg

function preload()
{
  dogimg=loadImage("Dog.png")
  happyDog=loadImage("happydog.png")
  milkimg=loadImage("Milk.png")
  bgimg=loadImage("BG.jpg")
}

function setup() {
	createCanvas(1000, 500);
  database=firebase.database();
  dog=createSprite(250,250,10,10)
  
  dog.addImage(dogimg)
  dog.scale=0.3
  foodGr=new Food()
  button1=createButton('Feed')
  button2=createButton('Add Food')
  button1.position(500,500)
  button2.position(700,500)
  

}


function draw() {  
  background(46,138,87)
  foodStock=database.ref('FoodN')
  foodStock.on('value',(data)=>{foodS=data.val()})
 
//  foodGr.updateFoodStock(foodS)
  feed=foodS
  console.log(feed)
  foodGr.display()

  
   button1.mousePressed(()=>{
    dog.addImage(happyDog)
      lastFed=hour()
      foodS-=1
      
   if (foodS===0){
     foodS=0
   }
   Food.updateFoodStock(foodS)
  })
  button2.mousePressed(()=>{
    foodS += 1
    Food.updateFoodStock(foodS)
  })

    drawSprites();
  textSize(20)
  fill("red")
  text("Food: "+foodS,250,400)
  
  if (lastFed>=12){
    text("Last Feed : "+lastFed%12 + " PM",350,30)
  }
  else if (lastFed=0){
    text("Last Feed :12 AM",350,30)
  }
  else {
    text("Last Feed : "+lastFed + " AM",350,30)
  }
  if (lastFed===hour()+1){
    background(bgimg)
  }

}






