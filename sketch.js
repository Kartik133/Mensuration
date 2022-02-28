var gameState = "select",selectShape,measurement,radius,heights,set,reset,x,y,cylinder;

function setup() {
  createCanvas(windowWidth,windowHeight);

  radius = createInput("0","number");
  heights = createInput("0","number");
  set = createButton("set");
  reset = createButton("reset");
  selectShape = createSelect();
  selectShape.option("None");
  selectShape.option("Square");
  selectShape.option("Recangle");
  selectShape.option("Triangle");
  selectShape.option("Circle");
  selectShape.option("Semicircle");
  selectShape.option("Parallelogram");
  selectShape.option("Rhombus");
  selectShape.option("Trepezium");
  selectShape.option("Cube");
  selectShape.option("Cuboid");
  selectShape.option("Cylinder");
  selectShape.option("Cone");
  selectShape.option("Sphere");
  selectShape.option("Hemisphere");
  measurement = createSelect();
  measurement.option("None");
  measurement.option("Perimeter");
  measurement.option("Area");
  measurement.option("T.S.A");
  measurement.option("C.S.A");
  measurement.option("Volume");
  

  radius.position((width/2)-50,(height/2)-40);
  heights.position((width/2)-50,(height/2)-10);
  set.position((width/2)-50,(height/2)+20);
  reset.position((width/2)-50,(height/2)+70);
}

function draw() {
  background(0);

  if(gameState==="select") {
    radius.hide();
    heights.hide();
    reset.hide();

    set.mousePressed(()=>{
      gameState = x;
    });
  }

  if(gameState==="cv") {
    radius.show();
    heights.show();
    set.show();
    reset.hide();
   
    text("radius",(width/2)-100,(height/2)-20);
    text("height",(width/2)-100,(height/2)+10);

    set.mousePressed(()=>{
      x = int(radius.value());
      y = int(heights.value());
      gameState = "cva";
    });
  }
  
  if(gameState==="cva"){
    radius.hide();
    heights.hide();
    set.hide();
    reset.show();

    cylinderVol(x,y);

    reset.mousePressed(()=>{
      gameState = "cc";
      radius.value(0);
      heights.value(0);
    });
  }

  if(gameState==="cc") {
    radius.show();
    heights.show();
    set.show();
    reset.hide();
   
    text("radius",(width/2)-100,(height/2)-20);
    text("height",(width/2)-100,(height/2)+10);

    set.mousePressed(()=>{
      x = int(radius.value());
      y = int(heights.value());
      gameState = "cca";
    });
  }

  if(gameState==="cca"){
    radius.hide();
    heights.hide();
    set.hide();
    reset.show();

    cylinderCSA(x,y);

    reset.mousePressed(()=>{
      gameState = "ct";
      radius.value(0);
      heights.value(0);
    });
  }

  if(gameState==="ct") {
    radius.show();
    heights.show();
    set.show();
    reset.hide();

    text("radius",(width/2)-100,(height/2)-20);
    text("height",(width/2)-100,(height/2)+10);

    set.mousePressed(()=>{
      x = int(radius.value());
      y = int(heights.value());
      gameState = "cta";
    });
  }

  if(gameState==="cta"){
    radius.hide();
    heights.hide();
    set.hide();
    reset.show();

    cylinderTSA(x,y);

    reset.mousePressed(()=>{
      gameState = "cv";
      radius.value(0);
      heights.value(0);
    });
  }
}

function cylinderVol(r,h) {
  noStroke();
  fill(255);
  text(22/7*r*r*h,(width/2)-50,(height/2)+40);
}

function cylinderCSA(r,h) {
  noStroke();
  fill(255);
  text(2*22/7*r*h,(width/2)-50,(height/2)+40);
}

function cylinderTSA(r,h) {
  noStroke();
  fill(255);
  text(2*22/7*r*(r+h),(width/2)-50,(height/2)+40);
}

function coneVol(r,h) {
  noStroke();
  fill(255);
  text(1/3*22/7*r*r*h,(width/2)-50,(height/2)+40);
}

function coneCSA(r,l) {
  noStroke();
  fill(255);
  text(22/7*r*l,(width/2)-50,(height/2)+40);
}

function coneTSA(r,l) {
  noStroke();
  fill(255);
  text(22/7*r*(r+l),(width/2)-50,(height/2)+40);
}