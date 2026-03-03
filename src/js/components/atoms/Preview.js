import styleImports from "@css/styles.css?inline";

class Preview extends HTMLElement {
  constructor() {
    super();div
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
        <slot></slot>
      `;
    }
  }

customElements.define("wc-preview", Preview);
export default Preview;