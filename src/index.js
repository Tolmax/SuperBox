
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./pages/index.css";

import {getTypeOfGoods} from "./scripts/types.js";
// import {generatePopup} from "./scripts/modals.js";
import { renderSwiperSlider } from './scripts/swiper-slider.js';

// эта функция отменяет старый скролл при оновлении сайта

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

// эта функция рендерит страничку

getTypeOfGoods();


// эта функция рендерит слайдер

renderSwiperSlider();





// заготовка для модального окна контактов

// const individualOrder = document.querySelector('.header__button');

// individualOrder.addEventListener('click', generatePopup);

