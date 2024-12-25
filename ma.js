// Initialize all modules when DOM is loaded
import { initProjectTabs } from './js/projectTabs.js';
import { initMobileMenu } from './js/mobileMenu.js';
import { initNavigation } from './js/navigation.js';
import { initTabs } from './js/tabs.js';
import { initContactForm } from './js/contactForm.js';
import { initFooter } from './js/footer.js';
import { initBlog } from './js/blog/index.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing...');
    initNavigation();
    initTabs();
    initContactForm();
    initFooter();
    initMobileMenu();
    initProjectTabs();
    initBlog(); 
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