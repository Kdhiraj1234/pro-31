const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var divisions = [];
var plinkos = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  for(var k = 0; k <=width, k = k + 80 ) {
     divisions.push(new Division(k,height-divisionheight))
  }
 
}

function draw() {
  background(255,255,255);  
  drawSprites();
}