import styleImports from "@css/styles.css?inline";

const style = /* css */ `

`;

class VSCode extends HTMLElement {
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
      <span>Snippet</span>
      `;
    }
  }

customElements.define("wc-tools-vs-code", VSCode);
export default VSCode;