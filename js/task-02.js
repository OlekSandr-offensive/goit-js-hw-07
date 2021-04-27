const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

const navElem = document.querySelector('#ingredients');
const sortRes = ingredients.map(elem => {
  const titleEl = document.createElement('li');
  titleEl.textContent = elem;
  return titleEl;
});
navElem.append(...sortRes);
