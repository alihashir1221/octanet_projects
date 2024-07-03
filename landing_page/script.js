document.addEventListener('DOMContentLoaded', (event) => {
    const heroBg = document.querySelector('.hero');
    const btn = document.getElementById('change-bg-btn');
    const contentSections = document.querySelectorAll('.content');

    btn.addEventListener('mouseover', () => {
        heroBg.style.backgroundImage = "url('img/bg-light.jpg')";
    });
    btn.addEventListener('mouseout', () => {
        heroBg.style.backgroundImage = "url('img/bg.jpg')";
    });
});
