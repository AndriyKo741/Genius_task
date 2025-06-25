const modal = document.querySelector(".backdrop");
const modalbtnOpen = document.querySelector(".modal-button-open");
const modalbtnClose = document.querySelector(".modal-button-close");

const toggleModal = () => modal.classList.toggle("is-hidden");

modalbtnOpen.addEventListener("click", toggleModal);
modalbtnClose.addEventListener("click", toggleModal);
