var currscreen;
var playbutton,playbuttonimg;
var accName = "home"
var curAcc = "home"
function preload () {
 playbuttonimg  = loadImage("./Images/playbutton2x.png")   

}
function setup(){
createCanvas(windowWidth,windowHeight);
    currscreen = "home"
    playbutton = createSprite(windowWidth/2,windowHeight/2,50,50)
   playbutton.addImage(playbuttonimg);

}

function draw(){
background(0,0,0)
if (mousePressedOver(playbutton)){
login()
}
drawSprites();
}

function login(){

playbutton.visible = false
var text = createElement("h3")
text.html("Name")
text.position(windowWidth/2,windowHeight/2-10)
name = createInput(" ")
name.position(windowWidth/2,windowHeight/2) 
accName = name.value()
Acchandle.newAcc(accName)

function checkName(bool){
if (bool == true){
  curAcc = account.new(accName)
}else{
warn = createElement("h3")
warn.position(windowWidth/2,windowHeight+25)
warn.html("Username is already taken")

}
}



} 


function lobbysearch(){

}