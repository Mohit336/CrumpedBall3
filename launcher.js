class launcher{
 constructor(body, anchor)
 {

    var options={
        bodyA:body,
        pointB:anchor,
        stiffenesss:0.001,
        length:10
      
      
       }
       this.bodyA=body;
       this.pointB=anchor;
       this.launcher=Constraint.create(options);
       World.add(world, this.launcher);
      
 }
 display()
 {
 

 if (this.launcher.bodyA) 
 {
     var pointA=this.bodyA.position;
     var pointB=this.pointB;

     strokeWeight(2);

     line(pointA.x, pointA.y, pointA.x, pointB.y);
 }

}
fly()
 {
  this.launcher.bodyA=null;

 }
 

 

 


 
}

 

 