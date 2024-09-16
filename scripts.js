// Gerar partículas
const particlesContainer = document.querySelector('.particles');
const numParticles = 100; // Número de partículas
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

// Frases para o balão de fala
const phrases = [
  "O MHP surgiu durante uma aula de Laboratório de Processos Criativos, o que mostra como ideias inovadoras podem emergir de ambientes acadêmicos e criativos. O projeto ganhou tanta atenção positiva que foi escolhido como a principal ideia para o TCC.",
  "O MHP tem funções semelhantes ao Driver Booster, sugerindo que ele pode oferecer atualizações e otimizações para drivers de hardware, ajudando a manter o sistema do PC mais eficiente e seguro.",
  "O desenvolvimento do MHP recebeu muitos elogios do professor, o que provavelmente ajudou a moldar e aprimorar o projeto. O feedback positivo pode ser um indicativo de que o MHP tem um grande potencial e um bom alinhamento com as necessidades dos usuários."
];
let currentIndex = 0; // Índice da frase atual

function showSpeechBubble() {
  const speechBubble = document.querySelector('.speech-bubble');

  // Mostrar balão de fala
  speechBubble.style.display = 'block';
  
  
  // Definir a posição fixa do balão de fala
  speechBubble.style.position = 'absolute'; // Garantir que a posição seja absoluta
  speechBubble.style.top = `${cubeRect.top - speechBubble.offsetHeight - 20}px`; // Ajustar a posição vertical
  speechBubble.style.left = `${cubeRect.right + 20}px`; // Ajustar a posição horizontal
  
  // Definir a frase do balão de fala
  speechBubble.textContent = phrases[currentIndex];
  
  // Atualizar o índice da frase
  currentIndex = (currentIndex + 1) % phrases.length;

  // Ocultar balão de fala após 5 segundos
  setTimeout(() => {
    speechBubble.style.display = 'none';
  }, 5000);
}

// Mostrar o balão de fala a cada 10 segundos
setInterval(showSpeechBubble, 10000);
