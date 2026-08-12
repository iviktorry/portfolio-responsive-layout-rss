import "../styles/main.css";

const burgerBtn = document.querySelector(".header__burger-btn");
const exitBtn = document.querySelector(".header__exit-btn");
const navigationList = document.querySelector("#nav");

const hideMenu = () => {
  navigationList.classList.remove("is-open");
  burgerBtn.classList.remove("hidden");
  exitBtn.classList.add("hidden");
};

const openMenu = () => {
  navigationList.classList.add("is-open");
  burgerBtn.classList.add("hidden");
  exitBtn.classList.remove("hidden");
};

document.querySelectorAll(".nav__link").forEach((link) => {
  link.addEventListener("click", hideMenu);
});

burgerBtn.addEventListener("click", openMenu);

exitBtn.addEventListener("click", hideMenu);
