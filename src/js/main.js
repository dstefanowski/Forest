// alert('Kod JS podpięty prawidłowo')
// ============================================================================
// =============================================================================
// Scroll-reveal & scrollSpy

const homeTab = document.querySelector(".home-scroll");
const aboutusTab = document.querySelector(".aboutus-scroll");
const offerTab = document.querySelector(".offer-scroll");
const contactTab = document.querySelector(".contact-scroll");

let prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;

  if (currentScrollPos < 100) {
    document.querySelector(".navbar").classList.remove("scroll-down");
  } else if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar").classList.remove("scroll-down");
    document.querySelector(".navbar").classList.add("scroll-up");
  } else {
    document.querySelector(".navbar").classList.remove("scroll-up");
    document.querySelector(".navbar").classList.add("scroll-down");
  }
  prevScrollpos = currentScrollPos;

  if (currentScrollPos < 412) {
    homeTab.classList.add("scroll-active");
    aboutusTab.classList.remove("scroll-active");
    offerTab.classList.remove("scroll-active");
    contactTab.classList.remove("scroll-active");
  } else if (currentScrollPos > 412 && currentScrollPos < 800) {
    homeTab.classList.remove("scroll-active");
    offerTab.classList.remove("scroll-active");
    aboutusTab.classList.add("scroll-active");
  } else if (currentScrollPos > 1000) {
    homeTab.classList.remove("scroll-active");
    aboutusTab.classList.remove("scroll-active");
    offerTab.classList.add("scroll-active");
  } else {
    homeTab.classList.remove("scroll-active");
  }
};

// ===============================================================================
// Rellax js

let rellax = new Rellax(".rellax");

// ============================================================================
// Burger button - MY OWN

const burgerBtn = document.querySelector(".burger-btn");
const burgerIcon = document.querySelector(".burger-btn__icon");
const sideNav = document.querySelector(".side-nav");
const navbar = document.querySelector(".navbar");
const navItems = document.querySelectorAll(".nav-item");

const navAction = () => {
  burgerIcon.classList.toggle("active");
  sideNav.classList.toggle("visible");
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      burgerIcon.classList.add("active");
      sideNav.classList.remove("visible");
    });
  });
};

burgerBtn.addEventListener("click", navAction);

// ============================================================================
// OFFER-CARDS

const optionBtns = document.querySelectorAll(".option-btn");

const optionsChange = () => {
  optionBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("default")) {
        btn.classList.remove("default");
      } else {
        optionBtns.forEach((otherBtn) => {
          if (otherBtn.classList.contains("default")) {
            otherBtn.classList.remove("default");
          }
        });
        btn.classList.add("default");
      }
    });
  });
};

optionsChange();

// =========================================================================
// ==============================================================================
// Popup

const popup = document.querySelector(".popup");
const sendBtn = document.querySelector(".send-button");
const closeBtn = document.querySelector(".close");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector(".message-text");
const checkbox = document.querySelector("#checkbox");

sendBtn.addEventListener("click", () => {
  if (
    nameInput.checkValidity() &&
    emailInput.checkValidity() &&
    messageInput.checkValidity() &&
    checkbox.checkValidity()
  ) {
    window.location.href = "../../thankyou.html";
  } else {
    alert("Wypełnij wszystkie pola formularza!");
  }
});
