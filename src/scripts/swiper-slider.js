// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import "../pages/index.css";


export function renderSwiperSlider() {
// init Swiper:
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
    modules: [Navigation, Pagination],
    // Optional parameters
    // direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
}









// export function renderSwiperSlider() {
//   setTimeout(() => {
//     const swiper = new Swiper('.swiper', {
//       // Optional parameters
//       // direction: 'vertical',
//       loop: true,
    
//       // If we need pagination
//       pagination: {
//         el: '.swiper-pagination',
//       },
    
//       // Navigation arrows
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
    
//       // And if we need scrollbar
//       scrollbar: {
//         el: '.swiper-scrollbar',
//       },
//     });
//   }, 500);
// }
