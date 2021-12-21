const  board = document.querySelector('#board');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71', '#008080', '#F08080', '#DB7093', '#FF6347', '#F0E68C', '#FFDAB9', '#6A5ACD', '#BC8F8F', '#DA70D6', '#BC8F8F', '#5F9EA0', '#6495ED'];
const SQUARES_NUMBER = 1500;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', setColor)

  square.addEventListener('mouseleave', removeColor)

  board.append(square);
}

function setColor(event) {
  const element = event.target;
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2x ${color}, 0 0 10px ${color}`;
}

function removeColor(event) {
  const element = event.target;
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = `0 0 2x #000`;
}

function getRandomColor() {
 return colors[Math.floor(Math.random() * colors.length)];
}
