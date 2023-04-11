const PROMPT_DELAY = 1000;
var timerId = null;

// вибираємо кнопки старт/стоп

const onStartBtn = document.querySelector('[data-start]');
const onStopBtn = document.querySelector('[data-stop]');

const bodyRef = document.querySelector('body');

// додаємо слухача подій на кнопки старт/стоп

onStartBtn.addEventListener('click', startChangeColor);
onStopBtn.addEventListener('click', stopChangeColor);

//  функція зміни кольору при натисканні на кнопку старт

function startChangeColor() {
  timerId = setInterval(getBgColor, PROMPT_DELAY);
  onStartBtn.toggleAttribute('disabled');
  onStopBtn.removeAttribute('disabled');
}

// функція зупинки зміни кольорів

function stopChangeColor() {
  timerId = clearInterval(timerId);
  onStartBtn.removeAttribute('disabled');
  onStopBtn.toggleAttribute('disabled');
}

// функція рандомної зміни кольорів
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function getBgColor() {
  bodyRef.style.backgroundColor = getRandomHexColor();
}
