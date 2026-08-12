import "../styles/main.css";

const burgerBtn = document.querySelector(".header__burger-btn");
const exitBtn = document.querySelector(".header__exit-btn");
const navigationList = document.querySelector("#nav");

const viewport = document.querySelector(".portfolio__viewport");
const slider = document.querySelector(".portfolio__slider");
const images = slider.querySelectorAll(".portfolio__img");

let currentX = 0;

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
  const img6 = images[5];
  const img7 = images[6];

  if (viewport && img6 && img7) {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const middlePoint =
          img6.offsetLeft +
          img6.offsetWidth +
          (img7.offsetLeft - (img6.offsetLeft + img6.offsetWidth)) / 2;

        const scrollPosition = middlePoint - viewport.clientWidth / 2;

        if (window.innerWidth >= 1440) {
          currentX = -scrollPosition;
          slider.style.transform = `translateX(${currentX}px)`;
        } else {
          viewport.style.scrollSnapType = "none";
          viewport.scrollTo({ left: scrollPosition, behavior: "instant" });
        }
      });
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  let isHoveringLeft = false;
  let isHoveringRight = false;
  let animationFrameID = null;
  const speed = 10;

  function moveSlider() {
    if (window.innerWidth < 1440) {
      cancelAnimationFrame(animationFrameID);
      return;
    }

    const maxScroll = slider.scrollWidth - viewport.clientWidth;

    if (isHoveringLeft) {
      currentX += speed;
      if (currentX > 0) currentX = 0;
    } else if (isHoveringRight) {
      currentX -= speed;
      if (currentX < -maxScroll) currentX = -maxScroll;
    }

    slider.style.transform = `translateX(${currentX}px)`;

    if (isHoveringLeft || isHoveringRight) {
      animationFrameID = requestAnimationFrame(moveSlider);
    }
  }

  window.addEventListener("mousemove", (e) => {
    if (window.innerWidth < 1440) return;

    const xPos = e.clientX;
    const screenWidth = window.innerWidth;
    const leftBoundary = screenWidth * 0.3;
    const rightBoundary = screenWidth * 0.7;
    const wasHovering = isHoveringLeft || isHoveringRight;

    if (xPos < leftBoundary) {
      isHoveringLeft = true;
      isHoveringRight = false;
    } else if (xPos > rightBoundary) {
      isHoveringLeft = false;
      isHoveringRight = true;
    } else {
      isHoveringLeft = false;
      isHoveringRight = false;
    }

    if ((isHoveringLeft || isHoveringRight) && !wasHovering) {
      moveSlider();
    }
  });

  document.addEventListener("mouseleave", () => {
    isHoveringLeft = false;
    isHoveringRight = false;
    cancelAnimationFrame(animationFrameID);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth < 1440) {
      slider.style.transform = "none";
      isHoveringLeft = false;
      isHoveringRight = false;
      cancelAnimationFrame(animationFrameID);
      currentX = 0;
    }
  });
});
