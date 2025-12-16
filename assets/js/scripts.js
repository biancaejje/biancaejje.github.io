// TEMA (DARK / LIGHT)
const rootHtml = document.documentElement;
const toggleThemeButton = document.getElementById("toggleTheme");

function toggleTheme() {
  const currentTheme = rootHtml.getAttribute("data-theme");

  rootHtml.setAttribute(
    "data-theme",
    currentTheme === "dark" ? "light" : "dark"
  );
}

toggleThemeButton.addEventListener("click", toggleTheme);

// ACCORDION
const accordionHeaders = document.querySelectorAll(".accordion__header");

accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentElement;
    accordionItem.classList.toggle("active");
  });
});

// MENU ACTIVE
const menuLinks = document.querySelectorAll(".menu__link");

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    menuLinks.forEach(item => item.classList.remove("active"));
    link.classList.add("active");
  });
});


// SCROLL SUAVE PARA MENU
document.querySelectorAll('.menu--principal a').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = this.getAttribute('href');

    if (target === '#home') {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const section = document.querySelector(target);
      if (section) {
        e.preventDefault();
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});
