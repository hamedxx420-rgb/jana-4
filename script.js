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

      if (link) {
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
// ✅ Animation on Scroll (حل المشكلة)

const elements = document.querySelectorAll("section.hidden");

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.1
});

elements.forEach((el) => observer2.observe(el));

window.onload = () => {
  document.querySelectorAll("section").forEach(el => el.classList.add("show"));
};

// ✅ حل نهائي لإظهار كل حاجة
window.onload = () => {
  document.querySelectorAll(".hidden").forEach(el => {
    el.classList.remove("hidden");
  });
};
