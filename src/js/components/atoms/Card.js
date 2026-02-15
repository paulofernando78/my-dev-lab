import componentStyles from "@css/imports/component.css?inline";

const style = /* css */ `
  :host {
  }
  
  .label {
    width: max-content;
    border: 1px solid var(--slate-3);
    border-bottom: 0;
    border-radius: 5px 5px 0 0;
    padding: 3px;
    font-weight: bold
  }

  .card-container {
    padding: 5px; 
    border: var(--border);
    border-radius: 0 5px 5px 5px;
    background-color: var(--slate-2)
  }
  
`

class Card extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {

    const labelAttr = this.getAttribute("label")

    this.shadowRoot.innerHTML = /* html */ `
      <style>
        ${componentStyles}
        ${style}

        
      </style>
      <div class="label">${labelAttr}</div>
      <div class="card-container">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define("wc-card", Card);
export default Card;

