import styleImports from "@css/styles.css?inline";

class WcJSm72Click extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    
    this._button = this.shadowRoot.querySelector("button");

    this._onClick = (e) => {
      console.log("clicked", e);
    };

    this._button.addEventListener("click", this._onClick);
  }

  disconnectedCallback() {
    this._button.removeEventListener("click", this._onClick)
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
