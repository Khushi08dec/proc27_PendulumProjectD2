class String {
    constructor(bodyA, pointB){
        var options={
            bodyA : bodyA,
            pointB : pointB,
            stiffness: 0.08,
            length: 100
        }

        this.pointB = pointB
        this.string = Constraint.create(options) //variable created
        World.add(world, this.string) 

    }

    display(){
        if(this.string.bodyA){
        var pointA = this.string.bodyA.position
        var pointB = this.pointB
        
        strokeWeight(3)
        line(pointA.x, pointA.y, pointB.x, pointB.y)
        }
    }
}