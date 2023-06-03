const slides = document.querySelectorAll('.slide');
const arrows = document.querySelectorAll('.arrow');
let currentSlide = 0;

function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    slides[index].classList.add('active');
    currentSlide = index;
}

function nextSlide() {
    const nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
}

function prevSlide() {
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
}

arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
        if (arrow.classList.contains('arrow-left')) {
            prevSlide();
        } else {
            nextSlide();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    showSlide(currentSlide);
});
