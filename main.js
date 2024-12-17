
// Initialize all modules when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initTabs();
    initContactForm();
    initFooter();
    initMobileMenu();
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Animation for service cards
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    const body = document.body;
  
    menuToggle.addEventListener("click", function () {
      // Alternar la clase 'active' en el botón y en los enlaces
      menuToggle.classList.toggle("active");
      navLinks.classList.toggle("active");
      body.classList.toggle("menu-open");
    });
  
    // Cerrar el menú si se hace clic en un enlace
    navLinks.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        menuToggle.classList.remove("active");
        navLinks.classList.remove("active");
        body.classList.remove("menu-open");
      }
    });
  });
