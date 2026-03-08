import styleImports from "@css/styles.css?inline";

const style = /* css */`
  label {
    display: block;
    margin-bottom: 0.5rem
  }
`;

class HtmlModuleSixFile extends HTMLElement {
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
      <label for="avatar">Upload photo:</label>
      <input type="file" name="avatar" id="avatar" />
    `;
  }
}

customElements.define("wc-html-module-6-file", HtmlModuleSixFile);
export default HtmlModuleSixFile;
