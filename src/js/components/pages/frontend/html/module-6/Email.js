import styleImports from "@css/styles.css?inline";

const style = /* css */`
  label {
    display: block;
    margin-bottom: 0.5rem
  }
`

class HtmlModuleSixEmail extends HTMLElement {
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
      <label>Email:</label>
      <input type="email" placeholder="joedoe@email.com">
      `;
    }
  }

customElements.define("wc-html-module-6-email", HtmlModuleSixEmail);
export default HtmlModuleSixEmail;