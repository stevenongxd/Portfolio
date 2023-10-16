// Fade toggle for home, resume, and portfolio sections
const homeLink = document.querySelector('a[href="#home"]');
const homeSection = document.querySelector('#home');
const resumeLink = document.querySelector('a[href="#resume"]');
const resumeSection = document.querySelector('#resume');
const portfolioLink = document.querySelector('a[href="#portfolio"]');
const portfolioSection = document.querySelector('#portfolio');
const contactLink = document.querySelector('a[href="#contact"]');
const contactSection = document.querySelector('#contact');
const aboutLink2 = document.querySelector('a[href="#about"]');
const aboutSection = document.querySelector('#about');

homeLink.addEventListener('click', () => {
    homeSection.style.opacity = 0;

    setTimeout(() => {
        homeSection.style.opacity = 1;
    }, 500);
});

aboutLink2.addEventListener('click', () => {
    aboutSection.style.opacity = 0;

    setTimeout(() => {
        aboutSection.style.opacity = 1;
    }, 500);
});

resumeLink.addEventListener('click', () => {
    resumeSection.style.opacity = 0;

    setTimeout(() => {
        resumeSection.style.opacity = 1;
    }, 500);
});

portfolioLink.addEventListener('click', () => {
    portfolioSection.style.opacity = 0;

    setTimeout(() => {
        portfolioSection.style.opacity = 1;
    }, 500);
});

contactLink.addEventListener('click', () => {
    contactSection.style.opacity = 0;

    setTimeout(() => {
        contactSection.style.opacity = 1;
    }, 500);
});

// Progress Bar Animation
const aboutLink = document.querySelector('a[href="#about"]');
const progressBars = document.querySelectorAll('.progress-bar.animated-progress');

aboutLink.addEventListener('click', () => {
    progressBars.forEach((progressBar) => {
        progressBar.style.width = 'var(--progress-value)';
        progressBar.classList.remove('animated-progress');
        void progressBar.offsetWidth;
        progressBar.classList.add('animated-progress');
    });
});