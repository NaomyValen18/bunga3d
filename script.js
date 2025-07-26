const flower = document.getElementById('flower');
const totalPetals = 12;

for (let i = 0; i < totalPetals; i++) {
  const petal = document.createElement('div');
  petal.className = 'petal';
  const angle = (360 / totalPetals) * i;
  petal.style.transform = `
    rotateY(${angle}deg)
    translateZ(60px)
    rotateX(45deg)
  `;
  flower.appendChild(petal);
}

let isDragging = false;
let previousX = 0;
let rotateY = 0;

document.querySelector('.scene').addEventListener('mousedown', (e) => {
  isDragging = true;
  previousX = e.clientX;
  document.body.style.cursor = 'grabbing';
});

window.addEventListener('mouseup', () => {
  isDragging = false;
  document.body.style.cursor = 'grab';
});

window.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const deltaX = e.clientX - previousX;
  rotateY += deltaX * 0.5;
  flower.style.transform = `scale(1) rotateY(${rotateY}deg)`;
  previousX = e.clientX;
});
