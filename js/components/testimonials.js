export function initTestimonialsCarousel() {
    const testimonialsSection = document.querySelector('.testimonials-section');
    if (!testimonialsSection) return;

    const testimonialsGrid = testimonialsSection.querySelector('.testimonials-grid');
    if (!testimonialsGrid) return;

    // Convertir grid en carrusel
    testimonialsGrid.className = 'testimonials-carousel';
    const testimonials = testimonialsGrid.querySelectorAll('.testimonial-card');

    // Crear navegación con puntos
    const navContainer = document.createElement('div');
    navContainer.className = 'carousel-nav';
    testimonials.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = `carousel-dot${index === 0 ? ' active' : ''}`;
        dot.setAttribute('aria-label', `Testimonio ${index + 1}`);
        navContainer.appendChild(dot);
    });
    testimonialsGrid.after(navContainer);

    // Crear flechas de navegación
    const arrowsContainer = document.createElement('div');
    arrowsContainer.className = 'carousel-arrows';
    arrowsContainer.innerHTML = `
        <button class="carousel-arrow prev" aria-label="Anterior">
            <i class="fas fa-chevron-left"></i>
        </button>
        <button class="carousel-arrow next" aria-label="Siguiente">
            <i class="fas fa-chevron-right"></i>
        </button>
    `;
    testimonialsGrid.appendChild(arrowsContainer);

    let currentIndex = 0;
    const dots = navContainer.querySelectorAll('.carousel-dot');
    const prevButton = arrowsContainer.querySelector('.prev');
    const nextButton = arrowsContainer.querySelector('.next');

    function showTestimonial(index) {
        testimonials.forEach(card => {
            card.classList.remove('active');
        });
        dots.forEach(dot => {
            dot.classList.remove('active');
        });

        testimonials[index].classList.add('active');
        dots[index].classList.add('active');
    }

    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }

    function prevTestimonial() {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentIndex);
    }

    // Event listeners
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            showTestimonial(currentIndex);
        });
    });

    prevButton.addEventListener('click', prevTestimonial);
    nextButton.addEventListener('click', nextTestimonial);

    // Mostrar el primer testimonio
    showTestimonial(0);

   

    // Soporte para gestos táctiles
    let touchStartX = 0;
    let touchEndX = 0;

    testimonialsGrid.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
        stopAutoplay();
    }, { passive: true });

    testimonialsGrid.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                nextTestimonial();
            } else {
                prevTestimonial();
            }
        }

        startAutoplay();
    }, { passive: true });
}