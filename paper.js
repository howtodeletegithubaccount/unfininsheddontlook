class Paper
{
    constructor(x, y, r) {

var options= {
    isStatic: false,
    restitution: 0.3,
    friction: 0.5,
    density: 1.2
}
this.body = Matter.Bodies.circle(x, y, 20);
this.r = 20
World.add(world, this.body);

}

display() {

var pos =this.body.position

var angle = this.body.angle;
push();

translate(pos.x, pos.y);
rotate(angle);

fill("purple")
ellipse(0, 0, this.r)
pop();

}

}
