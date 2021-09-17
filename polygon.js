class Polygon{
    constructor(x,y,radius){
        this.radius=this.radius;
        var options={
            'restitution':0.1,
            'friction':0.5,
            'density':1.2
            }
    this.body=Matter.Bodies.circle(x,y,radius,options);
    this.image=loadImage("polygon.png")
    World.add(world,this.body)

    }
    display(){
    var pos=this.body.position
    push();
    imageMode(CENTER);
    image(this.image,pos.x, pos.y,40,40);
    pop();
    }
    }   