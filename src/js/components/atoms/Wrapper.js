
const style = /* css */ `
  :where(wc-wrapper) {
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
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* HTML */ `
    <style>
      ${style}
    </style>

    <slot></slot>
    `;
  }
}

customElements.define("wc-wrapper", Wrapper);
export default Wrapper;
