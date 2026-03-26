import styleImports from "@css/styles.css?inline";
import styles from "./MouseenterMouseleave.css?inline";

class WcJSm72Mousemove extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();

    const div = this.shadowRoot.querySelector("div");

    div.addEventListener("mouseleave", (e) => {
      console.log("mouseleave:", e);
    });

    div.addEventListener("mouseenter", (e) => {
      console.log("mouseenter:", e);
    });
  }

  disconnectedCallback() {
    // cleanup (events, intervals, observers)
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
