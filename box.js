class Box {
    constructor(x,y,width,height) {
      var options = {
        'restitution':0.1,
        'friction':0.5,
      }

      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.Visibility=255
      World.add(world, this.body);
    }
    display(){
      fill("pink");
      //console.log(this.body.speed)
     if(this.body.speed<3){
      var pos =this.body.position;
      rect(pos.x, pos.y,this.width,this.height );
      rectMode(CENTER);
     }
     else{
      World.remove(world,this.body)
      push();
      this.Visibility=this.Visibility-5
      tint(255,this.Visibility)
      pop();
      }
    }
    score(){
      if(this.Visiblity<0 &&this.Visiblity>-1005){
       score++;
      }
    }
  }