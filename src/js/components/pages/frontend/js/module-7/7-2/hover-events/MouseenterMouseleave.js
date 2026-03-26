import styleImports from "@css/styles.css?inline";
import styles from "./MouseenterMouseleave.css?inline";

class WcJSm72Mousemove extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();

    this._div = this.shadowRoot.querySelector("div");

    this._onMouseenter = (e) => {
      console.log("mouseenter:", e);
    };

    this._onMouseleave = (e) => {
      console.log("mouseleave:", e);
    };

    this._div.addEventListener("mouseenter", this._onMouseenter);

    this._div.addEventListener("mouseleave", this._onMouseleave);
  }

  disconnectedCallback() {
    this._div.removeEventListener("mouseenter", this._onMouseenter);

    this._div.removeEventListener("mouseleave", this._onMouseleave);
  }

  render() {
    this.shadowRoot.innerHTML = /* HTML */ `
      <style>
        ${styleImports}
        ${styles}
      </style>
      <div></div>
    `;
  }
}

customElements.define("wc-js-m-7-2-mouseenter-mouseleave", WcJSm72Mousemove);
export default WcJSm72Mousemove;
