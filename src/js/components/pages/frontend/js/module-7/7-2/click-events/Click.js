import styleImports from "@css/styles.css?inline";

class WcJSm72Click extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    
    const button = this.shadowRoot.querySelector("button");

    button.addEventListener("click", () => {
      console.log("clicked", button);
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
      <span>*Check console</span>
    `;
  }
}

customElements.define("wc-js-m-7-2-click", WcJSm72Click);
export default WcJSm72Click;
