// Carrusel

function setupCarousel() {
    const container = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.slide');
    let offset = 0;
    let slideID = 0;

    setInterval(() => {
        offset = slides[0].offsetWidth;
        container.style.transition = "left ease-in-out 500ms";
        container.style.left = -offset + 'px';
        setTimeout(() => {
            container.style.transition = "none";
            slides[slideID].style.order = slides.length - 1;
            container.style.left = 0;
            slideID++;
            if (slideID === slides.length) {
                slideID = 0;
                slides.forEach(slide => {
                    slide.style.order = "initial";
                });
            }
        }, 500);
    }, 3000);
}

// Navbar

function setupNavbar() {
    const containernav = document.querySelector('.slider');
    const slidesnav = document.querySelectorAll('.slidenavelement');
    let slidenavelementID = 0;
    let isMouseOver = false;

    function animateSlider() {
        const offset = slidesnav[0].offsetWidth;
        containernav.style.transition = "left ease-in-out 1200ms";
        containernav.style.left = -offset + 'px';

        containernav.addEventListener('transitionend', function handleTransitionEnd() {
            containernav.style.transition = "none";
            slidesnav[slidenavelementID].style.order = slidesnav.length - 1;
            containernav.style.left = 0;
            slidenavelementID++;

            if (slidenavelementID === slidesnav.length) {
                slidenavelementID = 0;
                slidesnav.forEach(slidenavelement => {
                    slidenavelement.style.order = "initial";
                });
            }

            if (!isMouseOver) {
                requestAnimationFrame(animateSlider);
            }
        }, { once: true });
    }

    function stopAnimation() {
        isMouseOver = true;
    }

    function startAnimation() {
        isMouseOver = false;
        animateSlider();
    }

    containernav.addEventListener('mouseenter', stopAnimation);
    containernav.addEventListener('mouseleave', startAnimation);

    startAnimation();
}

// Llamadas a las funciones para configurar cada parte
setupCarousel();
setupNavbar();
