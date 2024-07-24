var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

function Ball(x, y, dy, radius) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.dy = dy;

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = "red";
    c.fill();
    c.strokeStyle = "red";
    c.stroke();
  };
  this.update = function () {
    this.draw();
  };
}

let ballArray = [];

for (let i = 0; i < 1; i++) {
  let x = Math.random() * (canvas.width - 2 * 100) + 100;
  let y = Math.random() * (canvas.height - 2 * 100) + 100;
  let dy = 2;
  let radius = 100;
  ballArray.push(new Ball(x, y, dy, radius));
}

function init() {
  ballArray = [];
  for (let i = 0; i < 1; i++) {
    let x = Math.random() * (canvas.width - 2 * 100) + 100;
    let y = Math.random() * (canvas.height - 2 * 100) + 100;
    let dy = 2;
    let radius = 100;
    ballArray.push(new Ball(x, y, dy, radius));
  }
}

function animate() {
    requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < ballArray.length; i++) {
    ballArray[i].update();
   
  }
}