var gameState = "select",selectShape,measurement,radius,heights,lengths,slength,widths,set,reset,x,y;

function setup() {
  createCanvas(windowWidth,windowHeight);

  radius = createInput("0","number");
  heights = createInput("0","number");
  widths = createInput("0","number");
  lengths = createInput("0","number");
  slength = createInput("0","number");
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
  reset.position((width/2)-50,(height/2)+20);
  selectShape.position((width/2)-50,(height/2)-40);
  measurement.position((width/2)-50,(height/2)-10);
}

function draw() {
  background(0);
  console.log(gameState,"CylinderVolume");

  if(gameState==="select") {
    radius.hide();
    heights.hide();
    widths.hide();
    lengths.hide();
    slength.hide();
    reset.hide();
    selectShape.show();
    measurement.show();

    set.mouseReleased(()=>{
      var xxx = selectShape.value() + measurement.value()
      gameState = xxx;
    });
  }else {
    selectShape.hide();
    measurement.hide();
   }

  if(gameState==="CylinderVolume") {
    radius.show();
    heights.show();
    set.show();
    widths.hide();
    lengths.hide();
    slength.hide();
    reset.hide();
   
    text("radius",(width/2)-100,(height/2)-20);
    text("height",(width/2)-100,(height/2)+10);

    set.mouseReleased(()=>{
      x = int(radius.value());
      y = int(heights.value());
      gameState = "cva";
    });
  }
  
  if(gameState==="cva"){
    radius.hide();
    heights.hide();
    widths.hide();
    lengths.hide();
    slength.hide();
    set.hide();
    reset.show();

    cylinderVol(x,y);

    reset.mouseReleased(()=>{
      gameState = "CylinderVolume";
      radius.value(0);
      heights.value(0);
    });
  }

  if(gameState==="CylinderC.S.A") {
    radius.show();
    heights.show();
    widths.hide();
    lengths.hide();
    slength.hide();
    set.show();
    reset.hide();
   
    text("radius",(width/2)-100,(height/2)-20);
    text("height",(width/2)-100,(height/2)+10);

    set.mouseReleased(()=>{
      x = int(radius.value());
      y = int(heights.value());
      gameState = "cca";
    });
  }

  if(gameState==="cca"){
    radius.hide();
    heights.hide();
    set.hide();
    widths.hide();
    lengths.hide();
    slength.hide();
    reset.show();

    cylinderCSA(x,y);

    reset.mouseReleased(()=>{
      gameState = "CylinderC.S.A";
      radius.value(0);
      heights.value(0);
    });
  }

  if(gameState==="CylinderT.S.A") {
    radius.show();
    heights.show();
    set.show();
    widths.hide();
    lengths.hide();
    slength.hide();
    reset.hide();

    text("radius",(width/2)-100,(height/2)-20);
    text("height",(width/2)-100,(height/2)+10);

    set.mouseReleased(()=>{
      x = int(radius.value());
      y = int(heights.value());
      gameState = "cta";
    });
  }

  if(gameState==="cta"){
    radius.hide();
    heights.hide();
    set.hide();
    widths.hide();
    lengths.hide();
    slength.hide();
    reset.show();

    cylinderTSA(x,y);

    reset.mouseReleased(()=>{
      gameState = "CylinderT.S.A";
      radius.value(0);
      heights.value(0);
    });
  }
  
  if(gameState==="ConeVolume") {
    radius.show();
    heights.show();
    set.show();
    widths.hide();
    lengths.hide();
    slength.hide();
    reset.hide();
   
    text("radius",(width/2)-100,(height/2)-20);
    text("height",(width/2)-100,(height/2)+10);

    set.mouseReleased(()=>{
      x = int(radius.value());
      y = int(heights.value());
      gameState = "cova";
    });
  }
  
  if(gameState==="cova"){
    radius.hide();
    heights.hide();
    set.hide();
    widths.hide();
    lengths.hide();
    slength.hide();
    reset.show();

    coneVol(x,y);

    reset.mouseReleased(()=>{
      gameState = "ConeVolume";
      radius.value(0);
      heights.value(0);
    });
  }

  if(gameState==="ConeC.S.A") {
    radius.show();
    heights.show();
    widths.hide();
    lengths.hide();
    slength.show();
    set.show();
    reset.hide();
   
    text("radius",(width/2)-100,(height/2)-20);
    text("height",(width/2)-100,(height/2)+10);

    set.mouseReleased(()=>{
      x = int(radius.value());
      y = int(heights.value());
      z = int(slength.value());
      gameState = "coca";
    });
  }

  if(gameState==="coca"){
    radius.hide();
    heights.hide();
    widths.hide();
    lengths.hide();
    slength.hide();
    set.hide();
    reset.show();

    console.log(slength.value(),z);

    if(z !== 0) {
      coneCSA(x,z);
    }else {
       coneCSAA(x,y);
     }

    reset.mouseReleased(()=>{
      gameState = "ConeC.S.A";
      radius.value(0);
      heights.value(0);
    });
  }

  if(gameState==="ConeT.S.A") {
    radius.show();
    heights.show();
    widths.hide();
    lengths.hide();
    slength.show();
    set.show();
    reset.hide();

    text("radius",(width/2)-100,(height/2)-20);
    text("height",(width/2)-100,(height/2)+10);

    set.mouseReleased(()=>{
      x = int(radius.value());
      y = int(heights.value());
      z = int(slength.value());
      gameState = "cota";
    });
  }

  if(gameState==="cota"){
    radius.hide();
    heights.hide();
    widths.hide();
    lengths.hide();
    slength.hide();
    set.hide();
    reset.show();

    if(z !== 0) {
      coneTSA(x,z);
    }else {
       coneTSAA(x,y);
     }
    

    reset.mouseReleased(()=>{
      gameState = "ConeT.S.A";
      radius.value(0);
      heights.value(0);
    });
  }
}

function cylinderVol(r,h) {
  noStroke();
  fill(255);
  text(22/7*r*r*h,(width/2)-50,height/2);
}

function cylinderCSA(r,h) {
  noStroke();
  fill(255);
  text(2*22/7*r*h,(width/2)-50,height/2);
}

function cylinderTSA(r,h) {
  noStroke();
  fill(255);
  text(2*22/7*r*(r+h),(width/2)-50,height/2);
}

function coneVol(r,h) {
  noStroke();
  fill(255);
  text(1/3*22/7*r*r*h,(width/2)-50,height/2);
}

function coneCSA(r,l) {
  noStroke();
  fill(255);
  text(22/7*r*l,(width/2)-50,height/2);
}

function coneTSA(r,l) {
  noStroke();
  fill(255);
  text(22/7*r*(r+l),(width/2)-50,height/2);
}

function coneCSAA(r,h) {
  noStroke();
  fill(255);
  text(22/7*r*(sqrt((h*h+r*r))),(width/2)-50,height/2);
}

function coneTSAA(r,h) {
  noStroke();
  fill(255);
  text(22/7*r*(r+(sqrt((h*h+r*r)))),(width/2)-50,height/2);
}