// Nav hamburgerburger selections

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector(".navlist ul");
const nav = document.querySelector(".navlist");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
  });