const slider = document.getElementById("slider");
export const arrowLeft = document.querySelector(".arrow-left");
export const arrowRight = document.querySelector(".arrow-right");
const slides = document.querySelectorAll(".slider-image");

const bottom = document.getElementById("bottom");

let currentSlideIndex = 0;
const paginationCircles = [];
const sliderWidth = slider.clientWidth;

function createPaginationCircle() {
    const div = document.createElement("div");
    div.className = "pagination-circle";
    bottom.appendChild(div);
    paginationCircles.push(div);
}

export function addPagination() {
    slides.forEach(createPaginationCircle);
    paginationCircles[0].classList.add("active");
    paginationCircles.forEach((circle, index) => {
        circle.addEventListener("click", () => changeSlide(index));
    });
}

function addActiveClass() {
    paginationCircles[currentSlideIndex].classList.add("active");
}

function removeActiveClass() {
    paginationCircles[currentSlideIndex].classList.remove("active");
}

function showSlide() {
    slider.style.transform = `translateX(-${currentSlideIndex * sliderWidth}px)`;
}

function changeSlide(slideIndex) {
    removeActiveClass();
    currentSlideIndex = slideIndex;
    addActiveClass();
    showSlide();
}

export function nextSlide() {
    let newSlideIndex = currentSlideIndex + 1;
    if(newSlideIndex > slides.length - 1) {
        newSlideIndex = 0;
    }
    changeSlide(newSlideIndex);
}

export function previousSlide() {
    let newSlideIndex = currentSlideIndex - 1;
    if(newSlideIndex < 0) {
        newSlideIndex = slides.length - 1;
    }
    changeSlide(newSlideIndex);
}

// addPagination();
// arrowLeft.addEventListener("click", previousSlide);
// arrowRight.addEventListener("click", nextSlide);



// Получаем элемент слайдера
// const slider = document.querySelector('#slider');

// Создаем массив с изображениями
// const slides = [
//   "../images/boxes.JPG",
//   "../images/shellboxes.JPG",
//   "../images/shells.JPG",
//   "../images/tumbs.JPG",
//   "../images/P1722588.JPG"
// ];

// let currentSlideIndex = 0;

// export function showImage() {
//   // Добавляем изображение в слайдер
//   // slider.innerHTML = `<img src="${slides[currentSlideIndex]}" alt="" class="slider-image">`;

//   // Проверяем, есть ли следующий элемент в массиве
//   if (currentSlideIndex < slides.length - 1) {
//     currentSlideIndex++;
//   } else {
//     // Если нет, то устанавливаем индекс на первый элемент
//     currentSlideIndex = 0;
//   }
// }


// ONE MORE SLIDER

// let currentIndex = 0;
// const slides = document.querySelectorAll('.slide');
// const slideInterval = 3000;
 
export function changeSlides() {
  slides[currentIndex].style.opacity = 0;
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].style.opacity = 1;
}
 
// setInterval(changeSlide, slideInterval);

// setInterval(showImage, 5000); // Запускаем функцию каждые 5 секунд


//   ЕЩЕ ОДИН СЛАЙДЕР

      // // Код для управления слайдером
      // var slider = document.querySelector('.slider');
      // var images = slider.querySelectorAll('img');

      // function next() {
      //   var active = images[images.length - 1];
      //   if (active.className === 'active') {
      //     active = images[0];
      //   } else {
      //     for (var i = 0; i < images.length; i++) {
      //       if (images[i].className === '') {
      //         active = images[i];
      //         break;
      //       }
      //     }
      //   }

      //   active.classList.add('active');
      //   images[0].classList.remove('active');
      // }

      // setInterval(next, 5000); // Переключает слайд каждые 5 секунд