// Fonction pour créer un diaporama automatique
function startSlideshows() {
    const slideshows = document.querySelectorAll('.slideshow-container');

    slideshows.forEach(slideshow => {
        let slides = slideshow.getElementsByTagName('img');
        let currentSlide = 0;
        const intervalTime = 5000; // Temps d'intervalle en millisecondes (5 secondes)
        const slideCount = slides.length;

        // Fonction pour passer à la prochaine slide
        function nextSlide() {
            slides[currentSlide].style.display = 'none';
            currentSlide = (currentSlide + 1) % slideCount;
            slides[currentSlide].style.display = 'block';
        }

        // Afficher la première slide et démarrer le diaporama
        slides[currentSlide].style.display = 'block';
        setInterval(nextSlide, intervalTime);
    });
}

// Démarrer les diaporamas une fois que le DOM est chargé
document.addEventListener('DOMContentLoaded', startSlideshows);
