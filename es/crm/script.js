/* ============================================
   EAZYBE LANDING PAGE - JAVASCRIPT (ESPAÑOL)
   ============================================ */

// Desplazar al formulario
function scrollToForm() {
    document.getElementById('signup-form').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Visibilidad de la barra fija
window.addEventListener('scroll', () => {
    const stickyBar = document.getElementById('stickyBar');
    const floatingCta = document.getElementById('floatingCta');
    const scrollY = window.scrollY;
    
    if (scrollY > 600) {
        stickyBar.classList.add('visible');
        floatingCta.classList.add('visible');
    } else {
        stickyBar.classList.remove('visible');
        floatingCta.classList.remove('visible');
    }
});

// Alternar FAQ
function toggleFaq(button) {
    const faqItem = button.parentElement;
    const allFaqs = document.querySelectorAll('.faq-item');
    
    allFaqs.forEach(item => {
        if (item !== faqItem) {
            item.classList.remove('active');
        }
    });
    
    faqItem.classList.toggle('active');
}

// Rotación de popup de prueba social
const socialProofData = [
    { name: 'Sarah de Londres', action: 'Acaba de conectar HubSpot', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face' },
    { name: 'Mike de Nueva York', action: 'Sincronizó WhatsApp con Salesforce', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face' },
    { name: 'Emma de Sídney', action: 'Acaba de iniciar una prueba gratis', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=40&h=40&fit=crop&crop=face' },
    { name: 'David de Berlín', action: 'Conectó Zoho CRM', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face' },
    { name: 'María de Madrid', action: 'Acaba de iniciar una prueba gratis', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=40&h=40&fit=crop&crop=face' },
    { name: 'Carlos de México', action: 'Sincronizó WhatsApp con HubSpot', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=40&h=40&fit=crop&crop=face' }
];

let proofIndex = 0;
function showSocialProof() {
    const popup = document.getElementById('socialProof');
    const data = socialProofData[proofIndex];
    
    popup.innerHTML = `
        <div class="social-proof-content">
            <img src="${data.img}" class="social-proof-avatar" alt="">
            <div>
                <p class="social-proof-name">${data.name}</p>
                <p class="social-proof-action">${data.action}</p>
            </div>
        </div>
    `;
    
    popup.style.display = 'block';
    popup.classList.add('social-proof-popup');
    
    setTimeout(() => {
        popup.style.display = 'none';
        popup.classList.remove('social-proof-popup');
    }, 5000);
    
    proofIndex = (proofIndex + 1) % socialProofData.length;
}

// Temporizador de cuenta regresiva
function updateCountdown() {
    const now = new Date();
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
    const diff = endOfMonth - now;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    const el = document.getElementById('countdown');
    if (el) el.textContent = `Termina en ${days}d ${hours}h ${mins}m`;
}

// Inicializar cuando el DOM esté listo
function init() {
    updateCountdown();
    setInterval(updateCountdown, 60000);
    
    // Retrasar funciones no críticas
    setTimeout(() => {
        showSocialProof();
        setInterval(showSocialProof, 30000);
    }, 5000);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
