import styleImports from "@css/styles.css?inline";

const style = /* css */ `

`;

class Toggle extends HTMLElement {
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
      <span>toggle</span>
      `;
    }
  }

customElements.define("wc-toggle", Toggle);
export default Toggle;