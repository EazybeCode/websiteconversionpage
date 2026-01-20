// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');

function handleScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', handleScroll);

// Initial check
handleScroll();


// ===== FAQ ACCORDION =====
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        // Check if this item is already active
        const isActive = item.classList.contains('active');
        
        // Close all items
        faqItems.forEach(faq => {
            faq.classList.remove('active');
        });
        
        // If the clicked item wasn't active, open it
        if (!isActive) {
            item.classList.add('active');
        }
    });
});


// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.pain-card, .feature-row, .testimonial-card, .stat-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add animation class styles
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);


// ===== BUTTON CLICK TRACKING (Optional) =====
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Add a small scale animation on click
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});


// ===== MOBILE MENU TOGGLE (if needed in the future) =====
// Placeholder for mobile menu functionality
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('open');
    }
}


// ===== LAZY LOADING IMAGES =====
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for older browsers
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}


// ===== CONSOLE EASTER EGG =====
console.log('%c🚀 Eazybe - WhatsApp CRM Integration', 'color: #2563eb; font-size: 20px; font-weight: bold;');
console.log('%c¿Interesado en trabajar con nosotros? Visita https://eazybe.com/careers', 'color: #64748b; font-size: 12px;');
