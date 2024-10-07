
import {boxesImages} from "./cards.js"

const elementTemplate = document.querySelector('#card-template').content;
const newButton = document.querySelector('.goods__title');
const newButton2 = document.querySelector('.goods__title2');
const elementPlace = document.querySelector('.goods__box');
const elementPlace2 = document.querySelector('.goods__box2');


function createCard(link, name) {
    const cardElement = elementTemplate.querySelector('.elements__card').cloneNode(true);

    cardElement.querySelector('.elements__image').src = link;
    cardElement.querySelector('.elements__name').textContent = name;
    cardElement.querySelector('.elements__image').alt = name;

    // const chooseButton = cardElement.querySelector('.elements__button'); 
    // chooseButton.addEventListener('click', chooseCard);

    return cardElement;
    };


// function chooseCard() {
//     return console.log("Good")
// }

export function getgoodsCards() {
    elementPlace.innerHTML = '';
    newButton.style.cursor = 'pointer'
    elementPlace.style.flexWrap = 'wrap';
    boxesImages.forEach(function({ link, name }) {
        const cardNew = createCard(link, name);
        elementPlace.append(cardNew);
    });
    getback();
    document.addEventListener("keydown", (evt) => {
        if (evt.key === "Escape") {
            location.reload();
        }
      });
    newButton.addEventListener('click', (evt) => {
        if (evt) {
            location.reload();
        }
    })
}
function getback() {
    document.querySelector('.goods__title').textContent = 'Вернуться назад';
    document.querySelector('.goods__title').style.fontSize = '18px';
}

export function getgoodsCards2() {
    elementPlace2.innerHTML = '';
    newButton2.style.cursor = 'pointer'
    elementPlace2.style.flexWrap = 'wrap';
    boxesImages.forEach(function({ link, name }) {
        const cardNew = createCard(link, name);
        elementPlace2.append(cardNew);
    });
    getback2();
    document.addEventListener("keydown", (evt) => {
        if (evt.key === "Escape") {
            location.reload();
        }
      });
    newButton2.addEventListener('click', (evt) => {
        if (evt) {
            location.reload();
        }
    })
}

function getback2() {
    document.querySelector('.goods__title2').textContent = 'Вернуться назад';
    document.querySelector('.goods__title2').style.fontSize = '18px';
}


// document.onkeydown = function(event) {
//     if (event.keyCode === 27) { // Esc
//       location.reload();
//     }
//   };
  