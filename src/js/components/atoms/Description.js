import componentStyles from "@css/imports/component.css?inline";

const style = /* css */ `
  
`

class Description extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = /* html */ `
      <style>
        ${componentStyles}
      </style>
      <div>
        <slot></slot>
      </div>
    `;
  }
}

customElements.define("wc-description", Description);
export default Description;

