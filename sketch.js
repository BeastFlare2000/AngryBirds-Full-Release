const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var abcdefghijklmnopqrstuvwxyz = []
var engine, world;
var box1, pig1,pig2;
var backgroundImg,platform;
var birdMommy, slingshot;
var bg = 'sprites/bg.png'
var gameState = "onSling";
var score = 0;
var birdBoy
var birdGirl
var birdBaby

var iam;
var birdSelectSound,birdFlySound,pigSnortSound;

function preload() {
   iam = loadImage(bg)
   birdFlySound=loadSound("sounds/bird_flying.mp3")
    pigSnortSound=loadSound("sounds/pig_snort.mp3")
    birdSelectSound=loadSound("sounds/bird_select.mp3")
getTime();
}

function setup(){
    var canvas = createCanvas(1200,400);+
    canvas.position(15, 70);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig2 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    birdMommy = new Bird(200,50);
    birdBoy = new Bird(150,225);
    birdGirl = new Bird(100,225);
    birdBaby = new Bird(125,200);

    abcdefghijklmnopqrstuvwxyz.push(birdBaby)
    abcdefghijklmnopqrstuvwxyz.push(birdGirl)
    abcdefghijklmnopqrstuvwxyz.push(birdBoy)
    abcdefghijklmnopqrstuvwxyz.push(birdMommy)

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(birdMommy.body,{x:200, y:50});

}


function draw(){
   
    if(backgroundImg){
   
    background(backgroundImg);
    textFont("Impact")
    textSize(25)
    fill ('red')   
    text('Score : '+ score,900,50)
    

}


    Engine.update(engine);
    //strokeWeight(4);
    
    
    
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    birdMommy.display();
    platform.display();
    //log6.display();
    slingshot.display();    
    birdBoy.display();
    birdGirl.display();
    birdBaby.display();

pig1.score();
pig2.score()


}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(abcdefghijklmnopqrstuvwxyz[abcdefghijklmnopqrstuvwxyz.length - 1].body,{x: mouseX,y: mouseY});
        Matter.Body.applyForce(abcdefghijklmnopqrstuvwxyz[abcdefghijklmnopqrstuvwxyz.length - 1].body,abcdefghijklmnopqrstuvwxyz[abcdefghijklmnopqrstuvwxyz.length - 1].body.position,{x: 5,y: -5})
      return false;
    }

}

function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
    abcdefghijklmnopqrstuvwxyz.pop()
    birdFlySound.play()
return false
}

function keyPressed(){
    if(keyCode === 32&&gameState==='launched'){
    if(abcdefghijklmnopqrstuvwxyz.length>=0){  
Matter.Body.setPosition(abcdefghijklmnopqrstuvwxyz[abcdefghijklmnopqrstuvwxyz.length - 1].body,{x: 200,y: 50})    
slingshot.attach(abcdefghijklmnopqrstuvwxyz[abcdefghijklmnopqrstuvwxyz.length - 1].body);
//bird.trajectory =[];
birdSelectSound.play()
gameState = "onsling";      
}
}
}
async function getTime(){
var response  = await fetch('http://worldclockapi.com/api/json/est/now')
var responceaz = await response.json()
//console.log(responceaz)
var responseaq = responceaz.currentDateTime
//console.log(responseaq)
var responceq = responseaq.slice(11,16)
//console.log(responceq)
if(responceq>=07&&responceq<=17){
    bg = 'sprites/bg.png'
}else{
    bg = 'sprites/bg2.jpg'
}
backgroundImg = loadImage(bg);
console.log(backgroundImg)



























}

