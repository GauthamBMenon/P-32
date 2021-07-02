const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour
var bg ;

function preload() {
    getdata()
    // create getBackgroundImg( ) here
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

if (backgroundImg)
background(backgroundImg)

    Engine.update(engine);

if (hour >=12){
    text ("time="+hour%12 + "pm",50,100)
}
else if (hour==0){
    text ("time=12AM",100,100)
}
else{
    text ("time="+hour%12 + "am",50,100)
}
}

async function getdata(){
var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responejson=await response.json()
    var datetime=responejson.datetime
 hour = datetime.slice (11,13)
if (hour >=06 && hour<=18){
    bg="sunrise1.png"

}
else{ 
    bg="sunset7.png"
}
backgroundImg=loadImage(bg)
}

    // write code to fetch time from API

    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here


