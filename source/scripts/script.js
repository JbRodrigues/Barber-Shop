const carouselSlides = document.querySelectorAll(".carousel-slide");
let slideIndex = 0;

function showSlide() {
    carouselSlides.forEach(slide => slide.classList.remove("active"));
    carouselSlides[slideIndex].classList.add("active");
    slideIndex++;
    if (slideIndex === carouselSlides.length) {
        slideIndex = 0;
    }
    setTimeout(showSlide, 4000);
}

showSlide();

ScrollReveal({ reset: true });
ScrollReveal().reveal('.benefitsTitle');
ScrollReveal().reveal('.benefitsText');
ScrollReveal().reveal('.benefitsText', { delay: 300 });
ScrollReveal().reveal('.subText', { delay: 300 });
ScrollReveal().reveal('.featureText', { delay: 300 });

