const counterValue = document.querySelector('#value');
const buttons = document.querySelectorAll('#counter button');
const btnDecrement = buttons[0];
const btnIncrement = buttons[1];

console.log(counterValue);
console.log(btnDecrement);
console.log(btnIncrement);

btnDecrement.addEventListener('click', decrement);
btnIncrement.addEventListener('click', increment);

function increment() {
    counterValue.textContent = Number(counterValue.textContent) + 1;
 }

function decrement() {
    counterValue.textContent -= 1;
 }
