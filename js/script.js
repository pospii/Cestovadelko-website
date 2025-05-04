document.addEventListener("DOMContentLoaded", () => {
  // Sticky navbar pomocí Intersection Observer
  const navbar = document.getElementById("navbar");
  const navTrigger = document.getElementById("nav-trigger");

  if (navbar && navTrigger) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          navbar.classList.add("sticky");
        } else {
          navbar.classList.remove("sticky");
        }
      });
    });

    observer.observe(navTrigger);
  }

  // Náhodné obrázky pro dekorativní linii
  const imagePaths = [
    "images/kidos.png",
    "images/train.png",
    "images/spiral.png",
    "images/puzzle.png",
  ];

  function getRandomFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function generateDecorativeLine(containerId, count = 20) {
    const container = document.getElementById(containerId);
    if (!container) return;

    for (let i = 0; i < count; i++) {
      const img = document.createElement("img");
      img.src = getRandomFromArray(imagePaths);

      const size = Math.floor(Math.random() * 30) + 20;
      const rotation = Math.random() * 40 - 20;

      img.style.width = `${size}px`;
      img.style.transform = `rotate(${rotation}deg)`;

      container.appendChild(img);
    }
  }

  generateDecorativeLine("deco-line-2", 18);

  // Hamburger menu přepínání a zavření
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.querySelector("nav ul");
  const navLinks = navMenu.querySelectorAll("a");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      hamburger.classList.toggle("open");
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        hamburger.classList.remove("open");
      });
    });
  }
});
