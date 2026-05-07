const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".site-header nav a");
const yearSpan = document.getElementById("year");
const themeToggle = document.getElementById("themeToggle");

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

function setTheme(isDark) {
  document.body.classList.toggle("dark", isDark);

  if (themeToggle) {
    themeToggle.textContent = isDark ? "🌙" : "☀️";
  }
}

setTheme(true);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const dark = !document.body.classList.contains("dark");
    setTheme(dark);
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {

      const id = entry.target.getAttribute("id");

      const link = document.querySelector(
        `.site-header nav a[href="#${id}"]`
      );

      if (entry.isIntersecting && link) {
        navLinks.forEach((a) => a.classList.remove("active"));
        link.classList.add("active");
      }

    });
  },
  {
    rootMargin: "-40% 0px -50% 0px",
    threshold: 0.1,
  }
);

sections.forEach((section) => {
  observer.observe(section);
});
``