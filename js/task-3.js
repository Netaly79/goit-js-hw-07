const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', function() {
    const name = nameInput.value.trim();

    name === ''
      ? nameOutput.textContent = 'Anonymous'
      : nameOutput.textContent = name;
});