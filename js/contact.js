import { EMAILJS_CONFIG } from '../config/emailjs.js';

export function initContactForm() {
    const form = document.querySelector('.contact-form');
    const contactModal = document.getElementById('contactModal');
    
    if (!form) return;

    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

    function showSuccessModal() {
        contactModal.style.display = 'block';
        contactModal.querySelector('.modal-content').innerHTML = `
            <h3>¡Mensaje Enviado!</h3>
            <p>Gracias por contactarnos. Te responderemos lo antes posible.</p>
            <button class="success-close" onclick="document.getElementById('contactModal').style.display='none'">
                Cerrar
            </button>
        `;
    }

    function showErrorModal() {
        contactModal.style.display = 'block';
        contactModal.querySelector('.modal-content').innerHTML = `
            <h3>Error al enviar mensaje</h3>
            <p>Hubo un problema al enviar tu mensaje. Por favor, intenta nuevamente.</p>
            <button class="success-close" onclick="document.getElementById('contactModal').style.display='none'">
                Cerrar
            </button>
        `;
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        try {
            await emailjs.sendForm(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATES.CONTACT_FORM,
                form
            );
            
            showSuccessModal();
            form.reset();
            
        } catch (error) {
            console.error('Error al enviar email:', error);
            showErrorModal();
        }
    });

    // Cerrar modal al hacer clic fuera
    window.onclick = function(event) {
        if (event.target == contactModal) {
            contactModal.style.display = 'none';
        }
    }
}