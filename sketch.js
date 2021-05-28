const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {

}

function setup() {
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    object = new box(200, 200, 50, 50);
}

function draw() {
    background(backgroundImg);
    Engine.update(engine);

    object.diplay();

}