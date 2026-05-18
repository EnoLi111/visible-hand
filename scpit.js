/* =========================
NAVBAR SCROLL EFFECT
========================= */

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        nav.style.padding = "18px 7%";
        nav.style.background = "rgba(255,255,255,0.9)";
        nav.style.boxShadow = "0 5px 25px rgba(0,0,0,0.08)";

    } else {

        nav.style.padding = "28px 7%";
        nav.style.background = "rgba(239,231,223,0.82)";
        nav.style.boxShadow = "none";

    }

});



/* =========================
FADE UP ANIMATION
========================= */

const fadeElements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{
    threshold:0.2
});

fadeElements.forEach(el => observer.observe(el));



/* =========================
PROCESS TABS
========================= */

const processButtons = document.querySelectorAll(".process-buttons button");
const processCards = document.querySelectorAll(".process-card");

processButtons.forEach((button,index) => {

    button.addEventListener("click", () => {

        processCards.forEach(card => {
            card.classList.remove("active");
        });

        processCards[index].classList.add("active");

    });

});



/* =========================
HERO IMAGE PARALLAX
========================= */

const heroImage = document.querySelector(".office-image");

window.addEventListener("scroll", () => {

    let scroll = window.scrollY;

    if(heroImage){

        heroImage.style.transform = `translateY(${scroll * 0.08}px) scale(1.02)`;

    }

});



/* =========================
RIBBON FLOAT ANIMATION
========================= */

const ribbons = document.querySelectorAll(".ribbon");

window.addEventListener("mousemove",(e)=>{

    let x = e.clientX / window.innerWidth;

    ribbons.forEach((ribbon,index)=>{

        let speed = (index + 1) * 12;

        ribbon.style.transform += ` translateX(${x * speed}px)`;

    });

});



/* =========================
METHODS SLIDER
========================= */

const slider = document.querySelector(".methods-slider");

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown",(e)=>{

    isDown = true;
    slider.classList.add("active");

    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;

});

slider.addEventListener("mouseleave",()=>{

    isDown = false;

});

slider.addEventListener("mouseup",()=>{

    isDown = false;

});

slider.addEventListener("mousemove",(e)=>{

    if(!isDown) return;

    e.preventDefault();

    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;

    slider.scrollLeft = scrollLeft - walk;

});



/* =========================
AUTO SLIDE
========================= */

let autoSlide = setInterval(()=>{

    slider.scrollLeft += 1.2;

    if(
        slider.scrollLeft + slider.clientWidth 
        >= slider.scrollWidth
    ){

        slider.scrollLeft = 0;

    }

},20);



/* =========================
FLOATING CARD EFFECT
========================= */

const cards = document.querySelectorAll(".method-card");

cards.forEach(card => {

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 10;
        const rotateX = ((y / rect.height) - 0.5) * -10;

        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-10px)
        `;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform = `
            perspective(1000px)
            rotateX(0deg)
            rotateY(0deg)
            translateY(0px)
        `;

    });

});



/* =========================
SMOOTH NAVIGATION
========================= */

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });

    });

});



/* =========================
PROCESS IMAGE HOVER ZOOM
========================= */

const processImages = document.querySelectorAll(".process-image img");

processImages.forEach(img => {

    img.addEventListener("mouseenter",()=>{

        img.style.transform = "scale(1.08)";

    });

    img.addEventListener("mouseleave",()=>{

        img.style.transform = "scale(1)";

    });

});



/* =========================
PAGE LOAD ANIMATION
========================= */

window.addEventListener("load",()=>{

    document.body.style.opacity = "1";

});
