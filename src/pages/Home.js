import styleImports from "@css/styles.css?inline";
import "@/js/components/molecules/PageHeader.js";

const style = /* css */ `
  img {
    border-radius: var(--border-radius);
    margin-bottom: 10px
  }

  .categories {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    flex-wrap: wrap;
    margin-inline: 20px
  }

  .categories img {
    width: 60px;
    height: auto
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
      <section class="line-break home-container" aria-label="My Dev Den">
          <img src="/assets/images/my-dev-den.png"/>
          <p>Welcome to my Dev Den — a personal learning environment built with Web Components using a client-side rendered (CSR) SPA architecture. This project is organized into the following categories:</p>
          <div class="categories">
            <img src="/assets/images/icons/html5.svg"/>
            <img src="/assets/images/icons/css.svg"/>
            <img src="/assets/images/icons/javascript.svg"/>
            <img src="/assets/images/icons/nodejs.svg"/>
          </div>
        
      </section>
    `;
  }
}

export default Home;

customElements.define("wc-home", Home);
