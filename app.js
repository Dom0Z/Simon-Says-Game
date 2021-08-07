let sequence = [];
let humanSequence = [];
let level = 0 ;

const startButton = document.querySelector('.js-start');
const info = document.querySelector('.js-info');

function nextStep() {
    const tiles = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const random = tiles[Math.floor(Math.random() * tiles.length)];
    console.log(random)
    return random;
  }
  function activateTile(numb) {
  const tile = document.querySelector(`[data-tile='${numb}']`);
  //const sound = document.querySelector(`[data-sound='${numb}']`);

  tile.classList.add('activated');
 // sound.play();

  setTimeout(() => {
    tile.classList.remove('activated');
  }, 300);
}

function playRound(nextSequence) {
  nextSequence.forEach((numb, index) => {
    setTimeout(() => {
      activateTile(numb);
    }, (index + 1) * 600);
  });
}
  
function nextRound() {
    level += 1;
  
    const nextSequence = [...sequence];
    nextSequence.push(nextStep());
    playRound(nextSequence);
  }
  
function startGame() {
    startButton.classList.add('hidden');
    info.classList.remove('hidden');
    info.textContent = 'Wait for the computer';
    nextRound();
  }
  
  startButton.addEventListener('click', startGame);