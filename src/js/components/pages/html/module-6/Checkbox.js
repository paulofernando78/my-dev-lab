import styleImports from "@css/styles.css?inline";

class HtmlModuleSixCheckbox extends HTMLElement {
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
      <div class="flex-align-center">
        <input type="checkbox" name="subscribe" value="yes" id="subscribe"/>
        <label for="subscribe">Subscribe to newsletter</label>
      </div>

      <div class="flex-align-center">
        <input type="checkbox" name="terms" value="agreed" id="terms"/>
        <label for="terms">I agree to the terms</label>
      </div>
    `;
  }
}

customElements.define("wc-html-module-6-checkbox", HtmlModuleSixCheckbox);
export default HtmlModuleSixCheckbox;
