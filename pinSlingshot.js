class pinSlingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.06,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
        }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
                strokeWeight(7);
                line(pointA.x, pointA.y, pointB.x, pointB.y);
                //image(this.sling3,pointA.x -30, pointA.y -10,15,30);
            
            pop();
        }
    }
    
}