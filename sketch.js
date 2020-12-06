//Create variables here
var dog;
var happyDog;
var database;
var foodS;
var foodStock;

var dogImage;
var dogimage1;

function preload()
{
  //load images here
  dogImage = loadImage("dogImg.png");
  dogImage1 = loadImage("dogImg1.png");
  
}

function setup() {
  createCanvas(500, 500);
  
  // creating a  dog
  dog = createSprite(250,250,20,20);
  dog.addImage(dogImage);
  dog.addImage(dogImage1);

  database = firebase.database();

  foodStock = database.ref("Food");
  foodStock.on("value",readStock);
  
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foods);
  dog.addImage(dogImage1);
}

//function to read values from database
function readStock(data){
foods = data.val();
}

// functions to write values in database
function writeStock(x){

  database.ref("/").update({

  Food : x
  })

  drawSprites();
  //add styles here

}


}
