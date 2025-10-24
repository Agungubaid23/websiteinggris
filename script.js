// DOM Content Loaded
document.addEventListener("DOMContentLoaded", function () {
  // Login Form Handler
  const loginForm = document.getElementById("login-form");
  const loginPage = document.getElementById("login-page");
  const mainWebsite = document.getElementById("main-website");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Simple validation (in a real app, this would be more secure)
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
      // Show loading animation
      const loginBtn = document.getElementById("login-btn");
      const originalText = loginBtn.textContent;
      loginBtn.textContent = "Logging in...";
      loginBtn.disabled = true;

      // Simulate login process
      setTimeout(function () {
        // Hide login page with animation
        loginPage.style.opacity = "0";
        loginPage.style.transition = "opacity 0.5s ease";

        setTimeout(function () {
          loginPage.classList.remove("active");

          // Show main website with animation
          mainWebsite.classList.add("active");
          setTimeout(function () {
            mainWebsite.classList.add("active");
          }, 100);

          // Reset login button
          loginBtn.textContent = originalText;
          loginBtn.disabled = false;

          // Reset form
          loginForm.reset();
        }, 500);
      }, 1500);
    }
  });

  // Navigation Scroll Effect
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = "rgba(255, 255, 255, 0.98)";
      navbar.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
    } else {
      navbar.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
      navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    }
  });

  // Smooth Scrolling for Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Close mobile menu if open
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");

        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Mobile Menu Toggle
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Close mobile menu when clicking on a link
  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", function () {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });

  // Animate elements on scroll
  const animateOnScroll = function () {
    const elements = document.querySelectorAll(
      ".implementation-card, .pillar, .timeline-content"
    );

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;

      if (elementPosition < screenPosition) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }
    });
  };

  // Set initial state for animated elements
  document
    .querySelectorAll(".implementation-card, .pillar, .timeline-content")
    .forEach((element) => {
      element.style.opacity = "0";
      element.style.transform = "translateY(20px)";
      element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    });

  window.addEventListener("scroll", animateOnScroll);
  // Trigger once on load
  animateOnScroll();

  // Form submission handlers
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for your message! We will get back to you soon.");
      this.reset();
    });
  }

  // CTA Button Handler
  const ctaButton = document.querySelector(".cta-button");
  if (ctaButton) {
    ctaButton.addEventListener("click", function () {
      document.querySelector("#implementation").scrollIntoView({
        behavior: "smooth",
      });
    });
  }

  // Add interactive effects to diagram
  const diagramNodes = document.querySelectorAll(".node");
  diagramNodes.forEach((node) => {
    node.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.1)";
      this.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.15)";
    });

    node.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
      this.style.boxShadow = "0 3px 10px rgba(0, 0, 0, 0.1)";
    });
  });
});
