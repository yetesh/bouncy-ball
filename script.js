// Code goes here

var context;
var dx= 4;
var dy=4;
var y=150;
var x=10;

function init()
{
  var myCanvas=document.getElementById('myCanvas');
  console.log(10);
  context= myCanvas.getContext('2d');
  setInterval(draw,10);
}

function randomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }

function draw()
{
  //console.log(x,y);
  //document.getElementById('myCanvas').style.backgroundColor='black';
  context.clearRect(0,0, 300,300);
  //dx=randomInt(0,4);
  //dy=randomInt(0,4);
  // var d = document.getElementById('ball');
  // d.style.left = x;
  // d.style.top =  y;
  
  context.beginPath();
  context.fillStyle="#ff0000";
  // // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
  context.arc(x,y,20,0,Math.PI*2,true);
  context.closePath();
  context.fill();
  // Boundary Logic
if( x<0 || x>300) dx=-dx; 
if( y<0 || y>300) dy=-dy; 
x+=dx; 
y+=dy;
}
