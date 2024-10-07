
import {boxesImages} from "./cards.js"

const elementTemplate = document.querySelector('#card-template').content;
const elementPlace = document.querySelector('.popup__content');


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
    boxesImages.forEach(function({ link, name }) {
    const cardNew = createCard(link, name);
    elementPlace.append(cardNew);
    });
}
