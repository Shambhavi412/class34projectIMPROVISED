class Ball {

    constructor (x,y){
  
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
  
        //25 is radius of the image
        this.body = Bodies.circle (x,y,25,options);
      //  this.image = loadImage("ball1.png");
        World.add(world,this.body);
        this.radius = 25;
        this.image = loadImage("ball.png")
 // this.trajectory = [];
    }
  
    display(){
  
        var pos = this.body.position;
        var angle = this.body.angle;
       
        push();
        
        translate(pos.x,pos.y);
        rotate(angle);
        
        imageMode(CENTER);
       image(this.image,0,0,110,110);
  
       pop();
  
      }
    
    }
  
  