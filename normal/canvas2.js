var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");

c.beginPath();
c.arc(200, 200, 30, 0, Math.PI * 2, false);

var x = 200;
var y = 200;
var sx = Math.random() * 20;
var sy = Math.random() * 20;

var x1 = 300;
var y1 = 300;
var sx1 = Math.random() * 20;
var sy1 = Math.random() * 20;

var radius = 50;
  var circle1 = new Circle(300, 200, 10, 10);

function animate() {
  requestAnimationFrame(animate);
  circle1.update();

  c.clearRect(0, 0, innerWidth, innerHeight);

  c.beginPath();
  c.arc(x, y, radius, 0, Math.PI * 2, false);
  c.strokeStyle = "red";
  c.fillStyle = "orange";
  c.fill();
  c.stroke();
  c.beginPath();
  c.arc(x1, y1, radius, 0, Math.PI * 2, false);
  c.strokeStyle = "blue";
  c.fillStyle = "orange";
  c.fill();
  c.stroke();

  if (x + radius >= innerWidth || x - radius <= 0) {
    sx = -sx;
  } else if (y + radius >= innerHeight || y - radius <= 0) {
    sy = -sy;
  }

  if (x1 + radius >= innerWidth || x1 - radius <= 0) {
    sx1 = -sx1;
  } else if (y1 + radius >= innerHeight || y1 - radius <= 0) {
    sy1 = -sy1;
  }

  x += sx;
  y += sy;

  x1 += sx1;
  y1 += sy1;
}

animate();
