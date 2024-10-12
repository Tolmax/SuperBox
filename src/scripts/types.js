import { goodsTypes, boxesImages, boxesImages2 } from "../scripts/cards.js";
import { createCard } from "../scripts/goods.js";
import {getgoodsScroll1, getgoodsScroll2, getgoodsScroll3, getgoodsScroll4} from "../scripts/scroll.js";

const elementTemplate = document.querySelector("#goods-template").content;
const elementPlace = document.querySelector(".goods__types");

const scrollSlider1 = document.querySelector('.one');
const scrollSlider2 = document.querySelector('.two');
const scrollSlider3 = document.querySelector('.three');
const scrollSlider4 = document.querySelector('.four');


function createTypesOfGoods(number, _id, box, title, link, description) {
  const cardElement = elementTemplate
    .querySelector(".goods__container")
    .cloneNode(true);

  cardElement.querySelector(".goods__title").id = number;
  cardElement.querySelector(".goods__title").textContent = title;
  cardElement.querySelector(".goods__image").id = _id;
  cardElement.querySelector(".goods__image").src = link;
  cardElement.querySelector(".goods__image").alt = title;
  cardElement.querySelector(".goods__paragraph").textContent = description;
  cardElement.querySelector(".goods__render").id = box;

  const showCards = cardElement.querySelector(".goods__box");
  showCards.addEventListener("click", function (evt) {
    getgoodsCard(evt);
  });

  return cardElement;
}

export function getTypeOfGoods() {
  goodsTypes.forEach(function ({number, _id, box, title, link, description }) {
    const typeNew = createTypesOfGoods(number, _id, box, title, link, description);
    elementPlace.append(typeNew);
  });
scrollSlider1.addEventListener('click', getgoodsScroll1);
scrollSlider2.addEventListener('click', getgoodsScroll2);
scrollSlider3.addEventListener('click', getgoodsScroll3);
scrollSlider4.addEventListener('click', getgoodsScroll4);
}

function getgoodsCard(evt) {
    let cardsArray;
    let elementsBox;

    if (evt.target === document.getElementById('boxes')) {
        cardsArray = boxesImages;
        elementsBox = document.getElementById('boxes-box');
    } else if (evt.target === document.getElementById('shelfs')) {
        cardsArray = boxesImages2;
        elementsBox = document.getElementById('shelfs-box');
    } else if (evt.target === document.getElementById('bigboxes')) {
        cardsArray = boxesImages;
        elementsBox = document.getElementById('bigboxes-box');
    } else if (evt.target === document.getElementById('tumbs')) {
        cardsArray = boxesImages2;
        elementsBox = document.getElementById('tumbs-box');
    } 
    cardsArray.forEach(function ({ link, name }) {
        const cardNew = createCard(link, name);
        elementsBox.append(cardNew);
      });
  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      elementsBox.innerHTML = "";
      cardsArray = undefined;
    }
  });
//   newButton.addEventListener('click', (evt) => {
//       if (evt) {
//           location.reload();
//       }
//   })
}
