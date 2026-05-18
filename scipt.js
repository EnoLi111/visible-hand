/* =========================
   STABLE SCRIPT.JS
   Gender Equity Website
========================= */


/* =========================
   FADE-UP ANIMATION
========================= */

const fadeElements = document.querySelectorAll(".fade-up");

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.18
});

fadeElements.forEach((element) => {
    fadeObserver.observe(element);
});


/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(239, 231, 226, 0.96)";
        navbar.style.boxShadow = "0 6px 24px rgba(0,0,0,0.08)";
        navbar.style.padding = "22px 7%";
    } else {
        navbar.style.background = "rgba(239, 231, 226, 0.88)";
        navbar.style.boxShadow = "none";
        navbar.style.padding = "32px 7%";
    }
});


/* =========================
   PROCESS TABS
========================= */

const processButtons = document.querySelectorAll(".process-buttons button");
const processCards = document.querySelectorAll(".process-card");

processButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        processButtons.forEach((btn) => {
            btn.classList.remove("active-tab");
        });

        processCards.forEach((card) => {
            card.classList.remove("active");
        });

        button.classList.add("active-tab");

        if (processCards[index]) {
            processCards[index].classList.add("active");
        }
    });
});


/* =========================
   METHODS SLIDER DRAG
========================= */

const slider = document.querySelector(".methods-slider");

if (slider) {
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    slider.addEventListener("mousedown", (event) => {
        isDown = true;
        slider.classList.add("dragging");
        startX = event.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("mouseleave", () => {
        isDown = false;
        slider.classList.remove("dragging");
    });

    slider.addEventListener("mouseup", () => {
        isDown = false;
        slider.classList.remove("dragging");
    });

    slider.addEventListener("mousemove", (event) => {
        if (!isDown) return;

        event.preventDefault();

        const x = event.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1.8;

        slider.scrollLeft = scrollLeft - walk;
    });

    slider.addEventListener("touchstart", (event) => {
        isDown = true;
        startX = event.touches[0].pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("touchend", () => {
        isDown = false;
    });

    slider.addEventListener("touchmove", (event) => {
        if (!isDown) return;

        const x = event.touches[0].pageX - slider.offsetLeft;
        const walk = (x - startX) * 1.4;

        slider.scrollLeft = scrollLeft - walk;
    });
}


/* =========================
   FLOATING RIBBON MOTION
========================= */

const ribbons = document.querySelectorAll(".floating-ribbon");

window.addEventListener("mousemove", (event) => {
    const mouseX = event.clientX / window.innerWidth - 0.5;
    const mouseY = event.clientY / window.innerHeight - 0.5;

    ribbons.forEach((ribbon, index) => {
        const speed = (index + 1) * 18;

        ribbon.style.transform = `
            translate(${mouseX * speed}px, ${mouseY * speed}px)
            rotate(${mouseX * 8}deg)
        `;
    });
});


/* =========================
   HERO IMAGE SUBTLE ZOOM
========================= */

const officeImage = document.querySelector(".office-image");

window.addEventListener("scroll", () => {
    if (!officeImage) return;

    const scale = 1 + window.scrollY * 0.00008;
    const limitedScale = Math.min(scale, 1.08);

    officeImage.style.transform = `scale(${limitedScale})`;
});


/* =========================
   METHOD CARD HOVER DEPTH
========================= */

const methodCards = document.querySelectorAll(".method-card");

methodCards.forEach((card) => {
    card.addEventListener("mousemove", (event) => {
        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 8;
        const rotateX = ((y / rect.height) - 0.5) * -8;

        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-10px)
        `;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = `
            perspective(1000px)
            rotateX(0deg)
            rotateY(0deg)
            translateY(0px)
        `;
    });
});


/* =========================
   SCROLL PROGRESS BAR
========================= */

const progressBar = document.createElement("div");

progressBar.style.position = "fixed";
progressBar.style.top = "0";
progressBar.style.left = "0";
progressBar.style.height = "4px";
progressBar.style.width = "0%";
progressBar.style.background = "#7a4cff";
progressBar.style.zIndex = "9999";
progressBar.style.transition = "width 0.15s ease";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const documentHeight = document.body.scrollHeight - window.innerHeight;

    if (documentHeight <= 0) return;

    const progress = (scrollTop / documentHeight) * 100;

    progressBar.style.width = progress + "%";
});


/* =========================
   SMOOTH NAVIGATION
========================= */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        const href = link.getAttribute("href");

        if (!href || !href.startsWith("#")) return;

        const target = document.querySelector(href);

        if (!target) return;

        event.preventDefault();

        window.scrollTo({
            top: target.offsetTop - 100,
            behavior: "smooth"
        });
    });
});


/* =========================
   LOADING EFFECT
========================= */

document.body.style.opacity = "0";
document.body.style.transition = "opacity 0.8s ease";

window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});


console.log("Gender Equity website script loaded successfully.");
