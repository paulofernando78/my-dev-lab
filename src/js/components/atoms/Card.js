import componentStyles from "@css/imports/component.css?inline";

const style = /* css */ `
  :host {
  }
  
  .card-container {
    padding: 5px; 
    border: var(--border);
    border-radius: var(--border-radius);
    background-color: var(--slate-3)
  }
`

class Card extends HTMLElement {
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
      <div class="card-container">
        <slot></slot>
      </div>
    `;
  }
}

export default Card;

