const popupOpen = document.querySelector(".popup");
const popupClose = popupOpen.querySelector(".popup__close");
const stopScrolling = document.querySelector(".body");

function openPopup(popup) {
  popup.classList.add("popup__is-active");
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






// function closeEsc(evt) {
//   if (evt.key === "Escape") {
//     closePopup(popupOpen);
//   }
// }

// function generatePopup(data) {
//   popupImage.src = data.posterUrlPreview;
//   popupImage.alt = data.nameRu;
//   popupTitle.textContent = `"${data.nameRu}"    `;
//   popupYear.textContent = data.year;
//   popupGaner.textContent = `Жанр: ${data.genres.map(
//     (genre) => ` ${genre.genre}`
//   )}`;
//   popupRuntime.textContent = `Продолжительность: ${data.filmLength} минут`;
//   popupUrl.href = `${data.webUrl}`;
//   popupUrl.textContent = `${data.webUrl}`;
//   popupDescrip.textContent = `Описание: ${data.description}`;
//   stopScrolling.classList.add("stop-scrolling");
//   openPopup(popupOpen);
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
