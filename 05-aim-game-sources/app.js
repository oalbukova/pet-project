const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('.time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');
const colors = ['linear-gradient(90deg, #16D9E3 0%, #30C7EC 47%, #46AEF7 100%)', 'linear-gradient(90deg, #CD5C5C 0%, #DC143C 47%, #8B0000 100%)', 'linear-gradient(90deg, #98FB98 0%, #3CB371 47%, #006400 100%)', 'linear-gradient(90deg, #F0E68C 0%, #BDB76B 47%, #FFD700 100%)'];

let time = 0;
let score = 0;

startBtn.addEventListener('click', (event) => {
  event.preventDefault();
  screens[0].classList.add('up');
})

timeList.addEventListener('click', event => {
  if (event.target.classList.contains('time-btn')) {
    time = parseInt(event.target.getAttribute('data-time'));
    screens[1].classList.add('up');
    startGame();
  }
})

board.addEventListener('click', (event) => {
  if (event.target.classList.contains('circle')) {
    score++;
    event.target.remove();
    createRandomCircle();
  }
})

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function startGame() {
  setInterval(decreaseTime, 1000);
  createRandomCircle();
  setTime(time);
}

function decreaseTime() {
  if (time === 0) {
    finishGame();
  } else {
    let current = --time;
    if (current < 10) {
      current = `0${current}`
    }
    setTime(current);
  }
}

function setTime(value) {
  timeEl.innerHTML = `00:${value}`;
}

function finishGame() {
  timeEl.parentNode.classList.add('hide');
  board.innerHTML = `<h1>Cчет: <span class="primary">${score}</span></h1>`;
}

function createRandomCircle() {
  const color = getRandomColor();
  const circle = document.createElement('div');
  const size = getRandomNumber(10, 60);
  const {width, height} = board.getBoundingClientRect();

  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);

  circle.classList.add('circle');

  circle.style.background = color;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;

  board.append(circle);
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

