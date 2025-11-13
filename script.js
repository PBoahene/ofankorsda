// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fetch and display events from backend
async function loadEvents() {
    try {
        const response = await fetch('/api/events');
        const events = await response.json();
        const grid = document.getElementById('events-grid');
        grid.innerHTML = events.map(event => `
            <div class="event-card">
                <h3>${event.title}</h3>
                <p>${event.date}</p>
                <p>${event.description}</p>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading events:', error);
        document.getElementById('events-grid').innerHTML = '<p>No events available.</p>';
    }
}

// Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const formData = new F// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Load events from DB
async function loadEvents() {// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Load events from DB
async function loadEvents() {
    try {
        const response = await fetch('/api/events');
        const events = await response.json();
        const grid = document.getElementById('events-grid');
        grid.innerHTML = events.map(event => `
            <div class="event-card">
                <img src="${event.image || 'images/default-event.jpg'}" alt="${event.title}" width="100%" height="200">
                <h3>${event.title}</h3>
                <p>${event.date} @ ${event.time} - ${event.location}</p>
            </div>
        `).join('') || '<p>No upcoming events.</p>';
    } catch (error) {
        console.error('Error loading events:', error);
        document.getElementById('events-grid').innerHTML = '<p>Error loading events.</p>';
    }
}

// Load announcements from DB
async function loadAnnouncements() {
    try {
        const response = await fetch('/api/announcements');
        const announcements = await response.json();
        const grid = document.getElementById('announcements-grid');
        grid.innerHTML = announcements.map(ann => `
            <div class="announcement-card">
                <h3>${ann.title}</h3>
                <p>${ann.content}</p>
                <small>${ann.date}</small>
            </div>
        `).join('') || '<p>No announcements.</p>';
    } catch (error) {
        console.error('Error loading announcements:', error);
        document.getElementById('announcements-grid').innerHTML = '<p>Error loading announcements.</p>';
    }
}

// Handle contact form submission to DB
document.getElementById('contact-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            body: formData
        });
        if (response.ok) {
            alert('Message sent successfully! We will get back to you soon.');
            this.reset();
        } else {
            alert('Error sending message. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error sending message. Please try again.');
    }
});

// Load data on page load
document.addEventListener('DOMContentLoaded', () => {
    loadEvents();
    loadAnnouncements();
});
    try {
        const response = await fetch('/api/events');
        const events = await response.json();
        const grid = document.getElementById('events-grid');
        grid.innerHTML = events.map(event => `
            <div class="event-card">
                <img src="${event.image || 'images/default-event.jpg'}" alt="${event.title}" width="100%" height="200">
                <h3>${event.title}</h3>
                <p>${event.date} @ ${event.time} - ${event.location}</p>
            </div>
        `).join('') || '<p>No upcoming events.</p>';
    } catch (error) {
        console.error('Error loading events:', error);
        document.getElementById('events-grid').innerHTML = '<p>Error loading events.</p>';
    }
}

// Handle contact form submission to DB
document.getElementById('contact-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            body: formData
        });
        if (response.ok) {
            alert('Message sent successfully! We will get back to you soon.');
            this.reset();
        } else {
            alert('Error sending message. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error sending message. Please try again.');
    }
});

// Load events on page load
document.addEventListener('DOMContentLoaded', loadEvents);ormData(this);
    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            body: formData
        });
        if (response.ok) {
            alert('Message sent successfully!');
            this.reset();
        } else {
            alert('Error sending message.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error sending message.');
    }
});

// Load events on page load
document.addEventListener('DOMContentLoaded', loadEvents);// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});