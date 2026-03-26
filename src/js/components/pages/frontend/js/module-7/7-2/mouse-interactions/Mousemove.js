import styleImports from "@css/styles.css?inline";
import styles from "./Mousemove.css?inline";

class WcJSm72Mousemove extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();

    this._preview = this.shadowRoot.querySelector(".preview");
    const spanX = this.shadowRoot.querySelector("#x");
    const spanY = this.shadowRoot.querySelector("#y");

    this._onMousemove = (event) => {
      const rect = this._preview.getBoundingClientRect();

      const x = Math.floor(event.clientX - rect.left);
      const y = Math.floor(event.clientY - rect.top);

      spanX.textContent = "x: " + x;
      spanY.textContent = "y: " + y;

      console.log(spanX);
      console.log(spanY);
    };

    this._preview.addEventListener("mousemove", this._onMousemove);
  }

  disconnectedCallback() {
    this._preview.removeEventListener("mousemove", this._onMousemove);
  }

  render() {
    this.shadowRoot.innerHTML = /* HTML */ `
      <style>
        ${styleImports}
        ${styles}
      </style>
      <div class="preview">
        <span id="x"></span>
        <span id="y"></span>
      </div>
    `;
  }
}

customElements.define("wc-js-m-7-2-mousemove", WcJSm72Mousemove);
export default WcJSm72Mousemove;
