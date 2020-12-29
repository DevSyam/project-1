var b1, b2, b3,b4,b5,b6,b7,b8,b9;

function setup() {
  createCanvas(400, 400);
  b1=new Building();
  b1.position=4;
  b1.floors=23;
  
  
  b2=new Building();
  b2.position=1;
  b2.floors=12;

  b3 =new Building();
  b3.position=3;
  b3.floors=32;
  
  b4=new Building();
  b4.position=2;
  b4.floors=23;
  
  b5=new Building();
  b5.position=5;
  b5.floors=12;

  b6 =new Building();
  b6.position=6;
  b6.floors=32;
  
  b7 =new Building();
  b7.position=7;
  b7.floors=32;
  
  b8=new Building();
  b8.position=8;
  b8.floors=23;
  
  b9=new Building();
  b9.position=9;
  b9.floors=12;

}

function draw() {
  background(0);
  b1.display();
  fill(216,191,216);
  b2.display();
  fill(115,194,251);
  b3.display();
  fill(50,205,50);
  b4.display();
  fill(63,224,208);
  b5.display();
  fill(147,112,219);
  b6.display();
  fill(240,128,128);
  b7.display();
  fill(255,105,180);
  b8.display();
  fill(165,42,42);
  b9.display();
  fill(255,222,173);
  
  fill(211,211,211);
  circle(350,70,40);
  
}