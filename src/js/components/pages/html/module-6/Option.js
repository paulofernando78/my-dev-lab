import styleImports from "@css/styles.css?inline";

class HtmlModuleSixOption extends HTMLElement {
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
      <select name="color" id="color">
        <option value="">-- Pick a color --</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>
      <label for="color">Color</label>
    `;
  }
}

customElements.define("wc-html-module-6-option", HtmlModuleSixOption);
export default HtmlModuleSixOption;
