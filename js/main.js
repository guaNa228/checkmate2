import {langData} from './reverse-language.js';


/* language */
const translateable = ["ru", "uk", "be", "kk"];

const userLang = navigator.language || navigator.userLanguage;
if (translateable.includes(userLang)) translate();

function translate() {
    let elements = document.getElementsByTagName("*");
    let tmp;
    let neededCounter = 0;
    for (let i = 0; i<elements.length; i++) {
        if (elements[i].tagName!="TITLE" && elements[i].innerText && elements[i].innerText.indexOf("\n")==-1 && 
        !elements[i].classList.contains("parters-grid__item") && !elements[i].parentElement.classList.contains("parters-grid__item") &&
        elements[i].tagName!="DIV" && elements[i].tagName!="H3" && !elements[i].classList.contains("footer-info__email")
         || (elements[i].parentElement && elements[i].tagName=="P" && elements[i].parentElement.classList.contains("partner-grid__item_become"))) {
            tmp = langData[neededCounter];
            langData[neededCounter] = elements[i].innerHTML;
            elements[i].innerHTML = tmp;
            neededCounter++;
        }
    }
}

/* Mobile menu */
const menuOpenBtn = document.querySelector(".header__top-panel__menu-button");
const menuCloseBtn = document.querySelector(".mobile-menu__close-button");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu__nav a");

menuOpenBtn.onclick = () => {
    menuOpen();
}

menuCloseBtn.onclick = () => {
    menuClose();
}

function menuOpen() {
    mobileMenu.classList.add("mobile-menu_active");
    mobileMenu.classList.remove("mobile-menu_closed");
    mobileMenu.classList.remove("mobile-menu_virgin");
    disableScroll();
}

function menuClose() {
    mobileMenu.classList.remove("mobile-menu_active");
    mobileMenu.classList.add("mobile-menu_closed");
    enableScroll();
}

mobileMenuLinks.forEach((item) => {
    item.onclick = () => {menuClose();}
});

function disableScroll() {
    scrollTop = 
      window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = 
      window.pageXOffset || document.documentElement.scrollLeft,

        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function enableScroll() {
    window.onscroll = function() {};
}