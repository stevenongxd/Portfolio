// Fade toggle for home, resume, and portfolio sections
const homeLink = document.querySelector('a[href="#home"]');
const homeSection = document.querySelector('#home');
const resumeLink = document.querySelector('a[href="#resume"]');
const resumeSection = document.querySelector('#resume');
const portfolioLink = document.querySelector('a[href="#portfolio"]');
const portfolioSection = document.querySelector('#portfolio');
const contactLink = document.querySelector('a[href="#contact"]');
const contactSection = document.querySelector('#contact');

homeLink.addEventListener('click', () => {
    // Fade out the home section
    homeSection.style.opacity = 0;

    // After a brief delay, fade it back in
    setTimeout(() => {
    homeSection.style.opacity = 1;
    }, 500); // Adjust the time to match fade duration

    // Fade out the resume section
    resumeSection.style.opacity = 0;

    // Fade out the portfolio section
    portfolioSection.style.opacity = 0;
});

resumeLink.addEventListener('click', () => {
    resumeSection.style.opacity = 0;

    setTimeout(() => {
    resumeSection.style.opacity = 1;
    }, 500);

    homeSection.style.opacity = 0;

    portfolioSection.style.opacity = 0;
});

portfolioLink.addEventListener('click', () => {
    portfolioSection.style.opacity = 0;

    setTimeout(() => {
    portfolioSection.style.opacity = 1;
    }, 500);

    homeSection.style.opacity = 0;

    resumeSection.style.opacity = 0;
});

contactLink.addEventListener('click', () => {
    contactSection.style.opacity = 0;
    setTimeout(() => {
    contactSection.style.opacity = 1;
    }, 500);

    homeSection.style.opacity = 0;

    resumeSection.style.opacity = 0;

    portfolioSection.style.opacity = 0;
});

// Fade toggle for about section
const aboutLink2 = document.querySelector('a[href="#about"]');
const aboutSection = document.querySelector('#about');

aboutLink2.addEventListener('click', () => {
    aboutSection.style.opacity = 0;

    setTimeout(() => {
        aboutSection.style.opacity = 1;
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