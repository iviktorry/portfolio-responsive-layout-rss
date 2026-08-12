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

window.addEventListener("load", () => {
  console.log("you");
  const viewport = document.querySelector(".portfolio__viewport");
  const slider = document.querySelector(".portfolio__slider");
  const images = slider.querySelectorAll(".portfolio__img");

  const img6 = images[5];
  const img7 = images[6];

  console.log("you");
  if (viewport && img6 && img7) {
    const middlePoint =
      img6.offsetLeft +
      img6.offsetWidth +
      (img7.offsetLeft - (img6.offsetLeft + img6.offsetWidth)) / 2;

    const scrollPosition = middlePoint - viewport.clientWidth / 2;

    viewport.style.scrollSnapType = "none";

    viewport.scrollTo({
      left: scrollPosition,
      behavior: "instant",
    });
    console.log("you");
  }
});
