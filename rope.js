class Rope{
    constructor(body1, pointB){
        var options={
            length: 200,
            stiffness: 0.8,
            bodyA: body1,
            pointB: pointB
            
        }
        this.Rope = Constraint.create(options);
        World.add(world, this.Rope);
    }
    display(){
        var pointA = this.Rope.bodyA.position;
        var pointB = this.Rope.pointB;

        strokeWeight(5);

        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}