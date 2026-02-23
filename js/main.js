document.addEventListener("DOMContentLoaded", function () {

    const sliders = document.querySelectorAll(
        '.art-cable-por-tema, .art-camara-por-tema, .art-fibra-por-tema, .art-red-por-tema'
    );

    sliders.forEach(slider => {

        const btnRight = slider.parentElement.querySelector('.btn-right');
        const btnLeft = slider.parentElement.querySelector('.btn-left');

        if (btnRight && btnLeft) {

            btnRight.addEventListener('click', () => {
                slider.scrollBy({
                    left: 300,
                    behavior: 'smooth'
                });
            });

            btnLeft.addEventListener('click', () => {
                slider.scrollBy({
                    left: -300,
                    behavior: 'smooth'
                });
            });

        }

    });

});
