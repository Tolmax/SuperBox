const popupOpen = document.querySelector(".popup");
const popupClose = popupOpen.querySelector(".popup__close");
const stopScrolling = document.querySelector(".body");
// const popupButton = popupOpen.querySelector('.popup__button');

function openPopup(popup) {
  popup.classList.add("popup__is-active");
  console.log(popup);
  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      closePopup(popup);
    }
  });
  popupClose.addEventListener("click", function () {
    closePopup(popup);
  });
  window.addEventListener("click", function (e) {
    if (e.target === popup) {
      closePopup(popup);
    }
  });
}

function closePopup(popup) {
  popup.classList.remove("popup__is-active");
  stopScrolling.classList.remove("stop-scrolling");
}


function generatePopup() {
  stopScrolling.classList.add("stop-scrolling");
  openPopup(popupOpen);
}


const popupName = document.querySelector('.popup__title');
const popupSubtitle = document.querySelector('.popup__subtitle');
const popupAddinfo = document.querySelector('.popup__addinfo');
const popupImage = document.querySelector('.popup__image');
const popupSize = document.querySelector('.popup__detail-size');
const popupComfort = document.querySelector('.popup__detail-comfort');
const popupMaterial = document.querySelector('.popup__detail-material');
const popupColor = document.querySelector('.popup__detail-color');
const popupWeight = document.querySelector('.popup__detail-weight');
const popupFix = document.querySelector('.popup__detail-fix');
const popupUsage = document.querySelector('.popup__detail-usage');
const popupUrl = document.querySelector('.popup__url');
const popupButton = document.querySelector('.popup__button');




export function generatePopupCard(data) {

  popupName.textContent = data.name;
  popupSubtitle.textContent = data.subtitle;
  popupAddinfo.textContent = data.addinfo;
  popupImage.src = data.link;
  popupImage.alt = data.name;
  popupSize.textContent = data.size;
  popupComfort.textContent = data.comfort;
  popupMaterial.textContent = data.material;
  popupColor.popupColor = data.color;
  // popupColor.textContent = `Цвет: ${data.colors.map((color) => `${color.color}`)}`;
  popupWeight.textContent = data.weight;
  popupFix.textContent = data.fix;
  popupUsage.textContent = data.usage;
  popupUrl.href = `${data.url}`;

  stopScrolling.classList.add("stop-scrolling");

  popupButton.addEventListener('click', closePopup(popupOpen));
  openPopup(popupOpen);  
}



// function closeEsc(evt) {
//   if (evt.key === "Escape") {
//     closePopup(popupOpen);
//   }
// }
// popupClose.addEventListener("click", function () {
//   closePopup(popupOpen);
// });

// window.addEventListener("click", function (e) {
//   if (e.target === popupOpen) {
//     closePopup(popupOpen);
//   }
// });

export { openPopup, closePopup, generatePopup }
