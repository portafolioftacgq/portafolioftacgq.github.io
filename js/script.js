const carouselInner = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

function showSlide(index) {
    const translateX = -index * 100 + '%';
    carouselInner.style.transform = `translateX(${translateX})`;
    items.forEach(item => item.classList.remove('active'));
    items[index].classList.add('active');
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showSlide(currentIndex);
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Automatización (opcional):
setInterval(nextSlide, 5000); // Cambia la imagen cada 5 segundos

// Modal para mostrar la imagen en grande
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal-content");
const closeModal = document.querySelector(".close-modal");
const images = document.querySelectorAll('.carousel-item img');

images.forEach(image => {
    image.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    }
});

closeModal.onclick = function() {
    modal.style.display = "none";
}