// Navbar scroll effect
window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Reveal animation
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  reveals.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

// Hamburger menu
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", function() {
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-menu a").forEach(function(link) {
  link.addEventListener("click", function() {
    navMenu.classList.remove("active");
  });
});
