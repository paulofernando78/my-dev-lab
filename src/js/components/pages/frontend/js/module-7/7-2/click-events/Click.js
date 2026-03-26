import styleImports from "@css/styles.css?inline";

class WcJSm72Click extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    
    const button = this.shadowRoot.querySelector("button");

    button.addEventListener("click", (e) => {
      console.log("clicked", e);
    });
  }

  disconnectedCallback() {
    // cleanup (events, intervals, observers)
  }

  render() {
    this.shadowRoot.innerHTML = /* HTML */ `
      <style>
        ${styleImports}
      </style>
      <button>Button</button>
    `;
  }
}

customElements.define("wc-js-m-7-2-click", WcJSm72Click);
export default WcJSm72Click;
