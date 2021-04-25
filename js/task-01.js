
const category = document.querySelector("ul#categories");
const quontityOfCategory = category.children.length;

console.log(`У списку ${quontityOfCategory} категорії.`);

const categoryElem = document.querySelectorAll(".item");

const nameOfElem = categoryElem.forEach((elem) => {
    console.log(`- Категорія: ${elem.firstElementChild.textContent}`);
    console.log(`- Кількість елементів: ${elem.querySelectorAll("li").length}`);
});