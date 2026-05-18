// =========================
// FADE UP ANIMATION
// =========================

const fadeElements = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add('active');

        }

    });

}, {

    threshold:0.15

});

fadeElements.forEach((element) => {

    observer.observe(element);

});


// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {

    if(window.scrollY > 50){

        navbar.style.padding = '20px 7%';
        navbar.style.background = 'rgba(239,231,223,0.94)';
        navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.04)';

    }

    else{

        navbar.style.padding = '28px 7%';
        navbar.style.background = 'rgba(239,231,223,0.82)';
        navbar.style.boxShadow = 'none';

    }

});


// =========================
// HERO IMAGE FLOAT EFFECT
// =========================

const heroImage = document.querySelector('.hero-image img');

window.addEventListener('scroll', () => {

    const scrollY = window.scrollY;

    heroImage.style.transform = `translateY(${scrollY * -0.08}px)`;

});


// =========================
// PROCESS CARD HOVER EFFECT
// =========================

const processCard = document.querySelector('.process-card');

processCard.addEventListener('mousemove', (e) => {

    const rect = processCard.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / 25);
    const rotateY = ((centerX - x) / 25);

    processCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

});

processCard.addEventListener('mouseleave', () => {

    processCard.style.transform = 'rotateX(0) rotateY(0)';

});


// =========================
// TEXT PARALLAX EFFECT
// =========================

const statement = document.querySelector('.statement h2');

window.addEventListener('scroll', () => {

    const scrollPosition = window.scrollY;

    statement.style.transform = `translateY(${scrollPosition * 0.05}px)`;

});


// =========================
// INTERVENTION CARD ANIMATION
// =========================

const interventionCards = document.querySelectorAll('.intervention-card');

interventionCards.forEach((card) => {

    card.addEventListener('mouseenter', () => {

        card.style.transform = 'translateY(-12px)';

    });

    card.addEventListener('mouseleave', () => {

        card.style.transform = 'translateY(0px)';

    });

});


// =========================
// SMOOTH HERO REVEAL
// =========================

window.addEventListener('load', () => {

    document.body.style.opacity = '1';

});


// =========================
// SCROLL PROGRESS BAR
// =========================

const progressBar = document.createElement('div');

progressBar.style.position = 'fixed';
progressBar.style.top = '0';
progressBar.style.left = '0';
progressBar.style.height = '4px';
progressBar.style.width = '0%';
progressBar.style.background = '#6d50ff';
progressBar.style.zIndex = '2000';
progressBar.style.transition = 'width 0.2s ease';

document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {

    const scrollTop = window.scrollY;

    const docHeight = document.body.scrollHeight - window.innerHeight;

    const progress = (scrollTop / docHeight) * 100;

    progressBar.style.width = progress + '%';

});