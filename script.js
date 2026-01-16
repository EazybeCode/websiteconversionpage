/* ========================================
   EAZYBE HUBSPOT LANDING PAGE - SCRIPTS
   ======================================== */

// ========================================
// CALENDLY EVENT TRACKING
// ========================================
window.addEventListener('message', function(e) {
    if (e.origin === 'https://calendly.com') {
        if (e.data.event === 'calendly.profile_page_viewed') {
            trackCalendlyEvent('calendly_viewed');
        }
        if (e.data.event === 'calendly.event_type_viewed') {
            trackCalendlyEvent('calendly_event_type_viewed');
        }
        if (e.data.event === 'calendly.date_and_time_selected') {
            trackCalendlyEvent('calendly_time_selected');
        }
        if (e.data.event === 'calendly.event_scheduled') {
            trackCalendlyEvent('calendly_scheduled');
            // Fire Google Ads conversion
            if (typeof gtag !== 'undefined') {
                gtag('event', 'conversion', {
                    'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL',
                    'event_callback': function() {
                        console.log('Conversion tracked');
                    }
                });
            }
        }
    }
});

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// ========================================
// FAQ ACCORDION
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const item = this.parentElement;
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(function(i) { 
                i.classList.remove('active'); 
            });
            
            // Toggle the clicked item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    
                    const navbarHeight = document.querySelector('.navbar').offsetHeight || 0;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// ========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
        const animateOnScroll = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observe elements that should animate
        const animatedElements = document.querySelectorAll(
            '.pain-card, .feature-content, .feature-visual, .testimonial-card, .stat-item, .faq-item'
        );
        
        animatedElements.forEach(function(el) {
            animateOnScroll.observe(el);
        });
    }
});

// ========================================
// BUTTON CLICK TRACKING
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const ctaButtons = document.querySelectorAll('.btn-primary');
    
    ctaButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'cta_click', {
                    'event_category': 'CTA',
                    'event_label': this.textContent.trim(),
                    'value': 1
                });
            }
        });
    });
});

// ========================================
// MARQUEE PAUSE ON FOCUS (Accessibility)
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const marquees = document.querySelectorAll('.logo-marquee, .testimonial-marquee');
    
    marquees.forEach(function(marquee) {
        // Pause on keyboard focus within marquee
        marquee.addEventListener('focusin', function() {
            const content = this.querySelector('.logo-marquee-content, .testimonial-marquee-content');
            if (content) {
                content.style.animationPlayState = 'paused';
            }
        });
        
        marquee.addEventListener('focusout', function() {
            const content = this.querySelector('.logo-marquee-content, .testimonial-marquee-content');
            if (content) {
                content.style.animationPlayState = 'running';
            }
        });
    });
});

// ========================================
// TRACK CALENDLY EVENT HELPER
// ========================================
function trackCalendlyEvent(eventName) {
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, {
            'event_category': 'Calendly',
            'event_label': 'HubSpot Landing Page'
        });
    }
    console.log('Calendly event tracked:', eventName);
}

// ========================================
// LAZY LOAD IMAGES (Performance)
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    // Check if native lazy loading is supported
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(function(img) {
            img.src = img.dataset.src || img.src;
        });
    } else {
        // Fallback for browsers that don't support native lazy loading
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        script.async = true;
        document.body.appendChild(script);
    }
});

// ========================================
// SCROLL TO TOP (Optional Feature)
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    // Create scroll to top button if needed
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '↑';
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background: var(--gradient-hubspot, linear-gradient(135deg, #FF7A59 0%, #FF5C35 100%));
        color: white;
        border: none;
        cursor: pointer;
        font-size: 1.25rem;
        box-shadow: 0 4px 15px rgba(255,122,89,0.35);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
    `;
    document.body.appendChild(scrollTopBtn);

    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            scrollTopBtn.style.opacity = '1';
            scrollTopBtn.style.visibility = 'visible';
        } else {
            scrollTopBtn.style.opacity = '0';
            scrollTopBtn.style.visibility = 'hidden';
        }
    });

    // Scroll to top on click
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// ========================================
// CONSOLE LOG FOR DEVELOPERS
// ========================================
console.log('%cEazybe HubSpot Landing Page', 'font-size: 24px; font-weight: bold; color: #FF7A59;');
console.log('%cPowered by Eazybe - WhatsApp + HubSpot Integration', 'font-size: 14px; color: #516F90;');
