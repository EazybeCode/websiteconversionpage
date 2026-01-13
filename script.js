// Mobile Menu Functions
function toggleMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    toggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (navLinks.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

function closeMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    toggle.classList.remove('active');
    navLinks.classList.remove('active');
    document.body.style.overflow = '';
}

// Close menu on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMobileMenu();
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelector('.nav-links');
    if (navLinks.classList.contains('active') && !nav.contains(e.target)) {
        closeMobileMenu();
    }
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;
        const isActive = item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
        if (!isActive) item.classList.add('active');
    });
});

// Pricing Toggle
const pricingToggle = document.getElementById('pricingToggle');
const toggleLabels = document.querySelectorAll('.toggle-label');
const prices = document.querySelectorAll('.price');
const billingPeriods = document.querySelectorAll('.billing-period');

pricingToggle.addEventListener('click', () => {
    pricingToggle.classList.toggle('active');
    const isAnnual = pricingToggle.classList.contains('active');
    
    toggleLabels.forEach(label => {
        if (label.dataset.period === 'annual') {
            label.classList.toggle('active', isAnnual);
        } else {
            label.classList.toggle('active', !isAnnual);
        }
    });

    prices.forEach(price => {
        const monthly = price.dataset.monthly;
        const annual = price.dataset.annual;
        price.textContent = isAnnual ? annual : monthly;
    });

    billingPeriods.forEach(period => {
        period.textContent = isAnnual ? 'annually' : 'monthly';
    });
});

// Form submission
function handleSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    btn.innerHTML = `<svg class="btn-icon" style="animation: spin 1s linear infinite;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Processing...`;
    btn.disabled = true;
    
    setTimeout(() => {
        btn.innerHTML = `<svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Success! Check your email`;
        btn.style.background = 'linear-gradient(135deg, #11998e 0%, #00BDA5 100%)';
    }, 1500);
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.feature-card, .testimonial-card, .stat-card, .faq-item').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`;
    observer.observe(el);
});
