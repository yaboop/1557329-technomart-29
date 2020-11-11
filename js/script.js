const previousArrow = document.querySelector(".previous-arrow");
const nextArrow = document.querySelector(".next-arrow");
let slidePerfs = document.querySelector(".slide-perforators");
let slideDrills = document.querySelector(".slide-drills");
const Bullets = document.querySelectorAll(".bullet")

function callback(evt) {
    slidePerfs.classList.toggle("display-none");
    slideDrills.classList.toggle("display-none");
    Bullets[0].classList.toggle("selected-bullet");
    Bullets[1].classList.toggle("selected-bullet");
}

previousArrow.addEventListener("click", callback);
nextArrow.addEventListener("click", callback);

for (let Bullet of Bullets) {
    Bullet.addEventListener("click", function () {
        if (!Bullet.classList.contains("selected-bullet")){
            callback();
        }    
    });
}



const servicesItems = document.querySelectorAll(".services-item");
const serviceButtons = document.querySelectorAll(".services-slider-button");

for (let i = 0; i < serviceButtons.length; i++) {
    serviceButtons[i].addEventListener("click", function () {
        if (!serviceButtons[i].classList.contains("active-button")) {
            const activeButton = document.querySelector(".active-button");
            const activeItem = document.querySelector(".active-item");
            activeButton.classList.remove("active-button");
            activeItem.classList.remove("active-item");
            serviceButtons[i].classList.add("active-button");
            servicesItems[i].classList.add("active-item");
        }   
    });
}

const mapLink = document.querySelector(".modal-map");
const modalMap = document.querySelector(".modal-map-wrapper");
const mapClose = modalMap.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMap.classList.remove("display-none");
});
  
mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMap.classList.add("display-none");
});
  
window.addEventListener("keydown", function (evt) {
if (evt.key === "Escape") {
    if (!modalMap.classList.contains("display-none")) {
    evt.preventDefault();
    modalMap.classList.add("display-none");
    }
}
});



const feedbackModal = document.querySelector(".feedback-modal-window");
const feedbackClose = feedbackModal.querySelector(".modal-close");
const feedbackButton = document.querySelector(".contacts-button");
const feedbackInfo = feedbackModal.querySelector(".feedback-input-name");
const feedbackForm = feedbackModal.querySelector(".feedback-form");
const feedbackEmail = feedbackModal.querySelector(".feedback-input-email");
const feedbackLetter = feedbackModal.querySelector(".letter-area");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

feedbackButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackModal.classList.remove("display-none");
    if (storage) {
        feedbackInfo.value = storage;
        feedbackEmail.focus();
    } else {
        feedbackInfo.focus();
    } 
});

feedbackClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackModal.classList.add("display-none");
    feedbackModal.classList.remove("modal-error");
});

feedbackForm.addEventListener("submit", function (evt) {
    if (!feedbackInfo.value || !feedbackEmail.value || !feedbackLetter.value) {
      evt.preventDefault();
        feedbackModal.classList.remove("modal-error");
        feedbackModal.offsetWidth = feedbackModal.offsetWidth;
        feedbackModal.classList.add("modal-error");
    } else if (isStorageSupport) {localStorage.setItem("login", feedbackInfo.value);
        localStorage.setItem("email", feedbackEmail.value);
      }
});



const buyButtons = document.querySelectorAll(".button-buy");
const modalAdd = document.querySelector(".add-to-cart");
const addClose = modalAdd.querySelector(".modal-close");
const continueBuy = modalAdd.querySelector(".continue");

for (let buyButton of buyButtons) {
    buyButton.addEventListener("click", function (evt) {
        evt.preventDefault();
        modalAdd.classList.remove("display-none");
    });
    addClose.addEventListener("click", function (evt) {
        evt.preventDefault();
        modalAdd.classList.add("display-none");
    });
    continueBuy.addEventListener("click", function (evt) {
        evt.preventDefault();
        modalAdd.classList.add("display-none");
    });

    window.addEventListener("keydown", function (evt) {
        if (evt.key === "Escape") {
            if (!modalAdd.classList.contains("display-none")) {
            evt.preventDefault();
            modalAdd.classList.add("display-none");
            }
        }
    });
}