const navIcon = document.getElementById("nav-icon");

// ? nav list
const navList = document.getElementById("nav-list");

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
