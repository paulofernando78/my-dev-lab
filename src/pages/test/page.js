import styleImports from "@css/styles.css?inline";

import "@/js/components/pages/frontend/js/module-2/2-1/ifSum.js"

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
      <wc-if-sum></wc-if-sum>
    `;

  }
}

customElements.define("wc-test", Test);
export default Test;
