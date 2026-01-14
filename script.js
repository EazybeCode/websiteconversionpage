// Mobile Menu Functions
        function toggleMobileMenu() {
            const toggle = document.querySelector('.mobile-menu-toggle');
            const navLinks = document.querySelector('.nav-links');
            if (!toggle || !navLinks) return;
            
            toggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navLinks.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
                document.body.style.position = 'fixed';
                document.body.style.width = '100%';
            } else {
                document.body.style.overflow = '';
                document.body.style.position = '';
                document.body.style.width = '';
            }
        }

        function closeMobileMenu() {
            const toggle = document.querySelector('.mobile-menu-toggle');
            const navLinks = document.querySelector('.nav-links');
            if (!toggle || !navLinks) return;
            
            toggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
        }

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeMobileMenu();
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            const nav = document.querySelector('.nav');
            const navLinks = document.querySelector('.nav-links');
            if (navLinks && navLinks.classList.contains('active') && nav && !nav.contains(e.target)) {
                closeMobileMenu();
            }
        });
        
        // Close menu when clicking nav links on mobile
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    closeMobileMenu();
                }
            });
        });

        // FAQ Accordion
        document.querySelectorAll('.faq-question').forEach(button => {
            button.addEventListener('click', () => {
                const item = button.parentElement;
                if (!item) return;
                const isActive = item.classList.contains('active');
                document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
                if (!isActive) item.classList.add('active');
            });
        });

        // Pricing Toggle
        const pricingToggle = document.getElementById('pricingToggle');
        if (pricingToggle) {
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
        }

        // Form submission
        function handleSubmit(e) {
            e.preventDefault();
            const btn = e.target.querySelector('button[type="submit"]');
            if (!btn) return;
            
            btn.innerHTML = `<svg class="btn-icon" style="animation: spin 1s linear infinite;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Processing...`;
            btn.disabled = true;
            
            setTimeout(() => {
                btn.innerHTML = `<svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Success! Check your email`;
                btn.style.background = 'linear-gradient(135deg, #11998e 0%, #00BDA5 100%)';
            }, 1500);
        }

        // Smooth scroll with offset for fixed nav
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const target = document.querySelector(targetId);
                if (target) {
                    const navHeight = document.querySelector('.nav')?.offsetHeight || 80;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Intersection Observer for animations with reduced motion check
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        if (!prefersReducedMotion) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

            document.querySelectorAll('.feature-card, .testimonial-card, .stat-card, .faq-item, .problem-card, .pricing-card').forEach((el, i) => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = `opacity 0.6s ease ${Math.min(i * 0.08, 0.5)}s, transform 0.6s ease ${Math.min(i * 0.08, 0.5)}s`;
                observer.observe(el);
            });
        }
        
        // Handle window resize for mobile menu
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                if (window.innerWidth > 768) {
                    closeMobileMenu();
                }
            }, 100);
        });
        
        // Nav scroll effect
        const nav = document.querySelector('.nav');
        let lastScroll = 0;
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
            
            lastScroll = currentScroll;
        });
