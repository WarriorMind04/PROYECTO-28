class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.launch = Constraint.create(options);
        this.image1=loadImage("Sprites/sling1.png");
        this.image2=loadImage("Sprites/sling2.png");
        this.image3=loadImage("Sprites/sling3.png");
        World.add(world, this.launch);
    }

    fly(){
        this.launch.bodyA = null;
    }

    display(){
        image(this.image1, 200, 20);
        image(this.image2, 170, 20);
        if(this.launch.bodyA){
            var pointA = this.launch.bodyA.position;
            var pointB = this.pointB;
            stroke("orange");
            push();
            if (pointA.x<220)
            {
                image(this.image3, pointA.x-20, pointA.y+5, 30, 15)
                line(pointA.x-25, pointA.y, pointB.x, pointB.y)
                line(pointA.x-25, pointA.y, pointB.x+30, pointB.y-5)
                strokeWeight(7);
            }
            pop();
            strokeWeight(4);
            //line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}