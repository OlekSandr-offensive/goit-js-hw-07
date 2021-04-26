const createDiv = document.querySelectorAll("#controls button");
const mainDivBox = document.querySelector("#boxes");
const clearDiv = document.querySelectorAll("#controls button");
const dataInput = document.querySelector("#controls input");

createDiv[0].addEventListener("click", () => {
  if (dataInput.value) {
    createBoxes(dataInput.value);
  } else {
    console.log("Введіть дані");
  }
});
clearDiv[1].addEventListener("click", () => {
  console.log("clearDiv clear");
  dataInput.value = null;
});
const createBoxes = (amount) => {
  const countArray = Array(Number(amount)).fill(10);
  const createMyDiv = document.createElement("div");
  console.log(countArray);
  const width = 30;
  countArray.map((elem) => {
    createMyDiv.style.width = `${30 + elem}px`;
    createMyDiv.style.height = "30px";
    createMyDiv.style.background = "red";
    createMyDiv.style.border = "2px black solid";
    console.log(createMyDiv);
    console.log(elem);
    mainDivBox.appendChild(createMyDiv);
  });
};