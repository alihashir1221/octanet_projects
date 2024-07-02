document.addEventListener('DOMContentLoaded', (event) => {
    const heroBg = document.querySelector('.hero');
    const btn = document.getElementById('change-bg-btn');
    const contentSections = document.querySelectorAll('.content .cutout p');

    btn.addEventListener('mouseover', () => {
        heroBg.style.backgroundImage = "url('img/bg-light.jpg')";
    });

    btn.addEventListener('mouseout', () => {
        heroBg.style.backgroundImage = "url('img/bg.jpg')";
    });

    // Add scroll event to animate content on scroll
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY + window.innerHeight;
        contentSections.forEach(section => {
            const sectionPos = section.getBoundingClientRect().top + window.scrollY;
            if (scrollPos > sectionPos) {
                section.classList.add('animate-content');
                section.classList.remove('fade-out');
            } else {
                section.classList.remove('animate-content');
                section.classList.add('fade-out');
            }
        });
    });
});
