import styleImports from "@css/styles.css?inline";

const style = /* css */ `
  img {
    width: 80%;
    border-radius: var(--border-radius);
    margin: 30px auto
  }

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
          <img src="/assets/images/my-dev-den.png"/>
          <h1 class="page"><b>My Dev Den</b> </h1>
          <p>Welcome to my Dev Den - a personal learning environment built with Vanilla JavaScript and Web Components, following a client-side rendered (CSR) SPA architecture.</p>
        
      </section>
    `;
  }
}

export default Home;

customElements.define("wc-home", Home);
