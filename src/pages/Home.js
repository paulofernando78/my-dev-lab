import styleImports from "@css/styles.css?inline";

const style = /* css */ `
  h2 {
    font-size: 1.8rem
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
      <section class="line-break home-container" aria-label="Full-stack lab">
          <h1 class="page"><b>My Full-Stack Lab</b> </h1>
          <p>A personal full-stack learning environment built with Vanilla JavaScript, Web Components, CSS, Node.js, and Vite, using a client-side rendered (CSR) SPA architecture.</p>
        
      </section>
    `;
  }
}

export default Home;

customElements.define("wc-home", Home);
