let menuicon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuicon.onclick = () => {
    menuicon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
    // For mobile menu: toggle display of navbar
    if (navbar.classList.contains("active")) {
        navbar.style.display = "block";
    } else {
        navbar.style.display = "none";
    }
}

// Ensure menu is hidden on load for mobile
window.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth <= 1285) {
        navbar.style.display = "none";
    }
});