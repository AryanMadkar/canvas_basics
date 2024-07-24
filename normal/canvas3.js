var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");

function Circle(x, y, sx, sy, radius) {
  this.x = x;
  this.y = y;
  this.sx = sx;
  this.sy = sy;
  this.radius = radius;

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
  };
}
var circlearra = [];

for (let i = 0; i < 30; i++) {
  var radius = 30;
  var x = Math.random() * (innerWidth - radius * 2) + radius;
  var y = Math.random() * (innerHeight - radius * 2) + radius;
  var sx = (Math.random() - 0.5) * 10;
  var sy = (Math.random() - 0.5) * 10;
  circlearra.push(new Circle(x, y, sx, sy, radius));
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  for (var i = 0; i < circlearra.length; i++) {
    circlearra[i].update(); // Update all circles
  }
}

animate();
