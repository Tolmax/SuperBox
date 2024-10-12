const elementTemplate = document.querySelector('#card-template').content;

export function createCard(link, name) {
    const cardElement = elementTemplate.querySelector('.elements__card').cloneNode(true);

    cardElement.querySelector('.elements__image').src = link;
    cardElement.querySelector('.elements__name').textContent = name;
    cardElement.querySelector('.elements__image').alt = name;

    // const chooseButton = cardElement.querySelector('.elements__button'); 
    // chooseButton.addEventListener('click', chooseCard);

    return cardElement;
    };


  