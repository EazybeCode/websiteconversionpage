/* ============================================
   EAZYBE LANDING PAGE - JAVASCRIPT
   ============================================ */

// Scroll to form
function scrollToForm() {
    document.getElementById('signup-form').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Sticky bar visibility
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

// Exit intent popup
let exitShown = false;
document.addEventListener('mouseleave', (e) => {
    if (e.clientY < 0 && !exitShown) {
        document.getElementById('exitPopup').classList.add('visible');
        exitShown = true;
    }
});

function closeExitPopup() {
    document.getElementById('exitPopup').classList.remove('visible');
}

// FAQ toggle
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

// Social proof popup rotation
const socialProofData = [
    { name: 'Sarah from London', action: 'Just connected HubSpot', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face' },
    { name: 'Mike from New York', action: 'Synced WhatsApp to Salesforce', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face' },
    { name: 'Emma from Sydney', action: 'Just started a free trial', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=40&h=40&fit=crop&crop=face' },
    { name: 'David from Berlin', action: 'Connected Zoho CRM', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face' }
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

// Countdown timer
function updateCountdown() {
    const now = new Date();
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
    const diff = endOfMonth - now;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    const el = document.getElementById('countdown');
    if (el) el.textContent = `Ends in ${days}d ${hours}h ${mins}m`;
}

// Initialize on DOM ready
function init() {
    updateCountdown();
    setInterval(updateCountdown, 60000);
    
    // Delay non-critical features
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
