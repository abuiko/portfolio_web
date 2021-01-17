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

const contactForm = document.querySelector(".contact__form");
const closeContact = document.querySelector(".form-wrapper span");
const contactBtn = document.querySelector(".contact__button");

contactBtn.addEventListener("click", () => {
  contactForm.classList.add("active");
  body.classList.add("no-scroll");
  closeContact.addEventListener("click", () => {
    contactForm.classList.remove("active");
    body.classList.remove("no-scroll");
  });
});
