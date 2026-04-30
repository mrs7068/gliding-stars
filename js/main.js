// =========================
// NAV TOGGLE
// =========================
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");

if (toggle && links) {
    toggle.addEventListener("click", () => {
        links.classList.toggle("active");
        toggle.classList.toggle("active");
    });
}


// =========================
// NAV SCROLL BEHAVIOR
// =========================
const body = document.body;
const hero = document.querySelector(".hero");

if (hero) {
    const updateNavState = () => {
        const heroHeight = hero.offsetHeight;
        const isMobile = window.innerWidth <= 767;

        const logoTrigger = isMobile
            ? heroHeight * 0.5
            : heroHeight * 0.68;

        const bgTrigger = heroHeight - 80;

        if (window.scrollY > logoTrigger) {
            body.classList.add("scrolled");
        } else {
            body.classList.remove("scrolled");
        }

        if (window.scrollY > bgTrigger) {
            body.classList.add("nav-solid");
        } else {
            body.classList.remove("nav-solid");
        }
    };

    updateNavState();
    window.addEventListener("scroll", updateNavState);
    window.addEventListener("resize", updateNavState);
}


// =========================
// REDIRECT MEMORY
// =========================
if (location.pathname !== "/" && !location.pathname.endsWith(".html")) {
    sessionStorage.setItem("redirect", location.pathname);
}

// =========================
// GALLERY (CAROUSEL + LIGHTBOX)
// =========================
const carousels = document.querySelectorAll(".gallery-carousel");

if (carousels.length) {

    // ---- Carousel buttons ----
    carousels.forEach(carousel => {
        const track = carousel.querySelector(".gallery-track");
        const next = carousel.querySelector(".next");
        const prev = carousel.querySelector(".prev");

        if (!track || !next || !prev) return;

        next.addEventListener("click", () => {
            track.scrollBy({
                left: track.offsetWidth * 0.8,
                behavior: "smooth"
            });
        });

        prev.addEventListener("click", () => {
            track.scrollBy({
                left: -track.offsetWidth * 0.8,
                behavior: "smooth"
            });
        });
    });


    // ---- Lightbox ----
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.querySelector(".lightbox-img");
    const lightboxCaption = document.querySelector(".lightbox-caption");
    const closeBtn = document.querySelector(".lightbox-close");

    if (lightbox && lightboxImg && lightboxCaption && closeBtn) {

        document.querySelectorAll(".gallery-item img").forEach(img => {
            img.addEventListener("click", () => {
                lightbox.classList.add("active");
                lightboxImg.src = img.dataset.full;
                lightboxCaption.innerHTML = img.alt;
            });
        });

        closeBtn.addEventListener("click", () => {
            lightbox.classList.remove("active");
        });

        lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove("active");
            }
        });
    }
}