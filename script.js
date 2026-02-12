/**
 * IT-Brainrot - Main Script
 * Smooth scroll, fade-in, typing effect, hamburger menu, FAQ toggle
 */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. SEARCH FORM INTERCEPT
    // ==========================================
    const searchForms = document.querySelectorAll('search form');
    searchForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Nice try! But the search feature is as real as AI consciousness.");
        });
    });

    // ==========================================
    // 2. INTERSECTION OBSERVER - Fade-in on scroll
    // ==========================================
    const fadeElements = document.querySelectorAll('.fade-in');

    if (fadeElements.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -80px 0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        fadeElements.forEach((el) => observer.observe(el));
    }

    // ==========================================
    // 3. TYPING EFFECT on hero h2
    // ==========================================
    const heroH2 = document.querySelector('.hero h2');

    if (heroH2) {
        const fullText = heroH2.textContent;
        heroH2.textContent = '';
        heroH2.classList.add('typing-cursor');
        let charIndex = 0;

        function typeChar() {
            if (charIndex < fullText.length) {
                heroH2.textContent += fullText[charIndex];
                charIndex++;
                setTimeout(typeChar, 60);
            } else {
                setTimeout(() => heroH2.classList.remove('typing-cursor'), 1500);
            }
        }

        setTimeout(typeChar, 400);
    }

    // ==========================================
    // 4. HAMBURGER MENU TOGGLE
    // ==========================================
    const hamburger = document.querySelector('.hamburger');
    const navUl = document.querySelector('nav ul');

    if (hamburger && navUl) {
        hamburger.addEventListener('click', () => {
            const isOpen = navUl.classList.toggle('open');
            hamburger.classList.toggle('open');
            hamburger.setAttribute('aria-expanded', isOpen);
        });

        navUl.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navUl.classList.remove('open');
                hamburger.classList.remove('open');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // ==========================================
    // 5. FAQ ACCORDION
    // ==========================================
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                faqItems.forEach(other => {
                    if (other !== item) other.classList.remove('open');
                });
                item.classList.toggle('open');
            });
        }
    });

    // ==========================================
    // 6. CONTACT FORM HANDLER
    // ==========================================
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = contactForm.querySelector('#name').value;
            alert(`Thanks, ${name}! Your message has been sent into the void. We'll get back to you... eventually.`);
            contactForm.reset();
        });
    }

    // ==========================================
    // 7. ACTIVE NAV HIGHLIGHTING
    // ==========================================
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });

});
