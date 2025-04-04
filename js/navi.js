// Navigation functionality
export function initNavigation() {
  // Update active link based on scroll position
  function updateActiveLink() {
      const sections = document.querySelectorAll('section[id], header[id]');
      const navLinks = document.querySelectorAll('.nav-links a, .footer-links a');
      
      const scrollPosition = window.scrollY + 100;
  
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
  
  window.addEventListener('scroll', updateActiveLink);
  initSmoothScroll();
  updateActiveLink();
}

// Service navigation functionality
export function initServiceNavigation() {
  const serviceButtons = document.querySelectorAll('.service-nav-btn');
  const serviceAreas = document.querySelectorAll('.service-area');

  if (!serviceButtons.length || !serviceAreas.length) {
      console.warn('Service navigation elements not found');
      return;
  }

  function showServiceArea(areaId) {
      serviceAreas.forEach(area => {
          if (area.id === areaId) {
              area.style.display = 'block';
              // Pequeño retraso para permitir que el display: block tome efecto
              setTimeout(() => {
                  area.classList.add('active');
              }, 10);
          } else {
              area.classList.remove('active');
              // Esperar a que termine la transición antes de ocultar
              setTimeout(() => {
                  if (!area.classList.contains('active')) {
                      area.style.display = 'none';
                  }
              }, 300);
          }
      });
  }

  serviceButtons.forEach(button => {
      button.addEventListener('click', () => {
          const areaId = `${button.dataset.area}-services`;
          
          // Actualizar botones
          serviceButtons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');
          
          // Mostrar área correspondiente
          showServiceArea(areaId);
      });
  });

  // Mostrar área inicial
  const activeButton = document.querySelector('.service-nav-btn.active');
  if (activeButton) {
      const initialAreaId = `${activeButton.dataset.area}-services`;
      showServiceArea(initialAreaId);
  }
}