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

            // Thème sombre/clair
            function setTheme(dark) {
                document.body.classList.toggle('dark-mode', dark);
                const icon = document.getElementById('theme-icon');
                if (icon) icon.textContent = dark ? '☀️' : '🌙';
                localStorage.setItem('dark-mode', dark ? '1' : '0');
            }
            setTheme(localStorage.getItem('dark-mode') === '1');
            const btn = document.getElementById('theme-toggle');
            if (btn) {
                btn.addEventListener('click', function() {
                    setTheme(!document.body.classList.contains('dark-mode'));
                });
            }

            // Multilingue
            function setLanguage(lang) {
                localStorage.setItem('lang', lang);
                document.documentElement.lang = lang;
                document.querySelectorAll('[data-i18n]').forEach(el => {
                    const key = el.getAttribute('data-i18n');
                    if (translations[lang][key]) {
                        el.innerHTML = translations[lang][key];
                    }
                });
                const langBtn = document.getElementById('lang-toggle');
                if (langBtn) langBtn.textContent = lang === 'fr' ? 'EN' : 'FR';
            }
            const lang = localStorage.getItem('lang') || 'fr';
            setLanguage(lang);
            const langBtn = document.getElementById('lang-toggle');
            if (langBtn) {
                langBtn.addEventListener('click', function() {
                    setLanguage(langBtn.textContent === 'EN' ? 'en' : 'fr');
                });
            }

            // Active nav
            const page = location.pathname.split('/').pop() || 'index.html';
            document.querySelectorAll('.nav a').forEach(link => {
                if (link.getAttribute('href') === page) link.classList.add('active');
                else link.classList.remove('active');
            });
        });

        fetch('c_Footer.html').then(r => r.text()).then(t => {
            document.getElementById('footer-placeholder').innerHTML = t;
        });
    });

    // Traductions (exemple, à compléter selon tes pages)
    const translations = {
        fr: {
            home_title: "Bienvenue sur mon site web !",
            home_intro: "Je suis <strong>Warps</strong>, passionné de technologie et de développement web.<br>Ce site est un espace où je partage mes projets, mes compétences et mon parcours.",
            see_projects: "Découvrez mes projets",
            about_title: "À propos de moi",
            about_intro: "Salut, je suis <strong>Warps</strong> !<br>Passionné par la technologie, le développement web et l’innovation.",
            contact_title: "Contact",
            contact_text: "Vous pouvez me contacter à l’adresse suivante : <a href='mailto:warps@example.com'>warps@example.com</a>",
            projects_title: "Mes Projets",
            project_name_1: "Quizz Culture Générale",
            project_desc_1: "Un site de quiz pour tester et améliorer sa culture générale.",
            project_name_2: "Nom du Projet 2",
            project_desc_2: "Courte description du projet, technologies utilisées, objectifs atteints.",
            project_name_3: "Nom du Projet 3",
            project_desc_3: "Courte description du projet, technologies utilisées, objectifs atteints.",
            project_name_4: "Nom du Projet 4",
            project_desc_4: "Courte description du projet, technologies utilisées, objectifs atteints.",
            view_project: "Voir le projet",
            footer: "&copy; 2025 Warps — Open source.",
            nav_home: "Accueil",
            nav_about: "À propos",
            nav_projects: "Projets",
            nav_contact: "Contact"
        },
        en: {
            home_title: "Welcome to my website!",
            home_intro: "I'm <strong>Warps</strong>, passionate about technology and web development.<br>This site is a space where I share my projects, skills, and background.",
            see_projects: "See my projects",
            about_title: "About me",
            about_intro: "Hi, I'm <strong>Warps</strong>!<br>Passionate about technology, web development, and innovation.",
            contact_title: "Contact",
            contact_text: "You can contact me at: <a href='mailto:warps@example.com'>warps@example.com</a>",
            projects_title: "My Projects",
            project_name_1: "General Knowledge Quiz",
            project_desc_1: "A quiz website to test and improve your general knowledge.",
            project_name_2: "Project 2 Name",
            project_desc_2: "Short project description, technologies used, goals achieved.",
            project_name_3: "Project 3 Name",
            project_desc_3: "Short project description, technologies used, goals achieved.",
            project_name_4: "Project 4 Name",
            project_desc_4: "Short project description, technologies used, goals achieved.",
            view_project: "View project",
            footer: "&copy; 2025 Warps — Open source.",
            nav_home: "Home",
            nav_about: "About",
            nav_projects: "Projects",
            nav_contact: "Contact"
        }
    };

    function setTheme(dark) {
        document.body.classList.toggle('dark-mode', dark);
        const icon = document.getElementById('theme-icon');
        if (icon) icon.textContent = dark ? '☀️' : '🌙';
        localStorage.setItem('dark-mode', dark ? '1' : '0');
    }

    // Applique le thème au chargement
    setTheme(localStorage.getItem('dark-mode') === '1');

    // Gestion du bouton
    const btn = document.getElementById('theme-toggle');
    if (btn) {
        btn.addEventListener('click', function() {
            setTheme(!document.body.classList.contains('dark-mode'));
        });
    }

    // Met à jour la classe active selon la page
    const page = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav a').forEach(link => {
        if (link.getAttribute('href') === page) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    function setLanguage(lang) {
        localStorage.setItem('lang', lang);
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        const btn = document.getElementById('lang-toggle');
        if (btn) btn.textContent = lang === 'fr' ? 'EN' : 'FR';
    }

    // Après avoir injecté le header :
    const lang = localStorage.getItem('lang') || 'fr';
    setLanguage(lang);
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.addEventListener('click', function() {
            setLanguage(langBtn.textContent === 'EN' ? 'en' : 'fr');
        });
    }
});