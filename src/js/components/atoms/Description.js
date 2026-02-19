import componentStyles from "@css/imports/component.css?inline";

const style = /* css */ `
  :host {
    display: grid;
    gap: 1rem;
  }
`;

class Description extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = /* html */ `
      <style>
        ${componentStyles}
        ${style}
      </style>
        <slot></slot>
    `;
  }
}

customElements.define("wc-description", Description);
export default Description;
