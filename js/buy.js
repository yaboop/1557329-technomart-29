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