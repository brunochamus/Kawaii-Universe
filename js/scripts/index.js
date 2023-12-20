// Carrusel
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("carousel");
    const indicatorsContainer = document.getElementById("carousel-indicators");

    let currentIndex = 0;

    function showSlide(index) {
        carousel.style.transform = `translateX(${-index * 100}%)`;
        updateIndicators(index);
    }

    function updateIndicators(index) {
        const indicators = Array.from(document.querySelectorAll(".indicator"));
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle("active", i === index);
        });
    }

    function createIndicators() {
        for (let i = 0; i < carousel.children.length; i++) {
            const indicator = document.createElement("div");
            indicator.classList.add("indicator");
            indicator.addEventListener("click", () => showSlide(i));
            indicatorsContainer.appendChild(indicator);
        }
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % carousel.children.length;
        showSlide(currentIndex);
    }

    function startAutoPlay() {
        setInterval(nextSlide, 3000);
    }

    createIndicators();
    showSlide(currentIndex);
    startAutoPlay();
});


