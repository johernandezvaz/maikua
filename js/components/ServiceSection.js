import { mainServices } from '../config/services.js';

export function initServicesSection() {
  const container = document.getElementById('services-container');
  
  const createServiceCard = (service) => `
    <div class="service-area" id="${service.id}">
      <div class="service-header">
        <i class="fas ${service.icon}"></i>
        <h2>${service.title}</h2>
        <p>${service.description}</p>
      </div>
      <div class="service-grid">
        ${service.services.map(item => `
          <div class="service-card">
            <i class="fas ${item.icon}"></i>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  const servicesHTML = `
    <section class="services-section" id="services">
      <div class="container">
        <div class="section-header">
          <h2>Nuestros Servicios</h2>
          <p>Soluciones tecnológicas integrales para tu negocio</p>
        </div>
        <div class="services-nav">
          ${Object.values(mainServices).map(service => `
            <button class="service-nav-btn" data-service="${service.id}">
              <i class="fas ${service.icon}"></i>
              ${service.title}
            </button>
          `).join('')}
        </div>
        <div class="services-content">
          ${Object.values(mainServices).map(createServiceCard).join('')}
        </div>
      </div>
    </section>
  `;

  container.innerHTML = servicesHTML;
  initServiceNavigation();
}