import styleImports from "@css/styles.css?inline";

import { fullstackRoadmap } from "@/data/fullstackRoadmap.js";
import { categoryStyles } from "@/data/categoryStyles.js";

const style = /* css */ `
  nav {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px
  }

  nav a {
    color: var(--text-color)
  }

  nav a:hover {
    color: var(--blue-4)
  }

  img {
    width: 30px
  }

  .previous, .next {
    display: flex;
    gap: 5px;
  }
  
  .next {
  justify-self: end
  }

  .next > div {
    text-align: right
  }
  
  .previous span,
  .next span {
    display: block;
  }

  .previous span:first-child {
    font-size: 0.9rem;
    color: var(--slate-4);
    margin-bottom: 8px
  }

  .next span:first-child {
    font-weight: bold;
    margin-bottom: 8px
  }

  .previous span:last-child,
  .next span:last-child {
    font-weight: bold;
  }

  .icon-alighment {
    display: flex;
    align-items: start;
    gap: 10px;
  }

  img {
    width: 20px
  }
`;

class LessonNav extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const path = window.location.pathname;
    this.render(path);
  }

  render(path) {
    // Build ordered list of all modules, each with its category
    const modules = fullstackRoadmap
      .flatMap((section) => section.categories ?? [])
      .flatMap((category) =>
        (category.modules ?? []).map((m) => ({
          ...m,
          category: category.category,
        })),
      )
      .filter((m) => m.href);

    // Find current module
    const current = modules.find((m) => m.href === path);
    if (!current) return;

    // Helper: lessons within a given category (ignore Resources)
    const lessonsByCategory = (category) =>
      modules.filter(
        (m) => m.category === category && m.module !== "Resources",
      );

    // Create function to get number per its OWN category
    const moduleNumber = (mod) =>
      lessonsByCategory(mod.category).findIndex(
        (l) => l.href === mod.href,
      ) + 1;

    // Find current module index (global order for prev/next)
    const index = modules.findIndex((m) => m.href === current.href);

    const prev = modules[index - 1];
    const next = modules[index + 1];

    const formatLabel = (mod) =>
      mod.module === "Resources"
        ? mod.module
        : `Module ${moduleNumber(mod)} • ${mod.module}`;

    const getCategoryConfig = (mod) =>
      categoryStyles[mod.category] ?? {}

    const prevConfig = prev ? getCategoryConfig(prev) : null
    const nextConfig = next ? getCategoryConfig(next) : null

    this.shadowRoot.innerHTML = /* HTML */ `
      <style>
        ${styleImports}
        ${style}
      </style>
      <hr />
      <nav>
        ${prev
          ? /* html */ `
          <a href="${prev.href}" class="previous">
          <img src="/assets/images/icons/arrow-back.svg" />
          <div>
            <span>Previous</span>
              <div class="icon-alighment">
                ${prevConfig?.icon ? /* html */`<img src="${prevConfig.icon}"/>` : ""}
                <span>${formatLabel(prev)}</span>
              </div>
          </div>
        </a>
        `
          : /* html */ `<span></span>`}
        ${next
          ? /* html */ `
          <a href="${next.href}" class="next">
          <div>
            <span>Next</span>
              <div class="icon-alighment">
              <span>${formatLabel(next)}</span>
                ${nextConfig?.icon ? /* html */`<img src="${nextConfig.icon}"/>` : ""}
              </div>
          </div>
          <img src="/assets/images/icons/arrow-forward.svg" />
        </a>
        `
          : /* html */ `<span></span>`}
      </nav>
    `;
  }
}

customElements.define("wc-lesson-nav", LessonNav);
export default LessonNav;
