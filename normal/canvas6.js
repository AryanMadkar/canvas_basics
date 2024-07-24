var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");

function Ball(x, y, radius,dy,dx) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.dy = dy;
  this.dx = dx;
  let gravity = 1
  let friction = 0.2

  this.draw = function(){
    c.beginPath();
    c.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
    c.fillStyle = "white";
    c.fill();
    c.strokeStyle = "red";
    c.stroke();
  }
  this.update = function(){
    if(this.y+ this.radius >canvas.height){
      this.dy = -(this.dy*0.9) ;
    }
    else{
      this.dy += gravity;
    }
    this.y += this.dy; 
    this.draw();
  }
}

var  ballArray = [];
// let lion = new Ball(100,100,30,10,10);

for (let i = 0; i <=10; i++) {
  let radius = 30;
  let x = Math.random() * (innerWidth - radius* 2) + radius;
  let y = Math.random() * (innerHeight - radius *2) + radius;
  let dy = 2;
  let dx = 0
  ballArray.push(new Ball(x,y,radius,dy,dx))
  
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = 0; i < ballArray.length; i++) {
    ballArray[i].update();
    
  }
  // lion.update();
}
animate()