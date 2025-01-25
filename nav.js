//By A11AN0 :)

const burger = document.querySelector(".mainNav__container__logo__burger");
const desktopMenu = document.querySelector(".mainNav__container__desktopMenu");
const navContainer = document.querySelector(".mainNav__container");

burger.addEventListener("click", () => {
    burger.classList.toggle("is-active");
    desktopMenu.classList.toggle("is-open");
    navContainer.classList.toggle("mainNav__container--expanded");
});
