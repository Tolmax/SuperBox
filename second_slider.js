const slider = document.getElementById("slider");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
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

function addPagination() {
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

function nextSlide() {
    let newSlideIndex = currentSlideIndex + 1;
    if(newSlideIndex > slides.length - 1) {
        newSlideIndex = 0;
    }
    changeSlide(newSlideIndex);
}

function previousSlide() {
    let newSlideIndex = currentSlideIndex - 1;
    if(newSlideIndex < 0) {
        newSlideIndex = slides.length - 1;
    }
    changeSlide(newSlideIndex);
}

// Получаем элемент слайдера
// const slider = document.querySelector('#slider');

// Создаем массив с изображениями
const images = [
  "../images/P1722513.JPG",
  "../images/P1722519.JPG",
  "../images/P1722523.JPG",
  "../images/P1722588.JPG",
  "../images/P1722588.JPG"
];

let currentIndex = 0;

function showImage() {
  // Добавляем изображение в слайдер
  slider.innerHTML = `<img src="${images[currentIndex]}" alt="" class="slider-image">`;

  // Проверяем, есть ли следующий элемент в массиве
  if (currentIndex < images.length - 1) {
    currentIndex++;
  } else {
    // Если нет, то устанавливаем индекс на первый элемент
    currentIndex = 0;
  }
}

setInterval(showImage, 5000); // Запускаем функцию каждые 5 секунд


addPagination();
arrowLeft.addEventListener("click", previousSlide);
arrowRight.addEventListener("click", nextSlide);