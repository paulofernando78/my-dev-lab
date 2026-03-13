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

  // Menu toggle logic
  // When the hamburger button is clicked:
  // 1. nav.classList.toggle("visible") adds the "visible" class to <nav>.
  //    → CSS uses this class to show the navigation menu.
  // 2. toggle() returns true because the class was added.
  // 3. navOpen receives this value (true).
  // 4. menuBtn.toggleHamIcon(true) changes the icon to "X"
  //    to indicate that the menu is currently open.

  // When the "X" icon is clicked:
  // 1. nav.classList.toggle("visible") removes the "visible" class.
  //    → CSS hides the navigation menu.
  // 2. toggle() returns false because the class was removed.
  // 3. navOpen becomes false.
  // 4. menuBtn.toggleHamIcon(false) switches the icon back to
  //    the hamburger icon to indicate the menu is closed.

  menuBtn.addEventListener("nav-click", () => {
    const navOpen = nav.classList.toggle("visible");
    menuBtn.toggleHamIcon(navOpen);

    if (!navOpen) closeAllDetails(nav);
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

const main = document.querySelector("main");
const scrollToTop = document.querySelector("wc-icon[name='scrollToTop']");

function handleScroll() {
  if (!scrollToTop) return;

  if (main.scrollTop > 300) {
    scrollToTop.classList.add("visible");
  } else {
    scrollToTop.classList.remove("visible");
  }
}

main.addEventListener("scroll", handleScroll);
handleScroll();

scrollToTop?.addEventListener("click", () => {
  main.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
