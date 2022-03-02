var  asher,joesph ,tinko ,tobro, obro, ihaero, bukato, luke, chaser ;
var the_guns , warden_house, glitter_moon, poison, Anti_Poison, the_1_and_the_0 , the_prison_of_terror, gloomy_night;

function preload(){
    and_alsoImg = loadImage("assets/and_also.png")
    byImg = loadImage("assets/by.png")
    eachImg = loadImage("assets/each.png")
    himImg = loadImage("assets/him.png")
    killedImg = loadImage("assets/killed.png")
    perImg = loadImage("assets/per.png")
    soldImg = loadImage("assets/sold.png")
    wereImg = loadImage("assets/were.png")
    //holaSound = loadSound("assets/hola.mp3")

}

function setup(){
createCanvas(400,400);

asher = createSprite(20,50,10,10);
asher.shapeColor="orange";

chaser =createSprite(10,40,10,10);
chaser.shapeColor="purple";


duplicatechaser =createSprite(chaser.x,chaser.y,10,10);
duplicatechaser.shapeColor="red";  


}


function draw(){
background("red");
//holaSound.play();
ihaerocharacter();
joesphcharacter();
lukecharacter();
bukatocharacter();
tobrocharacter();
obrocharacter();
tinkocharacter();
asher.x=chaser.x
asher.y=chaser.y

chaser.velocityX=3
if(keyDown("up")){
    asher.y=asher.y-3
}

if(keyDown("down")){
    asher.y=asher.y+3
}
if(keyDown("right")){
    asher.x=asher.x+3
}
if(keyDown("left")){
    asher.x=asher.x-3
}
drawSprites();
}

function ihaerocharacter(){
    if(frameCount%110 === 0){
    ihaero = createSprite(50,200,10,10);
    ihaero.addImage(soldImg)
    ihaero.scale=0.5;
    ihaero.y = Math.round(random(10,250))
    ihaero.shapeColor="black";
    ihaero.velocityX=5;
    }
}

function joesphcharacter(){
    if(frameCount%110 === 0){
    joesph = createSprite(380,180,10,10);
    joesph.addImage(byImg)
    joesph.scale=0.3;
    joesph.x= Math.round(random(10,250))
    joesph.shapeColor="orange";
    joesph.velocityX=-3;
    }
}

function lukecharacter(){
    if(frameCount%110 === 0){
    luke = createSprite(50,200,10,10);
    luke.addImage(and_alsoImg)
    luke.scale=0.1;
    luke.y = Math.round(random(10,250))
    luke.shapeColor="lightgreen";
    luke.velocityY=5;
    }
}


function bukatocharacter(){
    if(frameCount%110 === 0){
    bukato = createSprite(300,50,10,10);
    bukato.addImage(eachImg)
    bukato.scale=0.1;
    bukato.y = Math.round(random(10,250))
    bukato.shapeColor="purple";
    bukato.velocityY=5;
    }
}

function obrocharacter(){
    if(frameCount%110 === 0){
    obro = createSprite(224,30,10,10);
    obro.addImage(killedImg)
    obro.scale=0.1;
    obro.y = Math.round(random(10,250))
    obro.shapeColor="darkgreen";
    obro.velocityY=5;
    }
}

function tobrocharacter(){
    if(frameCount%110 === 0){
    tobro = createSprite(200,50,10,10);
    tobro.addImage(wereImg)
    tobro.scale=0.3;
    tobro.y = Math.round(random(10,250))
    tobro.shapeColor="yellow";
    tobro.velocityY=5;
    }
}

function tinkocharacter(){
    if(frameCount%110 === 0){
    tinko = createSprite(250,40,10,10);
    tinko.addImage(himImg)
    tinko.scale=0.1;
    tinko.y = Math.round(random(10,250))
    tinko.shapeColor="blue";
    tinko.velocityY=5;
    }
}
