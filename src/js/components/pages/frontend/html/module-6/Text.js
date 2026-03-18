import styleImports from "@css/styles.css?inline";

const style = /* css */`
  label {
    display: block;
    margin-bottom: 0.5rem
  }
`

class HtmlModuleSixText extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {
    // cleanup (events, intervals, observers)
  }

  render() {
    this.shadowRoot.innerHTML = /* HTML */ `
      <style>
        ${styleImports}
        ${style}
      </style>
      <label>Username:</label>
      <input type="text">
      `;
    }
  }

customElements.define("wc-html-module-6-text", HtmlModuleSixText);
export default HtmlModuleSixText;