const inputRange = document.querySelector('#font-size-control');
const changeText = document.querySelector('#text');

const onInputChange = function (event) {
  changeText.style.fontSize = `${event.currentTarget.value}px`;
};

inputRange.addEventListener('input', onInputChange);
