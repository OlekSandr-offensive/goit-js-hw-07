const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

const navElem = document.querySelector('#ingredients');
const sortRes = ingredients.forEach((elem) => {
  const itemEl = document.createElement("li");
    itemEl.textContent = elem;
  navElem.appendChild(itemEl);
});
