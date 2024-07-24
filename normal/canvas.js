var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");
c.fillStyle = "red";
c.fillRect(100, 100, 100, 100);
c.fillRect(200, 200, 200, 200);
c.fillRect(400, 400, 100, 100);
c.fillStyle = "lightgreen";
c.fillRect(400, 100, 100, 100);

c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.strokeStyle = "red";

c.stroke();

c.beginPath();
c.arc(50, 100, 30, 0, Math.PI * 2, false);
c.strokeStyle = "blue";
c.fillStyle = "black";
c.fill();
c.stroke();

for (let i = 0; i < 3; i++) {
  c.beginPath();
  c.arc(300, 300, 60, 0, Math.PI * 2, false);
  c.strokeStyle = "blue";
  c.fillStyle = "black";
  c.fill();
  c.stroke();
}

for (let i = 0; i < 5; i++) {
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  c.beginPath();
  c.arc(x, y, 60, 0, Math.PI * 2, false);
  c.strokeStyle = "blue";
  c.fillStyle = `rgba{x,y,255}`;
  c.fill();
  c.stroke();
}
