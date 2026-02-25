import "../css/navbar.css";
import { curriculum } from "@/data/curriculum";

const ul = document.querySelector("#navbar-links");

ul.innerHTML = /* html */ `
  <div class="line-break">
    <div class="">
      <li><a href="/">Home</a></li>
      <li><a href="/resources">Resources</a></li>
    </div>
    <div>
      ${curriculum.map((section) => /* html */ `
        <div class="line-break-item">
          <div class="flex-align-center">
            <img src="${section.icon}"/>
            <span class="navbar__section">${section.section}</span>
          </div>
          ${section.categories.map((category) => /* html */ `
          <li>
            <details>
              <summary>
                <div class="navbar__icon__category-wrapper">
                  ${category.icon
                    ?
                    /* html */`<img src="${category.icon}" class="navbar__icon__size
                    ${category.category === "Three JS" ? "invert" : ""}" />`
                    :
                    ""
                  }
                  <span class="navbar__category">${category.category}</span>
                </div>
              </summary>
      
              <ul class="navbar__modules">
                ${category.modules.map((module, index) => {
                  const number = index

                    return /* html */ `
                    ${number == 0
                      ? /* html */ `
                        <li class="navbar__module">
                        <a href="${module.href}"> ${module.module}
                        </a>
                      </li>
                      `
                      : /* html */ `
                        <li class="navbar__module">
                          <a href="${module.href}"> Module ${number} • ${module.module}
                        </a>
                      </li>`
                    }
                  
                `;
                  }).join("")}
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
  </div>
    `;
