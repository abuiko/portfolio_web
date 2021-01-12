const burger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");
const body = document.querySelector("body");

burger.addEventListener("click", () => {
  header.classList.toggle("open");
  body.classList.add("no-scroll");
  if (header.classList.contains("open")) {
    fadeElems.forEach((element, index) => {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  } else {
    body.classList.remove("no-scroll");
    fadeElems.forEach((element, index) => {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  }
});
