const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const menuBtnIcon = document.querySelector('i');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const isActive = navLinks.classList.contains('active');
    menuBtnIcon.setAttribute('class', isActive ? 'ri-close-line' : 'ri-menu-line')
})

navLinks.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuBtnIcon.setAttribute('class', 'ri-menu-line');
})

const scrollRevealOptions = {
    distance: '50px',
    origin: 'bottom',
    duration: 700,
};

ScrollReveal().reveal('.home-container h2', {
    ...scrollRevealOptions
})

ScrollReveal().reveal('.home-container h1', {
    ...scrollRevealOptions,
    delay: 400,
})

ScrollReveal().reveal('.home-container p', {
    ...scrollRevealOptions,
    delay: 700,
})

ScrollReveal().reveal('.home-btns', {
    ...scrollRevealOptions,
    delay: 1100,
})

ScrollReveal().reveal('.steps-card', {
    ...scrollRevealOptions,
    interval: 400,
})

ScrollReveal().reveal('.option-card', {
    duration: 400,
    interval: 300,
})

ScrollReveal().reveal('.job-card', {
    ...scrollRevealOptions,
    duration: 400,
    interval: 350,
})

ScrollReveal().reveal('.offer-card:nth-child(1)', {
    ...scrollRevealOptions,
    origin: 'left',
    duration: 1200,
    distance: '70px',
})

ScrollReveal().reveal('.offer-card:nth-child(2)', {
    ...scrollRevealOptions,
    duration: 1200,
    distance: '70px',
})

ScrollReveal().reveal('.offer-card:nth-child(3)', {
    ...scrollRevealOptions,
    origin: 'right',
    duration: 1200,
    distance: '70px',
})

const swiper = new Swiper('.swiper', {
    loop: true,
});
