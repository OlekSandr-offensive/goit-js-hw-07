const inputRange = document.querySelector("#font-size-control");
const changeText = document.querySelector("#text");
console.log(inputRange);
console.log(changeText);
const onInputChange = function (event) {
    changeText.style.fontSize = `${event.currentTarget.value}px`;
    console.log(`${event.currentTarget.value})
};
inputRange.addEventListener("input", onInputChange);