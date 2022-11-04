// Change the navbar style during scroll

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

//Hamburger Animation when responsive

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const quote1 = document.querySelector(".quote-1");
const quote2 = document.querySelector(".quote-2");
const quote3 = document.querySelector(".quote-3");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  quote1.classList.toggle("off");
  quote2.classList.toggle("off");
  quote3.classList.toggle("off");
});
