import { goodsTypes, boxesImages, boxesImages2 } from "../scripts/cards.js";
import { createCard } from "../scripts/goods.js";
import { cardsMini } from "../scripts/cardsmini.js"
import {getgoodsScroll1, getgoodsScroll2, getgoodsScroll3, getgoodsScroll4, getgoodsScroll5} from "../scripts/scroll.js";

const elementTemplate = document.querySelector("#goods-template").content;
const elementPlace = document.querySelector(".goods__types");

const scrollSlider1 = document.querySelector('.one');
const scrollSlider2 = document.querySelector('.two');
const scrollSlider3 = document.querySelector('.three');
const scrollSlider4 = document.querySelector('.four');
const scrollSlider5 = document.querySelector('.five');


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
scrollSlider5.addEventListener('click', getgoodsScroll5);
}

function getgoodsCard(evt) {
    let cardsArray;
    let elementsBox;

    if (evt.target === document.getElementById('souvenirbox')) {
        cardsArray = cardsMini;
        elementsBox = document.getElementById('souvenir-box');
    } else if (evt.target === document.getElementById('boxes')) {
        cardsArray = boxesImages2;
        elementsBox = document.getElementById('boxes-box');
    } else if (evt.target === document.getElementById('shelves')) {
        cardsArray = boxesImages;
        elementsBox = document.getElementById('shelves-box');
    } else if (evt.target === document.getElementById('lockers')) {
        cardsArray = boxesImages2;
        elementsBox = document.getElementById('lockers-box');
    } else if (evt.target === document.getElementById('tumbs')) {
			cardsArray = boxesImages2;
			elementsBox = document.getElementById('tumbs-box');
	} 
    // cardsArray.forEach(function ({ link, name }) {
    //     const cardNew = createCard(link, name);
    //     elementsBox.append(cardNew);
    //   });
    cardsArray.forEach(function (data) {
      const cardNew = createCard(data);
      elementsBox.append(cardNew);
    });
  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      elementsBox.innerHTML = "";
      cardsArray = undefined;
    }
    // const infoMiniCard = elementsBox.querySelector('.elements__image')
    // infoMiniCard.addEventListener('click', () => {
    //   generatePopupCard();
    // })
  });
//   newButton.addEventListener('click', (evt) => {
//       if (evt) {
//           location.reload();
//       }
//   })
}
