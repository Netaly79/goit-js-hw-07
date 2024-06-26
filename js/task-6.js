function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.getElementById('controls');
const input = controls.querySelector('input');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

createButton.addEventListener('click', onCreate);
destroyButton.addEventListener('click', onDestroy);

function onCreate() {
  const amount = Number(input.value);
  if (amount < 1 || amount > 100) {
    return;
  }
  destroyBoxes();
  createBoxes(amount);
}

function onDestroy() {
  destroyBoxes();
}

function createBoxes(amount) {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const boxSize = 30 + i * 10;
    const box = document.createElement('div');
    box.style.minWidth = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
  }
  boxesContainer.appendChild(fragment);
  input.value = '';
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}
