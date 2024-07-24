import utils, { distance, randomColor, resolveCollision } from "./utils";

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;
canvas.style.background = "black";
const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

const colors = ["#2185C5", "#7ECEFD", "#FFF6E5", "#FF7F66"];

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

var cr =
  "rgb(" +
  Math.floor(Math.random() * 256) +
  "," +
  Math.floor(Math.random() * 256) +
  "," +
  Math.floor(Math.random() * 256) +
  ")";

var cr2 =
  "rgb(" +
  Math.floor(Math.random() * 256) +
  "," +
  Math.floor(Math.random() * 256) +
  "," +
  Math.floor(Math.random() * 256) +
  ")";

// Objects
class Particle {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.mass = 1;
    this.blackbuck = "black";
    this.velocity = {
      x: (Math.random() - 0.5) * 2,
      y: (Math.random() - 0.5) * 2,
    };
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

    c.fillStyle = this.blackbuck;
    c.fill();
    c.strokeStyle = this.color;
    c.lineWidth = 3;
    c.stroke();
    c.closePath();
  }

  update() {
    this.draw();
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.velocity.x = -this.velocity.x;
    } else if (
      this.y + this.radius > canvas.height ||
      this.y - this.radius < 0
    ) {
      this.velocity.y = -this.velocity.y;
    }
    for (let i = 0; i < Particles.length; i++) {
      if (this === Particles[i]) {
        continue;
      }
      if (
        distance(this.x, this.y, Particles[i].x, Particles[i].y) -
          this.radius * 2 <
        0
      ) {
        console.log("has collision");
        resolveCollision(this, Particles[i]);
      }
    }
    this.x += this.velocity.x;
    this.y += this.velocity.y;

    if (
      mouse.x - this.x < 50 &&
      mouse.x - this.x > -50 &&
      mouse.y - this.y < 50 &&
      mouse.y - this.y > -50
    ) {
      this.blackbuck = cr2;
    } else {
      this.blackbuck = "black";
    }
  }
}

// Implementation
let Particles;
function init() {
  Particles = [];

  for (let i = 0; i < 100; i++) {
    let radius = 20;
    let x = Math.random() * (canvas.width - radius * 2) + radius;
    let y = Math.random() * (canvas.height - radius * 2) + radius;
    if (i !== 0) {
      for (let j = 0; j < Particles.length; j++) {
        if (distance(x, y, Particles[j].x, Particles[j].y) - radius * 2 < 0) {
          x = Math.random() * (canvas.width - radius * 2) + radius;
          y = Math.random() * (canvas.height - radius * 2) + radius;
          j = -1;
        }
      }
    }
    // objects.push()
    Particles.push(new Particle(x, y, radius, cr));
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);

  // c.fillText("HTML CANVAS BOILERPLATE", mouse.x, mouse.y);
  // objects.forEach(object => {
  //  object.update()
  // })
  Particles.forEach((Particle) => {
    Particle.update(Particles);
  });
}

init();
animate();
