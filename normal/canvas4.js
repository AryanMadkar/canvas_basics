var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");

let mouse = {
  x: undefined,
  y: undefined,
};

window.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
  console.log(mouse);
});

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init()
})

function Circle(x, y, sx, sy, radius) {
  this.x = x;
  this.y = y;
  this.sx = sx;
  this.sy = sy;
  this.radius = radius;
  let mainspin = Math.round(Math.random()*10)
  var collorArray = [
    "#F8EDE3",
    "#DFD3C3",
    "#D0B8A8",
    "#8D493A",
    "#987D9A",
    "#EB5B00",
    "#B60071"
  ]

  var cr =
    "rgb(" +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    ")";
  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    // c.fillStyle = collorArray[mainspin];
    c.fillStyle = cr;
    c.fill();
    c.strokeStyle = "black";
    c.stroke();
  };

  this.update = function () {
    this.draw();
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.sx = -this.sx;
    } else if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.sy = -this.sy;
    }

    this.x += this.sx;
    this.y += this.sy;

    if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
      if (this.radius<30) {
        this.radius += 1 ;
      }
    }else if(this.radius>2){
      // this.radius -= 1 ;
        this.radius = radius
    }
    else if(this.radius == 40){
      this.radius -= 1 ;
    }
  };
}
var circlearra = [];

for (let i = 0; i < 300; i++) {
  let series = Math.random() * 10;
  var radius = series;
  var x = Math.random() * (innerWidth - radius * 2) + radius;
  var y = Math.random() * (innerHeight - radius * 2) + radius;
  var sx = (Math.random() - 0.5) * 10;
  var sy = (Math.random() - 0.5) * 10;
  circlearra.push(new Circle(x, y, sx, sy, radius));
}

function init() {
  circlearra = []; // Clear circles array
  for (let i = 0; i < 300; i++) {
    let series = Math.random() * 10;
    var radius = series;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var sx = (Math.random() - 0.5) * 10;
    var sy = (Math.random() - 0.5) * 10;
    circlearra.push(new Circle(x, y, sx, sy, radius)); // Add new circles to the array
  }
  animate(); // Start the animation loop again
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  for (var i = 0; i < circlearra.length; i++) {
    circlearra[i].update(); // Update all circles
  }
}

animate();
