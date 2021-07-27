class Praticles{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.x=x;
        this.y=y;
        this.body = Bodies.circle(x, y,this.r,options);
        this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        fill(color)
        rect(pos.x, pos.y, this.width, this.height);

      }
}



