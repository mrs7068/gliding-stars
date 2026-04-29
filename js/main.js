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