class ball
{
	constructor(x,y,r,color,options)
	{
		
		this.x=x;
		this.y=y;
		this.r=r;
		this.colour=color;

		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
        World.add(world, this.body);
        
	}
	display()
	{
		
			var ballpos=this.body.position;		
			ellipseMode(CENTER);
			fill(this.colour);
			ellipse(ballpos.x,ballpos.y,this.r)
				
	}

}