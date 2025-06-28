const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let squares = [];

for (let i = 0; i < 100; i++) {
  squares.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 5 + 1,
    speed: Math.random() * 2 + 0.5,
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  squares.forEach(sq => {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.fillRect(sq.x, sq.y, sq.size, sq.size);
    sq.y += sq.speed;

    if (sq.y > canvas.height) {
      sq.y = 0;
      sq.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
