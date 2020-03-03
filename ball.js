class Ball {
    constructor(x, y, radius){
        this.x = x;
        this.y = y;
        var options = {
            'weight': 1.3
        }
    
        this.body = Bodies.circle(x,y,radius,options),
        this.radius = radius,
        World.add(world, this.body)
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("blue");
        ellipse(pos.x, pos.y, this.radius);
    }

    
}
