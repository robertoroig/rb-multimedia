/** SIMULACIÓN - Roberto Roig Pedro - 2019

    4 - MUELLE
      "Ejercicio aplicación de fuerzas de un muelle"
*/
var inicio = null,
    extremo = null;
var xRep = 0,
  x = 0,
  a = 0,
  v = 0;
var g = 0,
  k = 0,
  kam = 0,
  masa = 0;
var dt = 0,
t = 0;
var i = 0;
var canvas = null;

function setup() {
    createCanvas(windowWidth, windowHeight);
    init();
}

function init() {
  var l;
  
  i=0;
  xRep = windowHeight/3;
  k = 0.5;
  kam = 0.2;
  masa = 10;
  g = 9.8;
  dt = 0.5;
  t = dt;
  l = (k*xRep + masa*g)*k;
  inicio = createVector(windowWidth/2, 0);
  extremo = createVector(windowWidth/2, l);
  x = extremo.y;
}

function draw() {
  background(240);
  
  // Dibujar base
  strokeWeight(20);
  line(windowWidth/2 -50, 0, windowWidth/2 +50, 0);
  
  //Dibujar muelle
  strokeWeight(2);
  var siguiente = createVector(inicio.x, inicio.y+20);
  var h = 70;
  var ancho = 20;
  var alto = (extremo.y - inicio.y)-40;
  
      //Dibujar principio
  line(inicio.x, inicio.y, siguiente.x, siguiente.y);
  line(siguiente.x, siguiente.y, siguiente.x - ancho/2, siguiente.y + alto/h);
  siguiente.x -= ancho/2;
  siguiente.y += alto/h;
  
      //Dibujar cuerpo del muelle
  for (var i = 0; i < h-4; i++) {
    if(i % 2 == 0) {
      line(siguiente.x, siguiente.y, siguiente.x + ancho, siguiente.y + alto/h);
      siguiente.x += ancho;
    }
    else {
      line(siguiente.x, siguiente.y, siguiente.x - ancho, siguiente.y + alto/h);
      siguiente.x -= ancho;
    }
    siguiente.y += alto/h;
  }
      //Dibujar final
  line(siguiente.x, siguiente.y, siguiente.x + ancho/2, siguiente.y + alto/h);
  line(siguiente.x + ancho/2, siguiente.y + alto/h, extremo.x, extremo.y);
  
  //Dibujar cuadrado
  strokeWeight(2);
  rectMode(CENTER);
  rect(extremo.x, extremo.y, 5*masa, 5*masa);
  update();
  
}

function update() {
  i++;
  integrador();
  t += dt;
}

function integrador() {
  var force;
  force = masa*g -k*(extremo.y - xRep)-(kam*v);
  
  a = force/masa;
  v += a*dt;
  x += v*dt;
  
  extremo.y = x;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight, true);
  var l;
  
  init();
}
