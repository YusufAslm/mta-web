const popupDiv = document.querySelector(".popup-content");
const popupBtn = document.querySelector("#button-popup");

popupBtn.addEventListener("click", () => {
    popupDiv.classList.toggle("un-visible");
});
