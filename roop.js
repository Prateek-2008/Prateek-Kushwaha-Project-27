class Roop{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options= {
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.roop=Constraint.create(options);
        World.add(world,this.roop);

    }
    display(){
        var PointA= this.roop.bodyA.position;
        var PointB= this.roop.bodyB.position;
        strokeWeight(5);
        var Anchor1X=PointA.x;
        var Anchor1Y=PointA.y;

        var Anchor2X=PointB.x+this.offsetX;
        var Anchor2Y=PointB.y+this.offsetY;
        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    }





}
