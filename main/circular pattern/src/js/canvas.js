import utils, { randomColor, randomIntFromRange } from "./utils";

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth - 10;
canvas.height = innerHeight - 10;
canvas.style.background = "black";

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

const colors = ["#00bdff", "#4d39ce", "#088eff", "#FF7F66"];

// Event Listeners
addEventListener("mousemove", (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

addEventListener("resize", () => {
  canvas.width = innerWidth - 10;
  canvas.height = innerHeight - 10;

  init();
});

// Objects
function Particle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.radians = Math.random() * Math.PI * 2;
  this.velocity = 0.05;
  this.distancefrmcenter = randomIntFromRange(50, 120);

  this.lastmouse = { X: this.x, Y: this.y };

  this.update = () => {
    //move this points
    const lastPoint = {
      x: this.x,
      y: this.y,
    };

    // this.lastmouse.X += (mouse.x - this.lastmous.X) * 0.05;

    this.radians += this.velocity;
    this.x = x + Math.cos(this.radians) * this.distancefrmcenter;
    this.y = y + Math.sin(this.radians) * this.distancefrmcenter;
    this.draw(lastPoint);
  };
  this.draw = (lastPoint) => {
    c.beginPath();
    c.strokeStyle = this.color;
    c.lineWidth = this.radius;
    c.moveTo(lastPoint.x, lastPoint.y);
    c.lineTo(this.x, this.y);
    c.stroke();
    c.closePath();
  };
}

// Implementation
let Particles;
function init() {
  Particles = [];

  for (let i = 0; i < 50; i++) {
    // let radius = randomIntFromRange(1,5)
    let radius = Math.random() * 2 + 1;
    Particles.push(
      new Particle(innerWidth / 2, innerHeight / 2, radius, randomColor(colors))
    );
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "rgba(255,255,255,0.05)";
  c.fillRect(0, 0, canvas.width, canvas.height);
  Particles.forEach((Particle) => {
    Particle.update();
  });
}

init();
animate();
