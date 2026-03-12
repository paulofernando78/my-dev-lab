import { navigateTo, renderRoute } from "./router";

// Run the router when the page first loads, then check if the main area needs a scrollbar
document.addEventListener("DOMContentLoaded", () => {
  renderRoute();
  // Delay the scroll check so the browser finishes rendering the route content
  setTimeout(checkScroll, 0);
});

// Intercept internal link clicks so navigation works through the SPA router
document.addEventListener("click", (e) => {
  if (!(e.target instanceof Element)) return;

  const link = e.target.closest("[data-link]");
  if (!link) return;

  if (link.origin !== location.origin) return;

  e.preventDefault();
  const path = link.getAttribute("href");

  // Navigate using the router instead of doing a full page reload
  navigateTo(path);
  // Run the scroll check after the new route content is rendered
  setTimeout(checkScroll, 0);
});

const main = document.querySelector("main");

const app = document.querySelector("#app");
// Observe size changes inside #app so we can detect when content grows and a scrollbar appears
if (app) {
  const observer = new ResizeObserver(() => {
    // Recalculate scroll state whenever the content size changes
    checkScroll();
  });
  observer.observe(app);
}

function checkScroll() {
  // Determine whether the main container has vertical overflow.
  // scrollHeight = total content height
  // clientHeight = visible height of the element
  // If scrollHeight is greater, a scrollbar is present

  const hasScroll = main.scrollHeight > main.clientHeight;
  // Debug: prints whether a scrollbar is currently needed
  console.log(hasScroll)

  if (hasScroll) {
    main.classList.add("has-scroll");
  } else {
    main.classList.remove("has-scroll");
  }
}
// Recalculate scroll state when the window size changes
window.addEventListener("resize", checkScroll);
