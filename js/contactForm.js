

export function initContactForm() {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    emailjs.init("gH4-kfFad9dXXPmMq");

    function showSuccessMessage() {
        // Reemplazar el contenido del formulario con el mensaje de éxito
        form.innerHTML = `
            <div class="success-message">
                <i class="fas fa-check-circle"></i>
                <h3>¡Mensaje Enviado!</h3>
                <p>Gracias por contactarnos. Te responderemos lo antes posible.</p>
            </div>
        `;
    }

    function showErrorMessage() {
        const submitButton = form.querySelector('.submit-button');
        submitButton.innerHTML = `
            <i class="fas fa-exclamation-circle"></i>
            Error al enviar
        `;
        submitButton.classList.add('error');
        
        setTimeout(() => {
            submitButton.innerHTML = 'Enviar Mensaje';
            submitButton.classList.remove('error');
        }, 3000);
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitButton = form.querySelector('.submit-button');
        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        
        try {
            await emailjs.sendForm(
                "service_5s1da8u",
                "template_lzgilj5",
                form
            );
            showSuccessMessage();
        } catch (error) {
            console.error('Error al enviar email:', error);
            showErrorMessage();
            submitButton.disabled = false;
        }
    });
}