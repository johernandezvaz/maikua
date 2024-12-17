// Navigation functionality
export function initNavigation() {
    // Update active link based on scroll position
    function updateActiveLink() {
      const sections = document.querySelectorAll('section[id], header[id]');
      const navLinks = document.querySelectorAll('.nav-links a, .footer-links a');
      
      const scrollPosition = window.scrollY + 100; // Offset for better detection
  
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
  
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }
  
    // Smooth scroll functionality
    function initSmoothScroll() {
      const links = document.querySelectorAll('.nav-links a[href^="#"], .footer-links a[href^="#"]');
      
      links.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('href').slice(1);
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });
    }
  
    // Initialize scroll event listener
    window.addEventListener('scroll', updateActiveLink);
    
    // Initialize smooth scroll
    initSmoothScroll();
    
    // Initial call to set active link
    updateActiveLink();
  }