import "../css/navbar.css";
import { curriculum } from "../data/curriculum";

const ul = document.querySelector("#navbar-links");

ul.innerHTML = /* html */ `
  <div class="line-break">
    <div class="">
      <li><a href="/">Home</a></li>
      <li><a href="/resources">Resources</a></li>
    </div>
    <div class="line-break-item">
      ${curriculum.map((section) => /* html */ `
        <div class="flex-align-center">
          <img src="${section.icon}"/>
          <span class="navbar__section">${section.section}</span>
        </div>
        ${section.categories.map((category) => /* html */ `
        <li>
          <details>
            <summary>
              <div class="navbar__icon__category-wrapper">
                <img src="${category.icon}" class="navbar__icon__size"/>
                <span class="navbar__category">${category.category}</span>
              </div>
            </summary>
    
            <ul class="navbar__modules">
              ${category.modules
                .map(
                  (module) => /* html */ `
                <li class="navbar__module"><a href="${module.href}">${module.module}</a>
              </li>
              `,
                )
                .join("")}
            </ul>
          </details>
        </li>
        `,).join("")}
      `,).join("")}
    </div>
  </div>
    `;
