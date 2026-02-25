import componentStyles from "@css/imports/component.css?inline";

import { curriculum } from "@/data/curriculum.js";
import { categoryStyles } from "@/data/categoryStyles.js";

const style = /* css */ `
  .page-header {
    background-color: var(--category-bg-color);
    border-radius: 5px;
    width: 100%;
    margin-bottom: 32px;
    padding: 12px;
    position: relative;
  }

  .page-header h2, h3, h4 {
     background: var(--heading-gradient);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  h1:has(+ h2) {
    margin-bottom: 0.8rem;
  }
  
  h2 {
    margin-bottom: 0.4rem;
  }

  h2:has(+ h3) {
    margin-bottom: 0.7rem;
  }
  
  h3:has( + h4) {
    margin-bottom: 0.5rem;
  }

  .icons {
    position: absolute;
    bottom: -15px;
    right: 20px;
    width: 40px;
    height: auto;

    filter: drop-shadow(0px 0px 1px black);
  }

  hr {
    margin-bottom: 16px;
    margin-inline: 10px;
    border-color: var(--slate-6)
  }
`;

class PageHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const path = window.location.pathname;

    // Flatten curriculum to find current page
    const modules = curriculum
      .flatMap((section) => section.categories ?? [])
      .flatMap((category) =>
        (category.modules ?? []).map((m) => ({
          ...m,
          category: category.category,
          icon: category.icon,
        })),
      )
      .filter((m) => m.href);

    const current = modules.find((m) => m.href === path);
    if (!current) return;

    // Compute module number (ignore Resources)
    const lessons = modules.filter(
      (m) => m.category === current.category && m.module !== "Resources",
    );

    // Get number
    const moduleNumber =
      current.module === "Resources"
        ? null
        : lessons.findIndex((l) => l.href === current.href) + 1;

    const moduleLabel =
      current.module === "Resources"
        ? /* html */`<h3>Resources</h3>`
        : /* html */ `
        <h3>Module ${moduleNumber}</h3>
        <h4>${current.module}</h4>
        `;

    const config = categoryStyles[current.category] ?? {
      background: "var(--slate-2)",
    };

    this.style.setProperty("--category-bg-color", config.background);
    this.style.setProperty("--category-color", config.color ?? "#18191F");

    const headingGradient =
      current.category === "Javascript"
        ? "linear-gradient(#000000 70%, #cedfdf)"
        : "linear-gradient(#fff, #cedfdf)";

    this.style.setProperty("--heading-gradient", headingGradient);

    this.shadowRoot.innerHTML = /* HTML */ `
      <style>
        ${componentStyles}
        ${style}
      </style>
      <div class="page-header">
        <div>
          <h2>${current.category}</h2>
          ${moduleLabel}
        </div>
        ${config.icon
          ? /* html */ `<img src="${config.icon}" class="icons"/>`
          : ""}
      </div>
    `;
  }
}

customElements.define("wc-page-header", PageHeader);
export default PageHeader;
