import styleImports from "@css/styles.css?inline";

class HtmlModuleTwoParagraph extends HTMLElement {
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
      <p>This ia a paragraph.</p>
      `;
    }
  }

customElements.define("wc-html-module-2-paragraph", HtmlModuleTwoParagraph);
export default HtmlModuleTwoParagraph;