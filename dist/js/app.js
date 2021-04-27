const burger = document.querySelector("#btnHamburger");
const headerMenu = document.querySelector(".header__menu");
const body = document.querySelector("body");
const navbar = document.getElementById("header");

// STICKY NAVIGATION BAR
window.onscroll = function () {
  stickyNav()
};
const sticky = navbar.offsetTop;

function stickyNav() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}



// BURGER MENU IN MOBILE MODE 

burger.addEventListener('click', () => {
  headerMenu.classList.toggle('open');
  if (headerMenu.classList.contains('open')) {
    burger.classList.add('open');
    body.classList.add('no-scroll');
  } else {
    burger.classList.remove('open');
    body.classList.remove('no-scroll');
  }
})

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