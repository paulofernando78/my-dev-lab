import componentStyles from "@css/imports/component.css?inline";
import { categoryStyles } from "@/data/categoryStyles.js";

import { global } from "@/data/global.js";
import { roadmap } from "@/data/roadmap.js";
import { misc } from "@/data/misc.js";

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
    font-family: "Archivo Black", sans-serif;
    font-weight: 500;
    color: var(--category-color);
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

    //! SiteMap
    const globalPage = global.find(p => p.href === path)

    if (globalPage) {
      const globalConfig = {
        background: "var(--slate-2)",
        color: "#18191F",
      };

      this.style.setProperty("--category-bg-color", globalConfig.background);
      this.style.setProperty("--category-color", globalConfig.color);

      this.shadowRoot.innerHTML = /* html */`
        <style>
          ${componentStyles}
          ${style}
        </style>
        <div class="page-header">
          <div>
            <h2>${globalPage.label}</h2>
          </div>
        </div>
      `;

      return;
    }

    //! Misc
    // Flatten misc to find current page
    const miscPages = misc
      .flatMap((section) => section.categories ?? [])
      .flatMap((category) =>
        (category.labels ?? []).map((l) => ({
          ...l,
          category: category.category,
          icon: category.icon,
        })),
      )
      .filter((p) => p.href);

    const miscCurrent = miscPages.find((p) => p.href === path);

    if (miscCurrent) {
      const config = categoryStyles[miscCurrent.category] ?? {
        background: "var(--slate-2)",
      };

      this.style.setProperty("--category-bg-color", config.background);
      this.style.setProperty("--category-color", config.color ?? "#18191F");

      this.shadowRoot.innerHTML = /* html */ `
        <style>
          ${componentStyles}
          ${style}
        </style>
        <div class="page-header">
          <div>
            <h2>${miscCurrent.category}</h2>
            <h3>${miscCurrent.label}</h3>
          </div>
          ${config.icon
            ? /* html */ `<img src="${config.icon}" class="icons"/>`
            : ""}
        </div>
      `;

      return;
    }

    //! Roadmap
    // Flatten roadmap to find current page
    const modules = roadmap
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
