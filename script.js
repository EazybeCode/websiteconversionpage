/* ========================================
   script.js - Main JavaScript File
   ======================================== */

/**
 * Wait for DOM to be fully loaded before executing
 */
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initSmoothScroll();
    initHeaderScroll();
    initContactForm();
});

/* ----------------------------------------
   Navigation Toggle (Mobile Menu)
   ---------------------------------------- */
function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!navToggle || !navMenu) return;

    // Toggle mobile menu
    navToggle.addEventListener('click', () => {
        const isActive = navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        navToggle.setAttribute('aria-expanded', isActive);
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = isActive ? 'hidden' : '';
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
            navToggle.focus();
        }
    });
}

/* ----------------------------------------
   Smooth Scrolling for Anchor Links
   ---------------------------------------- */
function initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;

            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = targetPosition - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Update URL without triggering scroll
                history.pushState(null, null, href);
            }
        });
    });
}

/* ----------------------------------------
   Header Scroll Effect
   ---------------------------------------- */
function initHeaderScroll() {
    const header = document.getElementById('header');
    
    if (!header) return;

    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateHeader = () => {
        const scrollY = window.scrollY;

        // Add shadow when scrolled
        if (scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScrollY = scrollY;
        ticking = false;
    };

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }, { passive: true });
}

/* ----------------------------------------
   Contact Form Validation (UI Only)
   ---------------------------------------- */
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    if (!form) return;

    const fields = {
        name: {
            element: document.getElementById('name'),
            error: document.getElementById('nameError'),
            validate: (value) => {
                if (!value.trim()) return 'Please enter your name';
                if (value.trim().length < 2) return 'Name must be at least 2 characters';
                return '';
            }
        },
        email: {
            element: document.getElementById('email'),
            error: document.getElementById('emailError'),
            validate: (value) => {
                if (!value.trim()) return 'Please enter your email';
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) return 'Please enter a valid email address';
                return '';
            }
        },
        message: {
            element: document.getElementById('message'),
            error: document.getElementById('messageError'),
            validate: (value) => {
                if (!value.trim()) return 'Please enter a message';
                if (value.trim().length < 10) return 'Message must be at least 10 characters';
                return '';
            }
        }
    };

    // Validate individual field
    const validateField = (fieldName) => {
        const field = fields[fieldName];
        if (!field) return true;

        const errorMessage = field.validate(field.element.value);
        
        if (errorMessage) {
            field.element.classList.add('error');
            field.error.textContent = errorMessage;
            return false;
        } else {
            field.element.classList.remove('error');
            field.error.textContent = '';
            return true;
        }
    };

    // Add blur validation to each field
    Object.keys(fields).forEach(fieldName => {
        const field = fields[fieldName];
        
        field.element.addEventListener('blur', () => {
            validateField(fieldName);
        });

        // Clear error on input
        field.element.addEventListener('input', () => {
            if (field.element.classList.contains('error')) {
                validateField(fieldName);
            }
        });
    });

    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Validate all fields
        let isValid = true;
        Object.keys(fields).forEach(fieldName => {
            if (!validateField(fieldName)) {
                isValid = false;
            }
        });

        if (isValid) {
            // Get form data
            const formData = {
                name: fields.name.element.value.trim(),
                email: fields.email.element.value.trim(),
                subject: document.getElementById('subject').value.trim(),
                message: fields.message.element.value.trim()
            };

            // Log form data (in real app, send to server)
            console.log('Form submitted:', formData);

            // Show success message
            showFormSuccess();

            // Reset form
            form.reset();
        } else {
            // Focus first field with error
            const firstError = Object.values(fields).find(field => 
                field.element.classList.contains('error')
            );
            if (firstError) {
                firstError.element.focus();
            }
        }
    });
}

/* ----------------------------------------
   Form Success Message
   ---------------------------------------- */
function showFormSuccess() {
    const submitBtn = document.querySelector('.btn-submit');
    const originalText = submitBtn.textContent;

    // Change button text
    submitBtn.textContent = 'Message Sent! ✓';
    submitBtn.style.backgroundColor = 'var(--color-success)';
    submitBtn.style.borderColor = 'var(--color-success)';
    submitBtn.disabled = true;

    // Reset after 3 seconds
    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.backgroundColor = '';
        submitBtn.style.borderColor = '';
        submitBtn.disabled = false;
    }, 3000);
}

/* ----------------------------------------
   Utility: Debounce Function
   ---------------------------------------- */
function debounce(func, wait = 100) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/* ----------------------------------------
   Utility: Throttle Function
   ---------------------------------------- */
function throttle(func, limit = 100) {
    let inThrottle;
    return function executedFunction(...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
