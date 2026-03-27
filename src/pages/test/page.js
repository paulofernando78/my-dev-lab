import styleImports from "@css/styles.css?inline";

import "@/js/components/molecules/Column.js";
import "@/js/components/molecules/Code.js";

class Test extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* HTML */ `
      <style>
        ${styleImports}
      </style>
      <wc-column header-1="Truthy" header-2="Falsy">
        <div slot="col-1">
          <wc-code language="js">
            console.log()
          </wc-code>
        </div>
        <div slot="col-2">
          <wc-code language="js">
            console.log()
          </wc-code>
        </div>
      </wc-column>
    `;

  }
}

customElements.define("wc-test", Test);
export default Test;
