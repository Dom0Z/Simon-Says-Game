let sequence = [];
let humanSequence = [];

const startButton = document.querySelector('.js-start');
const info = document.querySelector('.js-info');

function nextStep() {
    const tiles = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const random = tiles[Math.floor(Math.random() * tiles.length)];
  
    return random;
  }
  
  function nextRound() {
    level += 1;
  
    const nextSequence = [...sequence];
    nextSequence.push(nextStep());
  }
  
  function startGame() {
    startButton.classList.add('hidden');
    info.classList.remove('hidden');
    info.textContent = 'Wait for the computer';
  }
  
  startButton.addEventListener('click', startGame);