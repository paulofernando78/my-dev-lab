import styleImports from "@css/styles.css?inline";
import "@/js/components/molecules/PageHeader.js";

const style = /* css */ `
  img {
    border-radius: var(--border-radius);
    margin: 30px auto
  }

  .categories {
    display: flex;
    flex-wrap: wrap;
    gap: 5px
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
          <h1 class="page"><b>My Dev Den</b> </h1>
          <p>Welcome to my Dev Den — a personal learning environment built with Web Components using a client-side rendered (CSR) SPA architecture. The project is organized into the following categories:</p>
          <div class="categories">
            <wc-page-header category="HTML" compact></wc-page-header>
            <wc-page-header category="CSS" compact></wc-page-header>
            <wc-page-header category="Javascript" compact></wc-page-header>
            <wc-page-header category="Node JS" compact></wc-page-header>
          </div>
        
      </section>
    `;
  }
}

export default Home;

customElements.define("wc-home", Home);
