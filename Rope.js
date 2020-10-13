  
class Rope
{
    constructor(bodyA,bodyB,offsetX,offsetY)
    {
        this.offsetX=offsetX;
        this.offsetY=offsetY;
       var options=
       {
           bodyA,
           bodyB,
           
           PointB:{x:this.offsetX, y:this.offsetY}
       }
      this.bodyA1=bodyA;
      this.bodyB1=bodyB;
      this.chain=Constraint.create(options);
      World.add(world,this.chain);
      
    }
    display()
    {
        
        strokeWeight(4);
        stroke("Black");
        line(this.bodyA1.position.x,this.bodyA1.position.y,this.bodyB1.position.x-this.offsetX,this.bodyB1.position.y);    
    }
}