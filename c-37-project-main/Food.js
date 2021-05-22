class Food  {
    constructor(){
       
        //this.lastFed
        this.image=loadImage("Milk.png")
    }
    static getFoodStock(data){
        foodS=data.val()
          
    }
    static updateFoodStock(x){
        database.ref('/').update({FoodN:x})
    }   
    
    display(){

        var x=700,y=100;
      
      imageMode(CENTER);
      console.log(feed)
      
      if(feed!=0){
        for(var i=0;i<feed;i++){
          if(i%10==0){
            x=700;
            y=y+50;
          }
          image(this.image,x,y,50,50);
          x=x+30;
        }
      }
    }
}