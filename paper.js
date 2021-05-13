class Paper {

    constructor(x,y) {
        //this.x = x;
        //this.y = y;
        this.radius = 30;

        var options= {
            isStatic:false,
            restitution:0.3,
            friction:1.0,
            density:1.2
        }
        
        this.body = Bodies.circle(x,y,30,options);
        this.image = loadImage('paper.png');

        World.add(world, this.body);

    }
 
    display() {
   push();
   translate(this.body.position.x,this.body.position.y);
   rotate(this.body.angle);
   imageMode(RADIUS);
   fill('white');
   image(this.image,0,0,60,60);
  
   pop();  
        
    }
}