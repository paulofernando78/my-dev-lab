import styleImports from "@css/styles.css?inline";

class HtmlModuleTwoHeadings extends HTMLElement {
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
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
      `;
    }
  }

customElements.define("wc-html-module-2-headings", HtmlModuleTwoHeadings);
export default HtmlModuleTwoHeadings;