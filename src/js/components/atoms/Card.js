import componentStyles from "@css/imports/component.css?inline";

const style = /* css */ `
  :host {
    scroll-margin-top: 5px
  }  

  .label {
    width: max-content;
    border: 1px solid var(--slate-3);
    border-radius: 5px 5px 0 0;
    padding: 3px;
    font-weight: bold;
    background-color: var(--slate-2);
    color: var(--surface-text-color);
  }

  .card-container {
    padding: 5px; 
    border: var(--border);
    border-radius: 0 5px 5px 5px;
    background-color: var(--slate-2);
    color: var(--surface-text-color);
  }
`;

class Card extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const cardLabelAttr = this.getAttribute("cardLabel");

    this.shadowRoot.innerHTML = /* html */ `
      <style>
        ${componentStyles}
        ${style}

        
      </style>
      ${cardLabelAttr ? `<div class="label">${cardLabelAttr}</div>` : ""}
      <div class="card-container">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define("wc-card", Card);
export default Card;
