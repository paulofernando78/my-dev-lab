class Tags extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    /* HTML */
    this.shadowRoot.innerHTML = `
    <style>
    
    </style>
     <section class="line-break home-container" aria-label="Full-stack lab">
          <h1 class="page"><b>HTML</b></h1>
          <h2 class="page"><b>Tags</b></h2>
          <p>...</p>
      </section>
    `;
  }
}

export default Tags;

customElements.define("wc-html-tags", Tags)
