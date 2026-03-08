import styleImports from "@css/styles.css?inline";

class HtmlModuleSixRadio extends HTMLElement {
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
        <input type="radio" name="same-name" value="option1" id="opt1">
        <label for="opt1">Option 1</label>
      </div>
      <div class="flex-align-center">
        <input type="radio" name="same-name" value="option2" id="opt2">
        <label for="opt2">Option 2</label>
      </div>
      `;
    }
  }

customElements.define("wc-html-module-6-radio", HtmlModuleSixRadio);
export default HtmlModuleSixRadio;