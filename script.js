AOS.init({
  duration: 800,
  offset: 100,
  once: true,
});

// Scroll to Top Functionality
const scrollToTop = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTop.classList.add("visible");
  } else {
    scrollToTop.classList.remove("visible");
  }
});

scrollToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("toggle-dark");
  if (toggle) {
    toggle.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
    });
  }
});
