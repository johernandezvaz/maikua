

export function initSubscription() {
    // Inicializar EmailJS
    emailjs.init("gH4-kfFad9dXXPmMq");
    
    const subscribeBtn = document.getElementById('subscribeBtn');
    const modal = document.getElementById('subscriptionModal');
    const form = document.getElementById('subscriptionForm');

    function showModal() {
        modal.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    // Evento click para el botón de suscripción
    subscribeBtn.addEventListener('click', showModal);

    // Manejar el envío del formulario
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        const email = this.querySelector('input[name="subscriber_email"]').value;
        
        try {
            await emailjs.send(
                "service_5s1da8u",
                "template_dcdnl7u",
                {
                    subscriber_email: email,
                    subscription_date: new Date().toLocaleDateString()
                }
            );

            // Actualizar contenido del modal
            const modalContent = modal.querySelector('.modal-content');
            modalContent.innerHTML = `
                <h3>¡Gracias por suscribirte!</h3>
                <p>Te mantendremos informado sobre nuestras últimas publicaciones.</p>
                <button class="success-close" onclick="closeModal()">Cerrar</button>
            `;

            // Cerrar modal después de 3 segundos
            setTimeout(closeModal, 3000);

        } catch (error) {
            console.error('Error al enviar email:', error);
            alert('Hubo un error al procesar tu suscripción. Por favor, intenta nuevamente.');
        }
    });

    // Cerrar modal al hacer clic fuera
    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    }
}