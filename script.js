// =========================
// PAGE LOAD ANIMATION
// =========================

window.addEventListener('load', () => {

    document.body.style.opacity = '1';

});


// =========================
// FADE UP SCROLL ANIMATION
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

        navbar.style.padding = '18px 7%';
        navbar.style.background = 'rgba(239,231,223,0.95)';
        navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';

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
// PROCESS TAB SWITCHING
// =========================

const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');
const processImage = document.getElementById('processImage');

const images = {

    1:'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',

    2:'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop',

    3:'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop'

};


// TAB CLICK

tabButtons.forEach((button) => {

    button.addEventListener('click', () => {

        const tab = button.dataset.tab;

        // REMOVE ACTIVE

        tabButtons.forEach((btn) => {
            btn.classList.remove('active');
        });

        tabContents.forEach((content) => {
            content.classList.remove('active');
        });

        // ADD ACTIVE

        button.classList.add('active');

        document.getElementById(`tab${tab}`).classList.add('active');

        // CHANGE IMAGE

        processImage.style.opacity = '0';

        setTimeout(() => {

            processImage.src = images[tab];
            processImage.style.opacity = '1';

        }, 250);

    });

});


// =========================
// PROCESS CARD TILT EFFECT
// =========================

const processCard = document.querySelector('.process-card');

processCard.addEventListener('mousemove', (e) => {

    const rect = processCard.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / 30);
    const rotateY = ((centerX - x) / 30);

    processCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

});

processCard.addEventListener('mouseleave', () => {

    processCard.style.transform = 'rotateX(0deg) rotateY(0deg)';

});


// =========================
// METHODS SLIDER DRAG
// =========================

const slider = document.querySelector('.methods-slider');

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {

    isDown = true;

    slider.classList.add('dragging');

    startX = e.pageX - slider.offsetLeft;

    scrollLeft = slider.scrollLeft;

});

slider.addEventListener('mouseleave', () => {

    isDown = false;

});

slider.addEventListener('mouseup', () => {

    isDown = false;

});

slider.addEventListener('mousemove', (e) => {

    if(!isDown) return;

    e.preventDefault();

    const x = e.pageX - slider.offsetLeft;

    const walk = (x - startX) * 1.5;

    slider.scrollLeft = scrollLeft - walk;

});


// =========================
// METHOD CARD HOVER
// =========================

const methodCards = document.querySelectorAll('.method-card');

methodCards.forEach((card) => {

    card.addEventListener('mouseenter', () => {

        card.style.transform = 'translateY(-15px) scale(1.01)';

    });

    card.addEventListener('mouseleave', () => {

        card.style.transform = 'translateY(0px) scale(1)';

    });

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
progressBar.style.zIndex = '9999';
progressBar.style.transition = 'width 0.2s ease';


document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {

    const scrollTop = window.scrollY;

    const docHeight = document.body.scrollHeight - window.innerHeight;

    const progress = (scrollTop / docHeight) * 100;

    progressBar.style.width = progress + '%';

});


// =========================
// HERO TEXT PARALLAX
// =========================

const heroTitle = document.querySelector('.hero-left h1');

window.addEventListener('scroll', () => {

    const scrollPosition = window.scrollY;

    heroTitle.style.transform = `translateY(${scrollPosition * 0.15}px)`;

});