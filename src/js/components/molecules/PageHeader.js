import componentStyles from "@css/imports/component.css?inline";
import { categoryStyles } from "@/data/categoryStyles.js";

import { global } from "@/data/global.js";
import { fullstackRoadmap } from "@/data/fullstackRoadmap.js";
import { misc } from "@/data/misc.js";

import { normalizePage } from "@/data/normalizePages";

const style = /* css */ `
  .page-header {
    background-color: var(--category-bg-color);
    border-radius: 5px;
    width: 100%;
    margin-bottom: 32px;
    padding: 12px;
    position: relative;
  }
  
  .page-header h2,
  .page-header h3,
  .page-header h4 {
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

  // 1️⃣ find current
  // 2️⃣ resolve config
  // 3️⃣ compute category/title/subtitle/icon
  // 4️⃣ render once

  render() {
    const path = window.location.pathname;

    const pages = normalizePage({ global, fullstackRoadmap, misc });

    const current = pages.find((p) => p.href === path);
    if (!current) return;

    let category = null;
    let title = null;
    let subtitle = null;
    let icon = null;

    const defaultConfig = {
      background: "var(--slate-2)",
      color: "#18191F",
    };

    const config =
      current.type === "global"
        ? defaultConfig
        : (categoryStyles[current.category] ?? defaultConfig);

    this.style.setProperty("--category-bg-color", config.background);
    this.style.setProperty(
      "--category-color",
      config.color ?? defaultConfig.color,
    );

    // Compute headings

    if (current.type === "global") {
      title = current.title;
    } else if (current.type === "module") {
      const modules = pages.filter(
        (p) => p.type === "module" && p.category === current.category,
      );

      const lessons = modules.filter((m) => m.title !== "Resources");

      const moduleNumber =
        current.module === "Resources"
          ? null
          : lessons.findIndex((l) => l.href === current.href) + 1;

      category = current.category;

      if (current.module === "Resources") {
        title = "Resources";
      } else {
        title = `Module ${moduleNumber}`;
        subtitle = current.module;
      }

      icon = config.icon ?? null;
    } else if (current.type === "misc") {
      category = current.category;
      title = current.title;
      icon = config.icon ?? null;
    }

    //! Modules (Full-Stack Roadmap)

    this.shadowRoot.innerHTML = /* html */ `
      <style>
        ${componentStyles}
        ${style}
      </style>

    <div class="page-header">
      <div>
        ${category ? /* html */ `<h2>${category}</h2>` : /* html */ `<h2>${title}</h2>`}
        ${category ? /* html */ `<h3>${title}</h3>` : ""}
        ${subtitle ? /* html */ `<h4>${subtitle}</h4>` : ""}
      </div>
      ${icon ? /* html */ `<img src="${icon}" class="icons"/>` : ""}
    </div>
`;
  }
}

customElements.define("wc-page-header", PageHeader);
export default PageHeader;
