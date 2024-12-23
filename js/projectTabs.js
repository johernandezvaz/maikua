// Datos de los proyectos
const projects = [
    {
      id: 'digits',
      title: 'Reconocimiento de Dígitos',
      kaggleUrl: 'maikua/reconocimiento-digitos-maikua'
    },
    {
      id: 'obesity',
      title: 'Predicción de Obesidad',
      kaggleUrl: 'maikua/predicci-n-obesidad-maikua'
    },
    {
      id: 'students',
      title: 'Desempeño de Alumnos',
      kaggleUrl: 'maikua/desempe-o-alumnos-maikua'
    },
    {
      id: 'happiness',
      title: 'Felicidad a Nivel Mundial',
      kaggleUrl: 'maikua/felicidad-a-nivel-mundial-maikua'
    }
  ];
  
  export function initProjectTabs() {
    const container = document.querySelector('.projects-container');
    if (!container) return;
  
    // Crear navegación de pestañas
    const tabsNav = document.createElement('div');
    tabsNav.className = 'projects-tabs';
    
    // Crear contenedor de contenido
    const contentContainer = document.createElement('div');
    contentContainer.className = 'project-content';
  
    // Generar pestañas y contenido
    projects.forEach((project, index) => {
      // Crear pestaña
      const tab = document.createElement('button');
      tab.className = `project-tab ${index === 0 ? 'active' : ''}`;
      tab.textContent = project.title;
      tab.dataset.projectId = project.id;
      tabsNav.appendChild(tab);
  
      // Crear contenido
      const content = createProjectContent(project);
      content.className = `project-card ${index === 0 ? 'active' : ''}`;
      content.dataset.projectId = project.id;
      contentContainer.appendChild(content);
    });
  
    // Insertar elementos en el DOM
    container.insertBefore(tabsNav, container.querySelector('.projects-grid'));
    container.querySelector('.projects-grid').replaceWith(contentContainer);
  
    // Manejar clicks en las pestañas
    tabsNav.addEventListener('click', (e) => {
      if (e.target.classList.contains('project-tab')) {
        const projectId = e.target.dataset.projectId;
        
        // Actualizar pestañas activas
        document.querySelectorAll('.project-tab').forEach(tab => {
          tab.classList.toggle('active', tab.dataset.projectId === projectId);
        });
  
        // Actualizar contenido activo
        document.querySelectorAll('.project-card').forEach(content => {
          content.classList.toggle('active', content.dataset.projectId === projectId);
        });
      }
    });
  }
  
  function createProjectContent(project) {
    const content = document.createElement('div');
    content.innerHTML = `
      <h3>${project.title}</h3>
      <div class="kaggle-embed">
        <iframe 
          src="https://www.kaggle.com/embed/${project.kaggleUrl}" 
          height="800" 
          style="margin:0 auto; width:100%; max-width:1024px;" 
          frameborder="0" 
          scrolling="auto"
        ></iframe>
      </div>
      <div class="project-links">
        <a href="https://www.kaggle.com/code/${project.kaggleUrl}" 
           target="_blank" 
           rel="noopener noreferrer" 
           class="kaggle-link">
          <i class="fab fa-kaggle"></i> Ver en Kaggle
        </a>
      </div>
    `;
    return content;
  }