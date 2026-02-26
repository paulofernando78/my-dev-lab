import styleImports from "@css/styles.css?inline";
import "@/js/components/molecules/PageHeader.js";
import "@/js/components/atoms/Card.js";
import { roadmap } from "@/data/roadmap";

const style = /* css */ `

    .roadmap__icon {
      width: 30px
    }

    .home__card-header {
    border: 1px solid var(--slate-4);
    border-bottom: 0;
    border-radius: 5px 5px 0 0 ;
    background-color: var(--slate-6);
    padding: 11px 9px;
  }

  .home__card {
    border: 1px solid var(--slate-4);
    border-radius: 0 0 5px 5px;
    padding: 10px;
  }

  .home__card-icon-category--wrapper {
    display: flex;
    align-items: center;
    gap: 9px;
  }
  
  .home__card-icon-category {
    width: 25px;
  }
  
  .home__card-module-border {
    border-left: 3px solid var(--slate-4);
    padding-left: 5px
  }

  .home__card-module {
    font-size: 1.1rem
  }

  .home__category-separator {
    margin-block: 3px;
    border-color: var(--slate-4);
  }

  .home__category-separator:last-of-type {
    display: none
  }
`;

class Home extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    /* html */
    this.shadowRoot.innerHTML = `
      <style>
        ${styleImports}
        ${style}
      </style>
      <section class="line-break" aria-label="My Dev Den">
          <img src="/assets/images/my-dev-den.png"/>
          <p>Welcome to my Dev Den — a personal learning environment built with Web Components using a client-side rendered (CSR) SPA architecture. The curriculum follows a progressive cognitive load approach, where each module builds upon knowledge from the previous one, guiding learning step by step. It is organized into the following categories:</p>
          <div class="flex-align-center">
            <img src="/assets/images/icons/roadmap.svg" class="roadmap__icon"/>
            <h2>Roadmap</h2>
          </div>

          <div class="line-break">
          
            ${roadmap.map((section) => /* html */ `
              <div>
                <h3 class="home__card-header">${section.section}</h3>
                <div class="home__card line-break">
                  ${section.categories.map((category) => {
                      const moduleCount = category.modules.filter((m) =>
                        m.module
                      ).length -1;

                      return /* html */ `
                  <div class="home__card-icon-category--wrapper">
                    <img src="${category.icon}" class="home__card-icon-category"/>
                    <h4 class="home__card-category">${category.category} • ${moduleCount} Modules</h4>
                  </div>
    
                  <ul class="line-break">
                    ${category.modules.map((module, index) => {
                      const number = index;

            

                      return /* html */`
                      <li class="home__card-module-border">
                          ${number == 0
                            ? /* html */`<h5 class="home__card-module">${module.module}</h5>`
                            :
                            /* html */`<h5 class="home__card-module">Module ${number} • ${module.module}</h5>`
                        }
                        ${module.description
                          ? /* html */ `
                          <p>${module.description}</p>`
                          : ""
                        }
                      </li>
                      `    
                    }).join("")}
                  </ul>
                  <hr class="home__category-separator"/>
                  `;
                    })
                    .join("")}
                </div>
              </div>
              `,
              )
              .join("")}
          </div>
      </section>
    `;
  }
}

export default Home;

customElements.define("wc-home", Home);
