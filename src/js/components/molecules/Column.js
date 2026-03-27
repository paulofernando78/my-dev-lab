import styleImports from "@css/styles.css?inline";
import styles from "./Column.css?inline";

class Column extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }
 
  render() {
    const header1Attr = this.getAttribute("header-1");
    const header2Attr = this.getAttribute("header-2");

    this.shadowRoot.innerHTML = /* HTML */ `
      <style>
        ${styleImports}
        ${styles}
      </style>
      <div class="container">
        <div>
          <span class="header">${header1Attr}</span>
          <slot name="col-1"></slot>
        </div>
        <div>
          <span class="header">${header2Attr}</span>
          <slot name="col-2"></slot>
        </div>
      </div>
    `;
  }
}

customElements.define("wc-column", Column);
export default Column;
