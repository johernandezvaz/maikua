export function initFooter() {
    // Smooth scroll for footer navigation links
    document.querySelectorAll('.footer-links a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Current year for copyright
    const yearSpan = document.querySelector('.current-year');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  }