// Mobile Sidebar Toggle
const mobileSidebar = document.getElementById("mobileSidebar");
const sidebarContent = document.getElementById("sidebarContent");
const openSidebar = document.getElementById("openSidebar");
const closeSidebar = document.getElementById("closeSidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");

openSidebar.addEventListener("click", () => {
  mobileSidebar.classList.remove("hidden");
  setTimeout(() => {
    sidebarContent.classList.remove("translate-x-full");
  }, 10);
});

closeSidebar.addEventListener("click", () => {
  sidebarContent.classList.add("translate-x-full");
  setTimeout(() => {
    mobileSidebar.classList.add("hidden");
  }, 300);
});

sidebarOverlay.addEventListener("click", () => {
  sidebarContent.classList.add("translate-x-full");
  setTimeout(() => {
    mobileSidebar.classList.add("hidden");
  }, 300);
});

// Scroll Progress Indicator
const scrollProgress = document.getElementById("scrollProgress");
window.addEventListener("scroll", () => {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const progress = (scrollTop / scrollHeight) * 100;
  scrollProgress.style.width = progress + "%";
});

// Back to Top Button
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTop.classList.remove("opacity-0", "invisible");
    backToTop.classList.add("opacity-100", "visible");
  } else {
    backToTop.classList.remove("opacity-100", "visible");
    backToTop.classList.add("opacity-0", "invisible");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Header Scroll Effect
const header = document.getElementById("header");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    header.classList.remove("glass-effect");
    header.classList.add("glass-effect");
    return;
  }

  if (currentScroll > lastScroll && currentScroll > 100) {
    // Scroll Down
    header.classList.remove("glass-effect");
  } else {
    // Scroll Up
    header.classList.add("glass-effect");
  }

  lastScroll = currentScroll;
});

// Intersection Observer for Fade-in Animations
const fadeElements = document.querySelectorAll(".fade-in-observed");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

fadeElements.forEach((element) => {
  observer.observe(element);
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: "smooth",
      });

      // Close mobile sidebar if open
      if (!mobileSidebar.classList.contains("hidden")) {
        sidebarContent.classList.add("translate-x-full");
        setTimeout(() => {
          mobileSidebar.classList.add("hidden");
        }, 300);
      }
    }
  });
});

// Redirect button
const redirectButton = document.getElementById("redirectButton");
redirectButton.addEventListener("click", () => {
  window.location.href = "https://www.google.com";
});
