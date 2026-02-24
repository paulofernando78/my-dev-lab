import styleImports from "@css/styles.css?inline";
import "@/js/components/molecules/PageHeader.js";
import "@/js/components/atoms/Card.js";
import {curriculum } from "../data/curriculum"

const style = /* css */ `
  .home__category-icons {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    flex-wrap: wrap;
    margin-inline: 20px
  }

  .home__category-icons img {
    width: 40px;
    height: auto;
    margin-top: 3px
  }

  .home__category-icons-overview {
    width: 25px;
    height: auto
  }

  .home__card-header {
    border: 1px solid var(--slate-4);
    border-bottom: 0;
    border-radius: 5px 5px 0 0 ;
    background-color: var(--slate-6);
    padding: 10px;
  }

  .home__card {
    border: 1px solid var(--slate-4);
    border-radius: 0 0 5px 5px;
    padding: 10px;
  }

  .home__category-label {
    margin-top: 2px
  }

  .home__description {
    // font-size: 1rem;
  }

  .home__hr {
    margin-block: 3px;
    border-color: var(--slate-1);
  }

  .home__card hr:last-of-type {
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
          <p>Welcome to my Dev Den — a personal learning environment built with Web Components using a client-side rendered (CSR) SPA architecture. This project is organized into the following categories:</p>
          <h2>Overview</h2>

          <div class="line-break">
          
            ${curriculum.map((section) => /* html */ `
              <div>
                <h3 class="home__card-header">${section.section}</h3>
                <div class="home__card line-break">
                  ${section.categories.map(category => /* html */`
    
                  <div class="flex-align-center home__category">
                    <img src="${category.icon}" class="home__category-icons-overview"/>
                    <h4 class="home__category-label" >${category.category} • ${category.modulesNumber} Modules</h4>
                  </div>
    
                  <ul class="line-break">
                    ${category.modules.map((module) => /* html */ `
                      <li class="home__modules">
                        <h4>${module.module}</h4>
                        <p class="home__description">${module.description}</p>
                      </li>
                    `,).join("")}
                  </ul>
                  <hr />
                  `).join("")}
                </div>
              </div>
              `,).join("")}
          </div>
      </section>
    `;
  }
}

export default Home;

customElements.define("wc-home", Home);
