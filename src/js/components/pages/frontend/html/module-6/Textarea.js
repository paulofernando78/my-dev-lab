import styleImports from "@css/styles.css?inline";

const style = /* css */`
  label {
    display: block;
    margin-bottom: 0.5rem
  }
`

class HtmlModuleSixTextarea extends HTMLElement {
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
        ${style}
      </style>
      <label for="message">Leave your comments below:</label>
      <textarea name="message" id="message"></textarea>
    `;
  }
}

customElements.define("wc-html-module-6-textarea", HtmlModuleSixTextarea);
export default HtmlModuleSixTextarea;
