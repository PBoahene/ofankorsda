// Mobile Navigation
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('#primary-navigation');
const body = document.body;

function toggleNav() {
    const isExpanded = mobileNavToggle.getAttribute('aria-expanded') === 'true';
    mobileNavToggle.setAttribute('aria-expanded', !isExpanded);
    
    if (!isExpanded) {
        primaryNav.classList.add('active');
        body.style.overflow = 'hidden';
        body.classList.add('nav-active');
    } else {
        primaryNav.classList.remove('active');
        body.style.overflow = '';
        body.classList.remove('nav-active');
    }
}

mobileNavToggle.addEventListener('click', toggleNav);

// Handle active state for navigation links
const navLinks = document.querySelectorAll('.nav a');

// Function to set active state based on current page
function setActiveNavLink() {
    // Remove active class from all links
    navLinks.forEach(link => link.classList.remove('active'));

    // Get current page
    const path = window.location.pathname;
    if (path.endsWith('index.html') || path.endsWith('/')) {
        const el = document.querySelector('.nav a[href="index.html"]');
        if (el) el.classList.add('active');
    } else if (path.endsWith('about.html')) {
        const el = document.querySelector('.nav a[href="about.html"]');
        if (el) el.classList.add('active');
    } else if (path.endsWith('events.html')) {
        const el = document.querySelector('.nav a[href="events.html"]');
        if (el) el.classList.add('active');
    } else if (path.endsWith('gallery.html')) {
        const el = document.querySelector('.nav a[href="gallery.html"]');
        if (el) el.classList.add('active');
    } else if (path.endsWith('contact.html')) {
        const el = document.querySelector('.nav a[href="contact.html"]');
        if (el) el.classList.add('active');
    } else if (path.endsWith('news.html')) {
        const el = document.querySelector('.nav a[href="news.html"]');
        if (el) el.classList.add('active');
    }
}

// Set initial active state
setActiveNavLink();

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            primaryNav.classList.remove('active');
            mobileNavToggle.setAttribute('aria-expanded', 'false');
            body.style.overflow = '';
            body.classList.remove('nav-active');
        }
    });
});

// Close mobile menu when resizing window
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        primaryNav.classList.remove('active');
        mobileNavToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = 'auto';
    }
});

// Handle scroll behavior
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(230, 230, 230, 0.98)';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        header.style.background = '#e6e6e6';
        header.style.boxShadow = 'none';
    }
});