import "@js/app.js";
import "@css/styles.css";
import "@utils/componentsImport.js";
import "@js/navbar-links.js";
// import "@/component/atoms/Icon.js";

// Restore Theme on Page Load
const savedTheme = localStorage.getItem("theme") || "light";
document.body.setAttribute("data-theme", savedTheme);

function initTheme() {
  const darkModeBtn = document.querySelector("wc-button[icon='darkMode']");
  if (!darkModeBtn) return;

  darkModeBtn.setAttribute(
    "icon",
    savedTheme === "dark" ? "lightMode" : "darkMode",
  );

  darkModeBtn.addEventListener("click", () => {
    const current = document.body.getAttribute("data-theme");

    // Is current theme dark? When clicked use light, otherwise use dark
    const newTheme = current === "dark" ? "light" : "dark";

    // Apply Theme
    document.body.setAttribute("data-theme", newTheme);

    //Save Theme
    localStorage.setItem("theme", newTheme);

    // Will New theme be dark? If yes, use lightMode, otherwise use darkMode
    darkModeBtn.setAttribute(
      "icon",
      newTheme === "dark" ? "lightMode" : "darkMode",
    );
  });
}

function closeAllDetails(nav) {
  if (!nav) return;
  // Search for all <details> inside nav
  nav.querySelectorAll("details").forEach((d) => {
    d.removeAttribute("open");
  });
}

function initMenu() {
  const menuBtn = document.querySelector("wc-button[icon='menu']");
  const nav = document.querySelector("nav");
  if (!menuBtn || !nav) return;


  // Quando clica no hamburger
// 1️⃣ visible é adicionada ao <nav>
// 2️⃣ toggle() retorna true
// 3️⃣ toggleHamIcon(true)
// 4️⃣ true  → menu aberto → X

// Quando clica no X
// 1️⃣ visible é removida
// 2️⃣ toggle() retorna false
// 3️⃣ toggleHamIcon(false)
// 4️⃣ false → menu fechado → ☰

  menuBtn.addEventListener("nav-click", () => {
    const isOpen = nav.classList.toggle("visible");
    menuBtn.toggleHamIcon(isOpen);

    if (!isOpen) closeAllDetails(nav);
  });

  // Event Delegation
  nav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      nav.classList.remove("visible");
      menuBtn.toggleHamIcon(false);
      closeAllDetails(nav);
    }
  });
}

function initBreakpoints() {
  const nav = document.querySelector("nav");
  const menuBtn = document.querySelector("wc-button[icon='menu']");
  if (!nav || !menuBtn) return;

  const mq = window.matchMedia("(max-width: 700px)");

  // mq.matches === true  → tela ≤ 700px  (mobile)
  // mq.matches === false → tela > 700px  (desktop)

  function handleBreakpoint(e) {
    // When leaving the mobile breakpoint (>700px),
    // force menu to close and reset the hamburger icon
    if (!e.matches) {
      nav.classList.remove("visible");
      menuBtn.toggleHamIcon(false);
      closeAllDetails(nav);
    }
  }

  mq.addEventListener("change", handleBreakpoint);
  handleBreakpoint(mq);
}

initTheme();
initMenu();
initBreakpoints();

const scrollToTop = document.querySelector("wc-icon[name='scrollToTop']");

function handleScroll() {
  if (!scrollToTop) return;

  if (window.scrollY > 300) {
    scrollToTop.classList.add("visible");
  } else {
    scrollToTop.classList.remove("visible");
  }
}

window.addEventListener("scroll", handleScroll);
handleScroll();

scrollToTop?.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
