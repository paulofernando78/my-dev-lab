import styleImports from "@css/styles.css?inline";

const style = /* css */ `
  :host {
    display: grid;
    gap: 1rem
  }
`;

class TextBlock extends HTMLElement {
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
      <slot></slot>
    `;
  }
}

customElements.define("wc-text-block", TextBlock);
export default TextBlock;
