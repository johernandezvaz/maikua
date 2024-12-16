export function initContactForm() {
    const form = document.querySelector('.contact-form');
    
    if (form) {
      const subjectSelect = form.querySelector('#subject');
      const messageTextarea = form.querySelector('#message');
      
      // Add placeholder text based on selected subject
      subjectSelect.addEventListener('change', (e) => {
        const subject = e.target.value;
        let placeholder = '';
        
        switch(subject) {
          case 'cotizacion':
            placeholder = 'Por favor, describe el proyecto o servicio para el que necesitas una cotización...';
            break;
          case 'soporte':
            placeholder = 'Describe el problema técnico que estás experimentando...';
            break;
          case 'proyecto':
            placeholder = 'Cuéntanos sobre tu proyecto y cómo podemos ayudarte...';
            break;
          case 'colaboracion':
            placeholder = 'Describe tu propuesta de colaboración...';
            break;
          case 'empleo':
            placeholder = 'Cuéntanos sobre tu experiencia y el área en la que te gustaría trabajar...';
            break;
          case 'otro':
            placeholder = 'Escribe tu mensaje...';
            break;
          default:
            placeholder = 'Por favor, selecciona un asunto antes de escribir tu mensaje...';
        }
        
        messageTextarea.placeholder = placeholder;
      });
  
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        // Here you would typically send the data to your backend
        console.log('Form submitted:', data);
        
        // Show success message
        const submitButton = form.querySelector('.submit-button');
        const originalText = submitButton.textContent;
        submitButton.textContent = '¡Mensaje Enviado!';
        submitButton.disabled = true;
        
        setTimeout(() => {
          submitButton.textContent = originalText;
          submitButton.disabled = false;
          form.reset();
          messageTextarea.placeholder = 'Por favor, selecciona un asunto antes de escribir tu mensaje...';
        }, 3000);
      });
    }
  }