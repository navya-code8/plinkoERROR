const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var plinko1, plinko2, plinko3, plinko4, plinko5, plinko6, plinko7, plinko8
var plinko9, plinko10,plinko11, plinko13, plinko14, plinko15, plinko16, plinko17;
var division1, division2, division3, division4, division5, division6, division7;
var plink18, plinko19, plinko20, plinko21, plinko22, plinko23, plinko24, plinko25;

function setup() {
  createCanvas(400,600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200,590,400,30)
/*  division1 = new Ground(5,430, 5,300)
  division7 = new Ground(397,430,5,300)
  division2 = new Ground(70, 430, 5,300)
  division3 = new Ground(135, 430, 5,300)
  division4 = new Ground(200, 430, 5,300)
  division5 = new Ground(265, 430, 5,300)
  division6 = new Ground(330, 430, 5,300)

  plinko1 = new Plinko(45,50)
  plinko2 = new Plinko(90,50)
  plinko3 = new Plinko(135,50)
  plinko4 = new Plinko(180,50)
  plinko5 = new Plinko(225,50)
  plinko6 = new Plinko(270,50)
  plinko7 = new Plinko(315,50)
  plinko8 = new Plinko(360,50)

  plinko9 = new Plinko(15,110)
  plinko10 = new Plinko(62,110)
  plinko11 = new Plinko(109,110)
  plinko12 = new Plinko(156,110)
  plinko13 = new Plinko(203,110)
  plinko14 = new Plinko(250,110)
  plinko15 = new Plinko(297,110)
  plinko16 = new Plinko(344,110)
  plinko17= new Plinko(391,110)

  plinko18 = new Plinko(45,170)
  plinko19 = new Plinko(90,170)
  plinko20 = new Plinko(135,170)
  plinko21 = new Plinko(180,170)
  plinko22 = new Plinko(225,170)
  plinko23 = new Plinko(270,170)
  plinko24 = new Plinko(315,170)
  plinko25 = new Plinko(360,170)

  plinko26 = new Plinko(15,230)
  plinko27 = new Plinko(62,230)
  plinko28 = new Plinko(109,230)
  plinko29 = new Plinko(156,230)
  plinko30 = new Plinko(203,230)
  plinko31 = new Plinko(250,230)
  plinko32 = new Plinko(297,230)
  plinko33 = new Plinko(344,230)
  plinko34= new Plinko(391,230)*/
  
}

var particles = [];
var plinkos = [];
var divisions = []

var divisionHeight = 300;




function draw() {
  background(0); 

  Engine.update(engine);
 
  ground.display();

 /* division1.display()
  division2.display()
  division3.display()
  division4.display()
  division5.display()
  division6.display()
  division7.display()
*/

for (var k = 0; k<=width; k+=80){
  //console.log("display")
  divisions.push(new Ground(k, height-divisionHeight/2, 10, divisionHeight))

}

for (var k = 0; k<=7; k++){
  //console.log("display")
  divisions[k].display();
  console.log("display")

}

for (var j = 40; j <=width; j+=50){
  plinkos.push(new Plinko(j,75))
}

for (var j = 15; j <=width; k+=50){
  plinkos.push(new Plinko(j,175));

}

for (var j = 0; j <=8; j++){
  plinkos[j].display();
}

for (var j = 8; j <=17; k++){
  plinkos[j].display();

}
  
 /* plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();

  plinko9.display();
  plinko10.display();
  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko14.display();
  plinko15.display();
  plinko16.display();
  plinko17.display();

  plinko18.display();
  plinko19.display();
  plinko20.display();
  plinko21.display();
  plinko22.display();
  plinko23.display();
  plinko24.display();
  plinko25.display();

  plinko26.display();
  plinko27.display();
  plinko28.display();
  plinko29.display();
  plinko30.display();
  plinko31.display();
  plinko32.display();
  plinko33.display();
  plinko34.display();
*/
  



  drawSprites();

  text(mouseX + ", "+mouseY, mouseX, mouseY)
}