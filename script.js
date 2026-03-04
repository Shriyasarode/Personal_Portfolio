document.addEventListener("DOMContentLoaded", () => {
  // Toggle icon navbar
  let menuIcon = document.querySelector("#menu-icon");
  let navbar = document.querySelector(".navbar");

  if (menuIcon && navbar) {
    menuIcon.onclick = () => {
      menuIcon.classList.toggle("bx-x");
      navbar.classList.toggle("active");
    };
  }

  // Scroll section Active Link
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("header nav a");

  window.onscroll = () => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLinks.forEach((links) => {
          links.classList.remove("active");
        });
        let activeLink = document.querySelector(
          "header nav a[href='#" + id + "']"
        );
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });

    // Sticky Navbar
    let header = document.querySelector("header");
    if (header) {
      header.classList.toggle("sticky", window.scrollY > 100);
    }
  };

  // remove Toggle icon and navbar when click navbar Link (scroll)
  navLinks.forEach((link) => {
    link.onclick = () => {
      menuIcon.classList.remove("bx-x");
      navbar.classList.remove("active");
    };
  });

  // Scroll Reveal
  ScrollReveal({
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200,
  });

  ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
  ScrollReveal().reveal(
    ".resume-card, .projects-box, .contact form",
    {
      origin: "bottom",
    }
    /* (".home-img, .about, .resume-info, .projects-box, .contact form",{ origin: "bottom",} */
  );
  ScrollReveal().reveal(".home-content h1, .about-image, .resume-header p", {
    origin: "left",
  });

  ScrollReveal().reveal(".home-content p, .about-content, .resume-section h2", {
    origin: "right",
  });

  // typed js
  const typed = new Typed(".multiple-text", {
    strings: [
      "Frontend Developer",
      // "Web Developer",
      "Java Full Stack Developer",
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });
});
