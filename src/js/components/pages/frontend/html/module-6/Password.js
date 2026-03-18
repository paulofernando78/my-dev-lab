import styleImports from "@css/styles.css?inline";

const style = /* css */`
  label {
    display: block;
    margin-bottom: 0.5rem
  }
`

class HtmlModuleSixPassword extends HTMLElement {
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
      <label>Password:</label>
      <input type="Password" placeholder="1234...">
      `;
    }
  }

customElements.define("wc-html-module-6-password", HtmlModuleSixPassword);
export default HtmlModuleSixPassword;