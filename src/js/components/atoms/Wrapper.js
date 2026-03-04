
const style = /* css */ `
  :host {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 5px;
    align-items: start;
  }

  @media (width < 600px) {
    :host {
      grid-template-columns: 1fr;
    }
  }
`;

class Wrapper extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open" })
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* HTML */ `
    <style>
      ${style}
    </style>
    <slot></slot>
    `;
  }
}

customElements.define("wc-wrapper", Wrapper);
export default Wrapper;
