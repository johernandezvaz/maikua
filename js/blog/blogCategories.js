// Manejo de categorías del blog
export function initBlogCategories() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const blogCards = document.querySelectorAll('.blog-card');

    function filterCards(category) {
        blogCards.forEach(card => {
            const cardCategory = card.querySelector('.category').textContent.toLowerCase();
            if (category === 'all' || cardCategory === category) {
                card.style.display = 'block';
                card.style.opacity = '1';
            } else {
                card.style.display = 'none';
                card.style.opacity = '0';
            }
        });
    }

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Actualizar estado activo de los botones
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filtrar tarjetas
            const category = button.dataset.category;
            filterCards(category);
        });
    });
}