import "../css/navbar.css";
import { global } from "@/data/global";
import { tools } from "@/data/tools";
import { design } from "@/data/design";
import { fullstackRoadmap } from "@/data/fullstackRoadmap";
import { motionThreeD } from "@/data/motionThreeD";
import { ai } from "@/data/ai";
import { misc } from "@/data/misc";

const ul = document.querySelector("#navbar-links");

// data
// ↓
// renderSection()
// ↓
// renderCategories()
// ↓
// renderItems()
// ↓
// HTML final

// Renderiza os links finais (module / label)
// duck typing / shape-based rendering
const renderItems = (items = []) =>
  items
    .map((item, index) => {
      // Module type (has .module)
      if ("module" in item) {
        return index === 0
          ? /* html */ `
              <li class="navbar__module">
                <a href="${item.href}">${item.module}</a>
              </li>
            `
          : /* html */ `
              <li class="navbar__module">
                <a href="${item.href}">Module ${index} • ${item.module}</a>
              </li>
            `;
      }

      // Label type (has .label)
      return /* html */ `
        <li class="navbar__label">
          <a href="${item.href}" class="navbar__icon__alignement">
            ${item.labelIcon ? /* html */ `<img src="${item.labelIcon}" class="navbar__icon__size" />` : ""}
            ${item.label}
          </a>
        </li>
      `;
    })
    .join("");

// tags: details & summary
const renderCategories = (categories = []) =>
  categories
    .map((category) => {
      const items = category.modules ?? category.labels ?? [];

      return /* html */ `
          <li>
            <details>
              <summary>
                <div class="navbar__icon__alignement">
                  ${
                    category.icon
                      ? /* html */ `<img src="${category.icon}" class="navbar__icon__size ${category.category === "Three JS" ? "invert" : ""}" />`
                      : ""
                  }
                  <span class="navbar__category">${category.category}</span>
                </div>
              </summary>

              <ul class="navbar__modules">
                ${renderItems(items)}
              </ul>
            </details>
          </li>
        `;
    })
    .join("");

// ...
const renderSection = (section, headerClass = "section-icon") => {
  // Section with direct labels (no categories / no details-summary)
  if (section.labels) {
    return /* html */ `
      <div class="line-break-item">
        <div class="${headerClass}">
          <img src="${section.icon}" />
          <span class="navbar__section">${section.section}</span>
        </div>

        <ul class="flex-align-center">
          ${renderItems(section.labels)}
        </ul>
      </div>
    `;
  }

  // Default: section with categories (details/summary)
  return /* html */ `
    <div class="line-break-item">
      <div class="${headerClass}">
        <img src="${section.icon}" />
        <span class="navbar__section">${section.section}</span>
      </div>

      ${renderCategories(section.categories)}
    </div>
  `;
};

ul.innerHTML = /* html */ `
  <div class="line-break">

    <!-- Global pages (Home / Resources / ...) -->
    <div class="line-break-item">
      <ul class="navbar__globals">
        ${global
          .map(
            (item) => /* html */ `
            <li class="navbar__global">
              <a href="${item.href}">${item.label}</a>
            </li>
          `,
          )
          .join("")}
      </ul>
    </div>

    <!-- Tools -->
    ${tools
      .filter((section) => section.section)
      .map((section) => renderSection(section))
      .join("")}

      <!-- UI / UX Design -->
    ${design
      .filter((section) => section.section)
      .map((section) => renderSection(section))
      .join("")}
    
    <!-- Full-Stack Roadmap -->
    ${fullstackRoadmap
      .filter((section) => section.section)
      .map((section) => renderSection(section))
      .join("")}

    <!-- Artificial Intelligence -->
    ${ai
      .filter((section) => section.section)
      .map((section) => renderSection(section, "flex-align-center"))
      .join("")}

    <!-- Miscellaneous -->
    ${misc
      .filter((section) => section.section)
      .map((section) => renderSection(section, "flex-align-center"))
      .join("")}
  </div>
`;
