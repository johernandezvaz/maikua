export function initMobileMenu() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  const body = document.body;

  if (!mobileMenuBtn || !navLinks) {
      // console.error('Mobile menu elements not found');
      return;
  }

  // console.log('Mobile menu initialized'); // Debug log

  const toggleMenu = () => {
      // console.log('Toggle menu clicked'); // Debug log
      mobileMenuBtn.classList.toggle('active');
      navLinks.classList.toggle('active');
      body.classList.toggle('menu-open');
  };

  const closeMenu = () => {
      mobileMenuBtn.classList.remove('active');
      navLinks.classList.remove('active');
      body.classList.remove('menu-open');
  };

  // Eliminar eventos existentes antes de agregar nuevos
  mobileMenuBtn.removeEventListener('click', toggleMenu);
  
  // Agregar nuevo evento click
  mobileMenuBtn.addEventListener('click', toggleMenu);

  // Cerrar menú al hacer clic en los enlaces
  navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
  });

  // Cerrar menú al hacer clic fuera
  document.addEventListener('click', (e) => {
      if (navLinks.classList.contains('active') &&
          !navLinks.contains(e.target) &&
          !mobileMenuBtn.contains(e.target)) {
          closeMenu();
      }
  });

  // Prevenir cierre al hacer clic dentro del menú
  navLinks.addEventListener('click', (e) => {
      e.stopPropagation();
  });
}