/* Custom Cursor */
const cursor = document.querySelector('.cursor');

window.addEventListener('mousemove', e => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

/* Face Morph */
const hero = document.querySelector('.hero');
const designer = document.querySelector('.face-designer');
const developer = document.querySelector('.face-developer');
const profile = document.querySelector('.profile-wrapper');

let blend = 0.5;
let targetBlend = 0.5;

hero.addEventListener('mousemove', e => {
  const rect = hero.getBoundingClientRect();
  targetBlend = (e.clientX - rect.left) / rect.width;
  targetBlend = Math.max(0, Math.min(1, targetBlend));
});

hero.addEventListener('mouseleave', () => {
  targetBlend = 0.5;
});

function animate() {
  blend += (targetBlend - blend) * 0.08;

  designer.style.clipPath = `inset(0 ${100 - blend * 100}% 0 0)`;
  developer.style.clipPath = `inset(0 0 0 ${blend * 100}%)`;

  profile.style.transform =
    `rotateY(${(blend - 0.5) * 30}deg)`;

  requestAnimationFrame(animate);
}

animate();

/* Theme Toggle */
const toggle = document.getElementById('theme-toggle');
let light = false;

toggle.addEventListener('click', () => {
  light = !light;
  if (light) {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
});
