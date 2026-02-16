import styleImports from "@css/styles.css?inline";

const style = /* css */ `
  .wrapper {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 12px;
    align-items: start;
  }

  @media (width < 600px) {
    .wrapper {
      grid-template-columns: 1fr;
    }
  }
`;

class Wrapper extends HTMLElement {
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
      <div class="wrapper">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define("wc-wrapper", Wrapper);
export default Wrapper;
