// Navbar scroll with smooth transition
const navbar = document.getElementById('navbar');
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    navbar.classList.toggle('scrolled', currentScroll > 50);
    lastScroll = currentScroll;
}, { passive: true });

// Smooth scroll reveal with IntersectionObserver
const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { 
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
});
revealElements.forEach(el => revealObserver.observe(el));

// Activity timeline animation
const timeline = document.getElementById('activity-timeline-1');
if (timeline) {
    new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.activity-item').forEach((item, index) => {
                    setTimeout(() => item.classList.add('animated'), index * 150);
                });
            }
        });
    }, { threshold: 0.2 }).observe(timeline);
}

// Inbox tabs with smooth transition
document.querySelectorAll('.inbox-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.inbox-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Preload animations on page load
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    // Trigger reveal for elements already in view
    revealElements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
            el.classList.add('active');
        }
    });
});
