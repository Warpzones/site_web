// This file contains JavaScript code for interactive elements of the website, such as form validation or dynamic content loading.

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for internal links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Form validation for contact form
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = this.querySelector('input[name="name"]').value;
            const email = this.querySelector('input[name="email"]').value;
            const message = this.querySelector('textarea[name="message"]').value;

            if (name && email && message) {
                alert('Message sent successfully!');
                this.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }

    // Dynamic content loading for projects page
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
        fetch('path/to/projects.json')
            .then(response => response.json())
            .then(data => {
                data.projects.forEach(project => {
                    const projectElement = document.createElement('div');
                    projectElement.classList.add('project');
                    projectElement.innerHTML = `
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <a href="${project.link}" target="_blank">View Project</a>
                    `;
                    projectsSection.appendChild(projectElement);
                });
            })
            .catch(error => console.error('Error loading projects:', error));
    }

    // Inclusion dynamique du header et du footer
    window.addEventListener('DOMContentLoaded', function() {
        fetch('c_Header.html').then(r => r.text()).then(t => {
            document.getElementById('header-placeholder').innerHTML = t;
            // Met à jour la classe active selon la page
            const page = location.pathname.split('/').pop() || 'index.html';
            document.querySelectorAll('.nav a').forEach(link => {
                if (link.getAttribute('href') === page) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        });
        fetch('c_Footer.html').then(r => r.text()).then(t => {
            document.getElementById('footer-placeholder').innerHTML = t;
        });
    });
});