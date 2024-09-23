// Gerar partículas
const particlesContainer = document.querySelector('.particles');
const numParticles = 200; // Número de partículas
const maxSize = 5; // Tamanho máximo das partículas

for (let i = 0; i < numParticles; i++) {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  const size = Math.random() * maxSize + 1; // Tamanho aleatório
  const x = Math.random() * window.innerWidth; // Posição horizontal aleatória
  const y = Math.random() * window.innerHeight; // Posição vertical aleatória

  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.top = `${y}px`;
  particle.style.left = `${x}px`;

  // Animação de partículas
  particle.style.animation = `float-particles ${Math.random() * 5 + 5}s linear infinite`;

  particlesContainer.appendChild(particle);
}
