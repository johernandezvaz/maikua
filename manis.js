// Initialize all modules when DOM is loaded
import { initProjectTabs } from './js/projectTabs.js';
import { initMobileMenu } from './js/mobileMenu.js';
import { initNavigation, initServiceNavigation } from './js/navi.js';
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
    initServiceNavigation();
});