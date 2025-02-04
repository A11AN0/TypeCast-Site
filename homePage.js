function setupCarousel(carouselId, velocity, direction) {
    const carousel = document.getElementById(carouselId);
    const items = Array.from(carousel.children);

    const duplicates = items.map((item) => item.cloneNode(true));
    duplicates.forEach((clone) => carousel.appendChild(clone));

    const totalHeight = carousel.scrollHeight / 2; // Only animate half to stop gaps
    const duration = totalHeight / velocity;

    carousel.style.animation = `${
        direction === "down" ? "scroll-down" : "scroll-up"
    } ${duration}s linear infinite`;
}

// Calling to start my carousels
setupCarousel("carousel1", 5, "up");
setupCarousel("carousel2", 6, "down");
setupCarousel("carousel3", 4, "up");
