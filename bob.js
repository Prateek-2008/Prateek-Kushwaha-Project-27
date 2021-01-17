class Bob{
    constructor(x,y,diameter){
        
        var options= {
            isStatic:true
           
        }
        
        this.body= Bodies.circle(x,y,diameter,options)
        this.diameter=diameter;
        //this.image= loadImage("paper.png");
        World.add(world,this.body);
  
       

    }

    display(){
        var pos= this.body.position;
        var angle= this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        //ellipseMode(RADIUS);
        //strokeWeight(3);
        //stroke("blue");
        fill("red"); 
        ellipse(0,0,this.diameter,this.diameter)
        pop();
    }

    
}

