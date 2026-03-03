import styleImports from "@css/styles.css?inline";

const style = /* css */ `
  .container {
    background-color: #fff;
    color: #000;
    border: 1px solid;
    border-radius: var(--border-radius);
    padding: 1px 5px 5px 5px
  }
`;

class Preview extends HTMLElement {
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
      <div class="container">
        <slot></slot>
      </div>
      `;
    }
  }

customElements.define("wc-preview", Preview);
export default Preview;