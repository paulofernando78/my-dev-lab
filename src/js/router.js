const pages = import.meta.glob("../pages/**/page.js");

import "../js/components/atoms/Loading.js";

/*
 * currentPath
 * Tracks the currently-rendered route so we don't re-render the same page unnecessarily.
 */
let currentPath = null;

/*
 * renderToken
 * Incremented on each navigation.
 * Used to prevent race conditions when multiple imports compete:
 * only the latest navigation should render.
 */
let renderToken = 0;

function updateAriaCurrent() {
  const links = document.querySelectorAll("a[data-link]");

  links.forEach((link) => {
    if (link.getAttribute("href") === window.location.pathname) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

/*
 * renderRoute()
 * Main router function responsible for:
 * 1. Detecting the current path
 * 2. Matching it to a route
 * 4. Dynamically importing the page module
 * 5. Rendering the new Web Component
 */
export async function renderRoute() {
  // Read the current browser path (e.g. "/about")
  const app = document.querySelector("#app");
  let path = window.location.pathname; // Current route path
  path = path.toLowerCase();

  // Normalize path
  let normalized = path === "/" ? "/home" : path;

  //
  if (normalized === currentPath) return;
  currentPath = normalized;

  const key = `../pages${normalized}/page.js`;
  const loader = pages[key] ?? pages["../pages/404/page.js"];

  //! Increase token to invalidate older navigations (race condition protection)
  const token = ++renderToken;

  //! Loading.js
  // 1) Fade OUT do conteúdo atual
  app.classList.add("is-fading");

  // Aguarda a transição OU 200ms caso transitionend não dispare
  await Promise.race([
    new Promise((resolve) => {
      const onEnd = () => {
        app.removeEventListener("transitionend", onEnd);
        resolve();
      };
      app.addEventListener("transitionend", onEnd);
    }),
    new Promise((resolve) => setTimeout(resolve, 200)),
  ]);

  // 2) Coloca o loading (já com opacity 0)
  app.replaceChildren(document.createElement("wc-loading"));

  // garante um frame para o loading montar
  await new Promise(requestAnimationFrame);

  // 3) Carrega a página nova
  await loader();
  if (token !== renderToken) return;

  const tag = "wc-" + normalized.slice(1).replaceAll("/", "-");

// URL
// /tools/vs-code
//    ↓
// normalized
// /tools/vs-code
//    ↓ slice(1)
// tools/vs-code
//    ↓ replaceAll
// tools-vs-code
//    ↓ prefix
// wc-tools-vs-code
//    ↓
// Web Component tag

  const element = document.createElement(tag);
  element.classList.add("page");
  app.replaceChildren(element);

  // 4) Fade IN do novo conteúdo
  // remove a classe num próximo frame pra animação disparar certinho
  await new Promise(requestAnimationFrame);
  app.classList.remove("is-fading");

  updateAriaCurrent();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/*
 * PREFETCH SYSTEM
 * When the user hovers or focuses on a link, we proactively
 * preload the module for that route. This makes navigation faster.
 */
const prefetchRoutes = new Set();

function prefetch(path) {
  let normalized = path === "/" ? "/home" : path;
  const key = `../pages${normalized}/page.js`;

  if (!pages[key]) return;
  if (prefetchRoutes.has(key)) return;

  prefetchRoutes.add(key);

  pages[key]().catch((err) => {
    console.warn(`Falha no prefetch de ${path}:`, err);
    prefetchRoutes.delete(key);
  });
}

// Desktop prefetch: preload route module when mouse hovers a link
document.addEventListener(
  "mouseenter",
  (e) => {
    if (!(e.target instanceof Element)) return;
    const link = e.target.closest("[data-link]");
    if (link) prefetch(link.getAttribute("href"));
  },
  true, // capture
);

// Keyboard/mobile accessibility prefetch: triggers on focus
document.addEventListener("focusin", (e) => {
  if (!(e.target instanceof Element)) return;
  const link = e.target.closest("[data-link]");
  if (link) prefetch(link.getAttribute("href"));
});

/*
 * navigateTo(path)
 * Pushes a new URL to the history and calls renderRoute()
 * Allows internal navigation without full page reloads.
 */
export function navigateTo(path) {
  // Updates the browser's URL (History API)
  window.history.pushState({}, "", path);
  renderRoute();
}

// Handle browser Back/Forward — re-renders route on history change
window.addEventListener("popstate", renderRoute);
