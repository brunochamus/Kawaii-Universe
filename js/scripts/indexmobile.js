document.addEventListener("DOMContentLoaded", function () {
    const customCarousel = document.querySelector(".custom-carousel");
    const customIndicatorsContainer = document.querySelector(".custom-carousel-indicators");

    let currentIndex = 0;

    function showSlide(index) {
        customCarousel.style.transform = `translateX(${-index * 100}%)`;
        updateIndicators(index);
    }

    function updateIndicators(index) {
        const indicators = Array.from(document.querySelectorAll(".custom-carousel-indicator"));
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle("active", i === index);
        });
    }

    function createIndicators() {
        for (let i = 0; i < customCarousel.children.length; i++) {
            const indicator = document.createElement("div");
            indicator.classList.add("custom-carousel-indicator");
            indicator.addEventListener("click", () => showSlide(i));
            customIndicatorsContainer.appendChild(indicator);
        }
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % customCarousel.children.length;
        showSlide(currentIndex);
    }

    function startAutoPlay() {
        setInterval(nextSlide, 3000);
    }

    createIndicators();
    showSlide(currentIndex);
    startAutoPlay();
});
