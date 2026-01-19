// ============================================
// CALENDLY EVENT TRACKING
// ============================================
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

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
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

// ============================================
// FAQ ACCORDION
// ============================================
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
            
            // If the clicked item wasn't active, open it
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#" or empty
            if (href === '#' || href === '') {
                return;
            }
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                // Calculate offset for fixed navbar
                const navbar = document.getElementById('navbar');
                const navbarHeight = navbar ? navbar.offsetHeight : 0;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
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
        
        // Observe elements that should animate on scroll
        const animatedElements = document.querySelectorAll('.pain-card, .feature-visual, .testimonial-card, .faq-item');
        animatedElements.forEach(function(el) {
            observer.observe(el);
        });
    }
});

// ============================================
// INBOX TABS FUNCTIONALITY (Demo)
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const inboxTabs = document.querySelectorAll('.inbox-tab');
    
    inboxTabs.forEach(function(tab) {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            inboxTabs.forEach(function(t) {
                t.classList.remove('active');
            });
            
            // Add active class to clicked tab
            this.classList.add('active');
        });
    });
});

// ============================================
// UTILITY: DEBOUNCE FUNCTION
// ============================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = function() {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ============================================
// RESIZE HANDLER FOR RESPONSIVE ADJUSTMENTS
// ============================================
window.addEventListener('resize', debounce(function() {
    // Handle any resize-specific logic here
    // For example, recalculating element positions
}, 250));

// ============================================
// CALENDLY TRACKING HELPER
// ============================================
function trackCalendlyEvent(eventName) {
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, {
            'event_category': 'Calendly',
            'event_label': 'HubSpot Landing Page'
        });
    }
    
    // Console log for debugging
    console.log('Calendly Event:', eventName);
}

// ============================================
// PAGE LOAD TRACKING
// ============================================
window.addEventListener('load', function() {
    // Track page load performance
    if (window.performance) {
        const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
        console.log('Page load time:', loadTime, 'ms');
    }
});
