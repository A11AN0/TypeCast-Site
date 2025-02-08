(async () => {
    const paragraph1 = document.querySelectorAll(
        ".types__information__typeSelection__card__textContainer__paragraph1",
    );
    const paragraph2 = document.querySelector(
        ".types__information__typeSelection__card__textContainer__paragraph2",
    );
    const pokemonContainer = document.querySelector(
        ".types__information__typeSelection__card__pokemonContainer",
    );

    const typeButtons = document.querySelectorAll(
        ".types__functional__type-selector__button",
    );
    const scrollContainer = document.querySelector(
        ".types__functional__type-selector__buttons",
    );

    const noSelection = document.querySelector(
        ".types__information__noSelection",
    );

    const typeSelection = document.querySelector(
        ".types__information__typeSelection",
    );

    // Fetch type data
    const response = await fetch(
        "https://cdn.jsdelivr.net/gh/A11AN0/TypeCast-Site@053ba54f0801a7d43054d209c264332e592c7b79/types.json",
    );
    const typeData = await response.json();

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

            noSelection.style.display = "none";
            typeSelection.style.display = "flex";

            const type = event.currentTarget.textContent.toLowerCase().trim();

            if (typeData[type]) {
                paragraph2.querySelector("p").textContent =
                    typeData[type].paragraph2;

                paragraph1.forEach((p) => {
                    p.style.backgroundColor = typeData[type].background;
                    p.style.color = typeData[type].textColor;
                    p.querySelector("p").textContent =
                        typeData[type].paragraph1;
                });

                const pokemon = typeData[type].pokemon;

                // Update Pokémon
                pokemonContainer.innerHTML = pokemon
                    .map(
                        (p) => `
                    <div class="types__information__typeSelection__card__pokemonContainer__pokemon">
                        <img src="${p.image}" alt="${
                            p.name
                        }" class="types__information__typeSelection__card__pokemonContainer__pokemon__img" />
                        <p class="types__information__typeSelection__card__pokemonContainer__pokemon__dexNo">National No ${
                            p.dex
                        }</p>
                        <p class="types__information__typeSelection__card__pokemonContainer__pokemon__name">${
                            p.name
                        }</p>
                        <div class="types__information__typeSelection__card__pokemonContainer__pokemon__types">
                            ${p.types
                                .map(
                                    (t) =>
                                        `<div class="types__information__typeSelection__card__pokemonContainer__pokemon__types__type types__information__typeSelection__card__pokemonContainer__pokemon__types__type--${t.toLowerCase()}">${t}</div>`,
                                )
                                .join("")}
                        </div>
                    </div>
                `,
                    )
                    .join("");
            }
        });
    });

    scrollContainer.addEventListener("scroll", () => {
        scrollContainer.classList.add("scrolling");
        clearTimeout(scrollContainer.scrollTimeout);

        scrollContainer.scrollTimeout = setTimeout(() => {
            scrollContainer.classList.remove("scrolling");
        }, 300);
    });
})();
