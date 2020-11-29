class Box{
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width
        this.height = height
        World.add(myWorld,this.body);
    }
    display(){
        rectMode(CENTER);
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        rect(0,0,this.width,this.height);
        pop()  
    }
} 
