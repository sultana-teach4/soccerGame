class Ball {
    constructor(x, y) {
      var options = {
       // 'density':1.0,
        //'friction': 1.0,
        'restitution':1.0,
        
      };
      this.body = Bodies.circle(x, y, 50, options);
   //this.width = 70;
     // this.height = 70;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
     pos.x = this.body.position.x;
     pos.y = this.body.position.y;
      //var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      //rotate(angle);
      strokeWeight(3);
      stroke('blue')
      fill('red')
      ellipseMode(CENTER)
      ellipse(0, 0, 70, 70);
      pop();
    };
  };
  