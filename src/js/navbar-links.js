import "../css/navbar.css";
import { global } from "@/data/global";
import { roadmap } from "@/data/roadmap";
import { misc } from "@/data/misc";

const ul = document.querySelector("#navbar-links");

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

    <!-- Sections -->
    ${roadmap
      .filter((section) => section.section)
      .map(
        (section) => /* html */ `
        <div class="line-break-item">
          <div class="flex-align-center">
            <img src="${section.icon}" />
            <span class="navbar__section">${section.section}</span>
          </div>

          ${section.categories
            .map(
              (category) => /* html */ `
              <li>
                <details>
                  <summary>
                    <div class="navbar__icon__category-wrapper">
                      ${
                        category.icon
                          ? /* html */ `<img src="${category.icon}" class="navbar__icon__size ${category.category === "Three JS" ? "invert" : ""}" />`
                          : ""
                      }
                      <span class="navbar__category">${category.category}</span>
                    </div>
                  </summary>

                  <ul class="navbar__modules">
                    ${category.modules
                      .map((module, index) => {
                        const number = index;
                        return number === 0
                          ? /* html */ `
                              <li class="navbar__module">
                                <a href="${module.href}">${module.module}</a>
                              </li>
                            `
                          : /* html */ `
                              <li class="navbar__module">
                                <a href="${module.href}">Module ${number} • ${module.module}</a>
                              </li>`;
                      })
                      .join("")}
                  </ul>
                </details>
              </li>
            `,
            )
            .join("")}
        </div>
      `,
      )
      .join("")}

      <!-- Miscellaneous -->
    ${misc
      .filter((section) => section.section)
      .map(
        (section) => /* html */ `
        <div class="line-break-item">
          <div class="flex-align-center">
            <img src="${section.icon}" />
            <span class="navbar__section">${section.section}</span>
          </div>

          ${section.categories
            .map(
              (category) => /* html */ `
              <li>
                <details>
                  <summary>
                    <div class="navbar__icon__category-wrapper">
                      ${
                        category.icon
                          ? /* html */ `<img src="${category.icon}" class="navbar__icon__size ${category.category === "Three JS" ? "invert" : ""}" />`
                          : ""
                      }
                      <span class="navbar__category">${category.category}</span>
                    </div>
                  </summary>

                  <ul class="navbar__modules">
                    ${category.labels
                      .map((label) => /* html */ `
                              <li class="navbar__module">
                                <a href="${label.href}">${label.label}</a>
                              </li>
                            `
                      )
                      .join("")}
                  </ul>
                </details>
              </li>
            `,
            )
            .join("")}
        </div>
      `,
      )
      .join("")}

  </div>
`;
