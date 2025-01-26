//By A11AN0 :) - ADT202
const buttons = document.querySelectorAll(
    ".mainNav__container__desktopMenu__button",
);
const currentPath = window.location.pathname;
const burger = document.querySelector(".mainNav__container__logo__burger");
const desktopMenu = document.querySelector(".mainNav__container__desktopMenu");
const navContainer = document.querySelector(".mainNav__container");

burger.addEventListener("click", () => {
    burger.classList.toggle("is-active");
    desktopMenu.classList.toggle("is-open");
    navContainer.classList.toggle("mainNav__container--expanded");
});

buttons.forEach((button, index) => {
    if (
        (index === 0 && currentPath.toLowerCase().includes("about")) ||
        (index === 1 && currentPath.toLowerCase().includes("types")) ||
        (index === 2 && currentPath.toLowerCase().includes("contact"))
    ) {
        button.classList.add("is-active");
    }

    button.addEventListener("click", () => {
        if (index === 0) {
            window.location.href = "/about";
        } else if (index === 1) {
            window.location.href = "/types";
        } else if (index === 2) {
            window.location.href = "/contact";
        }
    });
});

const logo = document.querySelector(".mainNav__container__logo__name");
const svg = document.querySelector(".mainNav__container__logo__svg");

logo.addEventListener("click", () => {
    window.location.href = "/";
});

svg.addEventListener("click", () => {
    window.location.href = "/";
});
