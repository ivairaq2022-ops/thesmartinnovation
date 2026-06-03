const header = document.getElementById("header");
const nav = document.getElementById("nav");
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelectorAll(".nav-link");
const contactForm = document.getElementById("contactForm");
const yearEl = document.getElementById("year");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
});

navToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", open);
  navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});

const sections = document.querySelectorAll("section[id]");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.getAttribute("id");
      navLinks.forEach((link) => {
        const href = link.getAttribute("href").slice(1);
        link.classList.toggle("active", href === id);
      });
    });
  },
  { rootMargin: "-40% 0px -50% 0px" }
);

sections.forEach((section) => observer.observe(section));

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  alert(`Thank you, ${name}! We received your message and will get back to you soon.`);
  contactForm.reset();
});
