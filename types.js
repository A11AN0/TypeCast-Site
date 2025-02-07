const typeButtons = document.querySelectorAll(
    ".types__functional__type-selector__button",
);
const scrollContainer = document.querySelector(
    ".types__functional__type-selector__buttons",
);

typeButtons.forEach((typeButton) => {
    typeButton.addEventListener("click", (event) => {
        typeButtons.forEach((btn) =>
            btn.classList.remove(
                "types__functional__type-selector__button--selected",
            ),
        );
        event.currentTarget.classList.add(
            "types__functional__type-selector__button--selected",
        );
        event.currentTarget.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest",
        });
    });
});

scrollContainer.addEventListener("scroll", () => {
    scrollContainer.classList.add("scrolling");
    clearTimeout(scrollContainer.scrollTimeout);

    scrollContainer.scrollTimeout = setTimeout(() => {
        scrollContainer.classList.remove("scrolling");
    }, 300);
});
