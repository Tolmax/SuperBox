// import "./pages/index.css";

import {getgoodsCards, getgoodsCards2} from "./goods.js"
// import {getgoodsCards} from "./goodsOne.js"
// import {generatePopup} from "./modals.js"
import {arrowLeft, arrowRight, nextSlide, previousSlide, addPagination} from "./slider.js"
import {getgoodsScroll1, getgoodsScroll2, getgoodsScroll3, getgoodsScroll4} from "./scroll.js"


const tipeOfBoxes = document.querySelector(".goods__image");
const tipeOfBoxes2 = document.querySelector(".goods__image-shelfs");

const scrollSlider1 = document.querySelector('.one');
const scrollSlider2 = document.querySelector('.two');
const scrollSlider3 = document.querySelector('.three');
const scrollSlider4 = document.querySelector('.four');

tipeOfBoxes.addEventListener('click', getgoodsCards);    // Для вставки карточек в разметку
tipeOfBoxes2.addEventListener('click', getgoodsCards2);    // Для вставки карточек в разметку
// tipeOfBoxes.addEventListener('click', generatePopup)  // Для открытия модального окна


scrollSlider1.addEventListener('click', getgoodsScroll1);
scrollSlider2.addEventListener('click', getgoodsScroll2);
scrollSlider3.addEventListener('click', getgoodsScroll3);
scrollSlider4.addEventListener('click', getgoodsScroll4);



arrowLeft.addEventListener("click", previousSlide);
arrowRight.addEventListener("click", nextSlide);

addPagination();
// setInterval(showImage, 3000);
// setInterval(changeSlides, 3000);
// changeSlides, showImage
