import styleImports from "@css/styles.css?inline";

class HtmlModuleSixNumber extends HTMLElement {
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
      <input type="number" placeholder="Numbers only">
      `;
    }
  }

customElements.define("wc-html-module-6-number", HtmlModuleSixNumber);
export default HtmlModuleSixNumber;