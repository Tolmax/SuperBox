(()=>{"use strict";var e={957:(e,t,o)=>{e.exports=o.p+"d41ef0fa9374b491333f.jpg"},216:(e,t,o)=>{e.exports=o.p+"e88654746bba2806bc6a.jpg"},379:(e,t,o)=>{e.exports=o.p+"1f092d203b2c935295ec.jpg"},614:(e,t,o)=>{e.exports=o.p+"356136efbdb335d24942.jpg"},753:(e,t,o)=>{e.exports=o.p+"a4aa2a62f6e660db7074.jpg"},804:(e,t,o)=>{e.exports=o.p+"1f36ae1d727761b6828a.jpg"}},t={};function o(n){var c=t[n];if(void 0!==c)return c.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,o),r.exports}o.m=e,o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.p="",o.b=document.baseURI||self.location.href;var n=new URL(o(957),o.b),c=new URL(o(216),o.b),r=new URL(o(379),o.b),l=new URL(o(614),o.b),i=new URL(o(753),o.b),a=new URL(o(804),o.b),d=[{name:"Box1",link:"https://cdn.culture.ru/images/72342f9a-9051-55dd-ba3f-0fc1e1c066f4"},{name:"Box2",link:n},{name:"Box3",link:c},{name:"Box4",link:r},{name:"Box5",link:l},{name:"Box6",link:i},{name:"Box7",link:a},{name:"Box7",link:a}],u=document.querySelector("#card-template").content,s=document.querySelector(".goods__title"),m=document.querySelector(".goods__title-two"),p=document.querySelector(".goods__box"),f=document.querySelector(".goods__box-two");function y(e,t){var o=u.querySelector(".elements__card").cloneNode(!0);return o.querySelector(".elements__image").src=e,o.querySelector(".elements__name").textContent=t,o.querySelector(".elements__image").alt=t,o}var v=document.querySelector(".popup"),_=(v.querySelector(".popup__content"),v.querySelector(".popup__close")),S=document.querySelector(".body");function g(e){e.classList.remove("popup__is-active"),S.classList.remove("stop-scrolling")}var L=document.getElementById("slider"),q=document.querySelector(".arrow-left"),k=document.querySelector(".arrow-right"),x=document.querySelectorAll(".slider-image"),b=document.getElementById("bottom"),E=0,w=[],h=L.clientWidth;function B(e){w[E].classList.remove("active"),w[E=e].classList.add("active"),L.style.transform="translateX(-".concat(E*h,"px)")}var j=document.querySelector(".goods__image"),I=document.querySelector(".goods__image-two"),R=document.querySelector(".header__button"),U=document.querySelector(".one"),C=document.querySelector(".two"),V=document.querySelector(".three"),W=document.querySelector(".four");j.addEventListener("click",(function(){p.innerHTML="",s.style.cursor="pointer",p.style.flexWrap="wrap",d.forEach((function(e){var t=y(e.link,e.name);p.append(t)})),document.querySelector(".goods__title").textContent="Вернуться назад",document.querySelector(".goods__title").style.fontSize="18px",document.addEventListener("keydown",(function(e){"Escape"===e.key&&location.reload()})),s.addEventListener("click",(function(e){e&&location.reload()}))})),I.addEventListener("click",(function(){f.innerHTML="",m.style.cursor="pointer",f.style.flexWrap="wrap",d.forEach((function(e){var t=y(e.link,e.name);f.append(t)})),document.querySelector(".goods__title-two").textContent="Вернуться назад",document.querySelector(".goods__title-two").style.fontSize="18px",document.addEventListener("keydown",(function(e){"Escape"===e.key&&location.reload()})),m.addEventListener("click",(function(e){e&&location.reload()}))})),R.addEventListener("click",(function(){var e;S.classList.add("stop-scrolling"),(e=v).classList.add("popup__is-active"),document.addEventListener("keydown",(function(t){"Escape"===t.key&&g(e)})),_.addEventListener("click",(function(){g(e)})),window.addEventListener("click",(function(t){t.target===e&&g(e)}))})),U.addEventListener("click",(function(e){e&&document.querySelector("#boxes").scrollIntoView()})),C.addEventListener("click",(function(e){e&&document.querySelector("#shelfs").scrollIntoView()})),V.addEventListener("click",(function(e){e&&document.querySelector("#bigboxes").scrollIntoView()})),W.addEventListener("click",(function(e){e&&document.querySelector("#tumbs").scrollIntoView()})),q.addEventListener("click",(function(){var e=E-1;e<0&&(e=x.length-1),B(e)})),k.addEventListener("click",(function(){var e=E+1;e>x.length-1&&(e=0),B(e)})),x.forEach((function(){var e=document.createElement("div");e.className="pagination-circle",b.appendChild(e),w.push(e)})),w[0].classList.add("active"),w.forEach((function(e,t){e.addEventListener("click",(function(){return B(t)}))}))})();