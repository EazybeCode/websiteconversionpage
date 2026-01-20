/* ===========================================
   EAZYBE HUBSPOT + WHATSAPP LANDING PAGE
   script.js - Interactive Functionality
=========================================== */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ===========================================
    // FAQ Accordion
    // ===========================================
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(function(question) {
        question.addEventListener('click', function() {
            const item = this.parentElement;
            const wasActive = item.classList.contains('active');
            
            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(function(faqItem) {
                faqItem.classList.remove('active');
            });
            
            // Open clicked item if it wasn't already open
            if (!wasActive) {
                item.classList.add('active');
            }
        });
    });

    // ===========================================
    // Smooth Scroll for Anchor Links
    // ===========================================
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }
        });
    });

    // ===========================================
    // Navigation Scroll Effect
    // ===========================================
    const nav = document.getElementById('nav');
    let ticking = false;
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                if (window.scrollY > 50) {
                    nav.classList.add('scrolled');
                } else {
                    nav.classList.remove('scrolled');
                }
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    // ===========================================
    // Optional: Pause marquee on hover
    // ===========================================
    const logoTrack = document.querySelector('.logo-track');
    const testimonialTrack = document.querySelector('.testimonial-track');
    
    if (logoTrack) {
        logoTrack.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
        });
        
        logoTrack.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
        });
    }
    
    if (testimonialTrack) {
        testimonialTrack.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
        });
        
        testimonialTrack.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
        });
    }

    // ===========================================
    // Optional: Intersection Observer for animations
    // ===========================================
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe elements with 'animate-on-scroll' class if any
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(function(el) {
        observer.observe(el);
    });

});
