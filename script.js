const navIcon = document.getElementById("nav-icon");

// ? nav list
const navList = document.getElementById("nav-list");

// ? modal
const modals = document.getElementById("modals");
const downCards = document.getElementById("down-cards");

const modalDefault = document.getElementById("modal-default");
const modalSuccess = document.getElementById("modal-success");

// ? altura del documento
const body = document.body;
const html = document.documentElement;
const height = Math.max(
   body.scrollHeight,
   body.offsetHeight,
   html.clientHeight,
   html.scrollHeight,
   html.offsetHeight
);

// *************************************
// ? ********* loaded the file *********
// *************************************

document.addEventListener("DOMContentLoaded", () => {
   modals.style.height = height + "px";
});

document.body.addEventListener("resize", () => {
   modals.style.height = height + "px";
});

// *************************************
// ? ********* Show/Hiden Menu *********
// *************************************

const showMenu = () => {
   navList.classList.add("nav-list-block");
   navIcon.classList.add("nav-icon-hidden");
};
const hiddenMenu = () => {
   navList.classList.remove("nav-list-block");
   navIcon.classList.remove("nav-icon-hidden");
};

navIcon.addEventListener("click", (e) => {
   e.stopPropagation();
   showMenu();
});

navList.addEventListener("click", (e) => {
   if (
      e.target.classList.contains("nav-list__link") ||
      e.target.classList.contains("nav-list__icon")
   ) {
      hiddenMenu();
   }
});

// *************************************
// ? ******** Show/Hiden modal ********
// *************************************

downCards.addEventListener("click", (e) => {
   if (
      e.target.classList.contains("card__btn") &&
      !e.target.classList.contains("card__btn-disable")
   ) {
      modals.classList.remove("modals-none");
      modalDefault.classList.remove("modal-default-none");
   }
});

modals.addEventListener("click", (e) => {
   if (e.target.classList.contains("modal-default__icon")) {
      modals.classList.add("modals-none");
      modalDefault.classList.add("modal-default-none");
   }
});

// *************************************
// ? ********** modal sucess ***********
// *************************************

modalDefault.addEventListener("click", (e) => {
   if (e.target.classList.contains("modal-footer__btn")) {
      modalDefault.classList.add("modal-default-none");
      modalSuccess.classList.remove("modal-success-none");
   }
});

modalSuccess.addEventListener("click", (e) => {
   // modal-success__btn
   if (e.target.classList.contains("modal-success__btn")) {
      modalSuccess.classList.add("modal-success-none");
      modals.classList.add("modals-none");
   }
});
