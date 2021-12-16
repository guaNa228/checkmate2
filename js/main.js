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
}

function menuClose() {
    mobileMenu.classList.remove("mobile-menu_active");
    mobileMenu.classList.add("mobile-menu_closed");
}

mobileMenuLinks.forEach((item) => {
    item.onclick = () => {menuClose();}
});