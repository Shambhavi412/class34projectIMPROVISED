class Pin {

    constructor (x,y){
  
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:1.5,
            density:1.2
        }
  
        //25 is radius of the image
        this.body = Bodies.circle (x,y,25,options);
      //  this.image = loadImage("ball1.png");
        World.add(world,this.body);
        this.radius = 25;
        this.array = [];
        this.image = loadImage("n pin.png");
        this.Visiblity = 255;
  
       }
    
    display(){
      if(this.body.speed<6.5)
      {
 var pos = this.body.position;
      var angle = this.body.angle;
     
       
    
    push();
    
    translate(pos.x,pos.y);
    rotate(angle);
    
    imageMode(CENTER);
    image(this.image,10,10,200,150);
  
    pop();


    }
      }
     
   
   
   remove()
   {
     if(this.body.speed>6.5)
     {
       console.log("its")
      World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        //this.array.push(this.body);
        //changeState = "removed"
        //image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      
     pop();
 
   }
    }

  
  try()
  {
    rect()
  }
}
 