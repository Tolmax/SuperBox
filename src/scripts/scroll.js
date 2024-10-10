function getgoodsScroll1(evt) {
    if (evt) {
        document.querySelector('#boxes').scrollIntoView();
    }
}
function getgoodsScroll2(evt) {
    if (evt) {
        document.querySelector('#shelfs').scrollIntoView();
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
export {getgoodsScroll1, getgoodsScroll2, getgoodsScroll3, getgoodsScroll4}

// function getgoodsScroll(evt) {
//     if (evt === scrollSlider1) {
//         console.log(scrollSlider1)
//         document.querySelector('#boxes').scrollIntoView();
//     } else if (evt === scrollSlider2) {
//         document.querySelector('#shelfes').scrollIntoView();
//     } else if (evt === scrollSlider3) {
//         document.querySelector('#bigboxes').scrollIntoView();
//     } else if (evt === scrollSlider4) {
//         document.querySelector('#tumbs').scrollIntoView();
//     }
// }