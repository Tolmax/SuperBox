// import "./pages/index.css";

import {getgoodsCards} from "./goods.js"
// import {getgoodsCards} from "./goodsOne.js"
// import {generatePopup} from "./modals.js"
import {arrowLeft, arrowRight, nextSlide, previousSlide, addPagination} from "./slider.js"


const tipeOfBoxes = document.querySelector(".goods__image");

const scrollSlider1 = document.querySelector('.one');
const scrollSlider2 = document.querySelector('.two');
const scrollSlider3 = document.querySelector('.three');
const scrollSlider4 = document.querySelector('.four');

tipeOfBoxes.addEventListener('click', getgoodsCards);    // Для вставки карточек в разметку
// tipeOfBoxes.addEventListener('click', generatePopup)  // Для открытия модального окна


scrollSlider1.addEventListener('click', getgoodsScroll1);
scrollSlider2.addEventListener('click', getgoodsScroll2);
scrollSlider3.addEventListener('click', getgoodsScroll3);
scrollSlider4.addEventListener('click', getgoodsScroll4);

function getgoodsScroll1(evt) {
    if (evt) {
        document.querySelector('#boxes').scrollIntoView();
    }
}
function getgoodsScroll2(evt) {
    if (evt) {
        document.querySelector('#shelfes').scrollIntoView();
    }
}
function getgoodsScroll3(evt) {
    if (evt) {
        document.querySelector('#bigboxes').scrollIntoView();
    }
}
function getgoodsScroll4(evt) {
    if (evt) {
        document.querySelector('#tumbs').scrollIntoView();
    }
}




arrowLeft.addEventListener("click", previousSlide);
arrowRight.addEventListener("click", nextSlide);

addPagination();
// setInterval(showImage, 3000);
// setInterval(changeSlides, 3000);
// changeSlides, showImage
