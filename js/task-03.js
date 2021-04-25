// const images = [
//   {
//     url:
//       'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
// ];

// const ulRef = document.querySelector('#gallery');
// const createElement = (images) => {
//     const allString = '';
     
//     for (const image of images) {
//         const elementToAdd = `<li><img src='${image.url}' alt='${image.alt}'></li>`;
//         allString += elementToAdd;
//     };
    
//     return allString;
// };
// const imagesRef = createElement(images);
// console.log(imagesRef);

// // ulRef.insertAdjacentHTML('afterbegin', "<li><img>elem.url</img></li>");
const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const navElem = document.querySelector("#gallery");
const sortRes = images.map((elem) => {
  const navItemEl = document.createElement("li");
  const imageEl = document.createElement("img");
  imageEl.src = elem.url;
  imageEl.alt = elem.alt;
 navElem.insertAdjacentHTML('afterbegin', `<li><img src='${elem.url}' alt='${elem.alt}'></li>`);
});