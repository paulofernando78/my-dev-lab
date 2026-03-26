import styleImports from "@css/styles.css?inline";

class WcJSm72MousedownMouseup extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();

    this._button = this.shadowRoot.querySelector("button");

    this._onMousedown = (e) => {
      console.log("mousedown:", e);
    };
    this._onMouseup = (e) => {
      console.log("mouseup:", e);
    };

    this._button.addEventListener("mousedown", this._onMousedown);
    this._button.addEventListener("mouseup", this._onMouseup);
  }

  disconnectedCallback() {
    this._button.removeEventListener("mousedown", this._onMousedown);
    this._button.removeEventListener("mouseup", this._onMouseup);
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

customElements.define("wc-js-m-7-2-mousedown-mouseup", WcJSm72MousedownMouseup);
export default WcJSm72MousedownMouseup;
