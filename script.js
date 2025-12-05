document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const icon = mobileToggle.querySelector('i');

    mobileToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        if (mobileMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // Scroll Animations (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden-left, .hidden-up');
    hiddenElements.forEach(el => observer.observe(el));

    // Dynamic Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // GitHub API Integration
    const projectsGrid = document.getElementById('projects-grid');
    const username = 'ahmedxxzz';

    async function fetchProjects() {
        try {
            const response = await fetch(`https://api.github.com/users/${username}/repos`);
            if (!response.ok) throw new Error('Failed to fetch projects');
            
            const data = await response.json();
            // Sort by updated_at desc
            const sortedProjects = data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

            // Clear loader
            projectsGrid.innerHTML = '';

            sortedProjects.forEach((project, index) => {
                const card = createProjectCard(project, index);
                projectsGrid.appendChild(card);
            });

            // Observe new cards for animation
            const cards = document.querySelectorAll('.project-card');
            cards.forEach(card => observer.observe(card));

        } catch (error) {
            projectsGrid.innerHTML = `<div class="glass" style="padding: 2rem; text-align: center; grid-column: 1/-1; color: #ff4d4d;">
                <p>Failed to load projects. Please check your connection or try again later.</p>
            </div>`;
            console.error(error);
        }
    }

    function createProjectCard(project, index) {
        const card = document.createElement('a');
        card.href = project.html_url;
        card.target = '_blank';
        card.rel = 'noopener noreferrer';
        card.className = 'project-card glass hidden-up';
        card.style.transitionDelay = `${index * 100}ms`;

        const langIcon = getLanguageIcon(project.language);

        card.innerHTML = `
            <div class="project-header">
                <div class="lang-icon">${langIcon}</div>
                <i class="fa-solid fa-arrow-up-right-from-square" style="color: var(--text-muted);"></i>
            </div>
            <h3 class="project-title">${project.name}</h3>
            <p class="project-desc">${project.description || 'No description available.'}</p>
            <div class="project-stats">
                <span><i class="fa-solid fa-star" style="color: #fbbf24;"></i> ${project.stargazers_count}</span>
                <span><i class="fa-solid fa-code-branch" style="color: #a855f7;"></i> ${project.forks_count}</span>
                <span style="margin-left: auto; font-size: 0.8rem; padding: 2px 8px; background: rgba(255,255,255,0.1); border-radius: 10px;">${project.language || 'Code'}</span>
            </div>
        `;

        return card;
    }

    function getLanguageIcon(language) {
        if (!language) return '<i class="fa-solid fa-code" style="color: #9ca3af;"></i>';
        const lang = language.toLowerCase();
        
        const icons = {
            javascript: '<i class="fa-brands fa-js" style="color: #f7df1e;"></i>',
            python: '<i class="fa-brands fa-python" style="color: #3776ab;"></i>',
            html: '<i class="fa-brands fa-html5" style="color: #e34c26;"></i>',
            css: '<i class="fa-brands fa-css3-alt" style="color: #264de4;"></i>',
            java: '<i class="fa-brands fa-java" style="color: #007396;"></i>',
            react: '<i class="fa-brands fa-react" style="color: #61dafb;"></i>',
            vue: '<i class="fa-brands fa-vuejs" style="color: #4fc08d;"></i>',
            angular: '<i class="fa-brands fa-angular" style="color: #dd0031;"></i>'
        };

        return icons[lang] || '<i class="fa-solid fa-code" style="color: #9ca3af;"></i>';
    }

    fetchProjects();
});
