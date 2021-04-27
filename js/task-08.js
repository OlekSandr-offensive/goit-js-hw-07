const createDiv = document.querySelectorAll('#controls button');
//const clearDiv = document.querySelectorAll('#controls button');
const mainDivBox = document.querySelector('#boxes');
const dataInput = document.querySelector('#controls input');

createDiv[0].addEventListener('click', () => {
  if (dataInput.value) {
    createBoxes(dataInput.value);
  } else {
    console.log('Введіть дані');
  }
});
createDiv[1].addEventListener('click', () => {
  console.log('clearDiv clear');
  dataInput.value = null;
});
const createBoxes = amount => {
  const countArray = Array(Number(amount)).fill(0);
  // console.log(amount + typeof Number(amount));
  const restart = countArray.map((elem, index) => {
    const createMyDiv = document.createElement('div');
    createMyDiv.style.width = `${30 + index * 10}px`;
    createMyDiv.style.height = `${30 + index * 10}px`;
    createMyDiv.style.background = 'red';
    createMyDiv.style.border = 'black 2px solid';
    // mainDivBox.appendChild(createMyDiv);
    return createMyDiv;
  });
  mainDivBox.append(...restart);
};
