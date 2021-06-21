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

// ? NavBar
const navIcon = document.getElementById("nav-icon");
const navList = document.getElementById("nav-list");

// ? modal
const modals = document.getElementById("modals");
const downCards = document.getElementById("down-cards");
const modalDefault = document.getElementById("modal-default");
const modalSuccess = document.getElementById("modal-success");

// ? Bookmark
const topBookmark = document.getElementById("top__bookmark");
const topIcon = document.getElementById("top__icon");

// ? modal card 2
const modalCard2 = document.getElementById("modal-card-2");
const radioModal2 = document.getElementById("radioModal2");
const modalFooter2 = document.getElementById("modal-footer-2");

// ? modal card 3
const modalCard3 = document.getElementById("modal-card-3");
const radioModal3 = document.getElementById("radioModal3");
const modalFooter3 = document.getElementById("modal-footer-3");

// *************************************
// ? ********* Show/Hiden Menu *********

const showMenu = () => {
   navList.classList.add("nav-list-block");
   navIcon.classList.add("nav-icon-hidden");
};
const hiddenMenu = () => {
   navList.classList.remove("nav-list-block");
   navIcon.classList.remove("nav-icon-hidden");
};

// *************************************
// ? ********* selected modal *********

const handleModalSelected = (e) => {
   switch (e.trim()) {
      case "radioModal2":
         radioModal2.setAttribute("checked", "");
         modalCard2.classList.add("modal-card-selected");
         modalFooter2.classList.remove("modal-footer-none");

         radioModal3.removeAttribute("checked");
         modalCard3.classList.remove("modal-card-selected");
         modalFooter3.classList.add("modal-footer-none");

         break;
      case "radioModal3":
         radioModal3.setAttribute("checked", "");
         modalCard3.classList.add("modal-card-selected");
         modalFooter3.classList.remove("modal-footer-none");

         radioModal2.removeAttribute("checked");
         modalCard2.classList.remove("modal-card-selected");
         modalFooter2.classList.add("modal-footer-none");

         break;
      default:
         console.log(e);
         break;
   }
};

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
// ? ******* Show/Hidden NavBar *******
// *************************************

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
// ? ****** Show/Hidden Bookmark ******
// *************************************

topBookmark.addEventListener("click", () => {
   topBookmark.classList.toggle("top__bookmark-select");
   topIcon.classList.toggle("top__icon-select");
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

modalDefault.addEventListener("click", (e) => {
   if (e.target.classList.contains("modal-footer__btn")) {
      // *************************************
      // ? ******* open modal success ********
      modalDefault.classList.add("modal-default-none");
      modalSuccess.classList.remove("modal-success-none");
   } else {
      // *************************************
      // ? ********* card selected **********
      if (e.target.classList.contains("modal-checkout__label")) {
         handleModalSelected(e.target.getAttribute("for"));
      }
   }
});

// *************************************
// ? ****** closed modal success *******
modalSuccess.addEventListener("click", (e) => {
   if (e.target.classList.contains("modal-success__btn")) {
      modalSuccess.classList.add("modal-success-none");
      modals.classList.add("modals-none");
   }
});
