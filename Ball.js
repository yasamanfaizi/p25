class Ball {
    constructor(x,y,radius) {
      var options = {
          restitution: 0.2, 
          friction: 0.4,
          density: 1,
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.image = loadImage("paper.png")
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      push()
      imageMode(CENTER)
      var pos =this.body.position;
      image(this.image, pos.x, pos.y, this.radius*4, this.radius*4);
      pop()
    }
  }