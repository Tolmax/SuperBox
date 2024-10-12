import "./pages/index.css";

import {getTypeOfGoods} from "./scripts/types.js";
import {generatePopup} from "./scripts/modals.js";
import {arrowLeft, arrowRight, nextSlide, previousSlide, addPagination} from "./scripts/slider.js";

// эта функция отменяет старый скролл при оновлении сайта

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

// эта функция рендерит страничку

getTypeOfGoods();


const individualOrder = document.querySelector('.header__button');


individualOrder.addEventListener('click', generatePopup);

// arrowLeft.addEventListener("click", previousSlide);
// arrowRight.addEventListener("click", nextSlide);

addPagination();
// setInterval(showImage, 3000);
// setInterval(changeSlides, 3000);
// changeSlides, showImage



// const element = document.getElementById('.goods__image');

// element.addEventListener('click', function () {
//   const id = this.id;
//   console.log(id);
// });