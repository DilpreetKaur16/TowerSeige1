class Block{
    constructor(x,y,width,height){
        this.body= Bodies.rectangle(x,y,width,height);
        this.width=width;
        this.height=height;
        World.add( world, this.body);
    }
    display(){
        push();
        rectMode(CENTER)
        translate(this.body.position.x, this.body.position.y)
       strokeWeight(2);
       stroke("brown")
        rect(0,0, this.width, this.height);
        pop();
    }
}