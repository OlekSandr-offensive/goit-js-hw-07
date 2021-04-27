const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

function inputChange(event) {
  if (input.value === '') {
    output.textContent = 'незнайомець';
  } else {
    output.textContent = event.currentTarget.value;
  }
}

input.addEventListener('input', inputChange);
