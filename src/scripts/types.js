import { goodsTypes, boxesImages, boxesImages2 } from "../scripts/cards.js";
import { createCard } from "../scripts/goods.js";
import { cardsMini } from "../scripts/cardsmini.js"

const elementTemplate = document.querySelector("#goods-template").content;
const elementPlace = document.querySelector(".goods__types");


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
    });

    window.addEventListener("click", function (e) {
      if (!e.target === elementsBox) {
        console.log("HAY");
        
    //     elementsBox.innerHTML = "";
    //     cardsArray = undefined;
      }
    });
    // const infoMiniCard = elementsBox.querySelector('.elements__image')
    // infoMiniCard.addEventListener('click', () => {
    //   generatePopupCard();
    // })
    // }
    // newButton.addEventListener('click', (evt) => {
    //     if (evt) {
    //         location.reload();
    //     }
    // });
  }
