function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("nav-active");
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}