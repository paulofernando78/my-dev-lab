import componentStyles from "@css/imports/component.css?inline";

const style = /* css */ `
  :host {
    scroll-margin-top: 5px
  }  

  .label {
    width: max-content;
    padding: 5px 6px 5px 5px;
    font-weight: bold;

    color: #fff;
    background-color: var(--gray-7);
    border-radius: 5px 5px 0 0;
    border-bottom: 0px;
  }

  .card-container {
    padding: 5px; 

    color: #fff;
    background-color: var(--gray-7);
    border-radius: 0 5px 5px 5px;
  }
`;

class CardCode extends HTMLElement {
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

customElements.define("wc-card-code", CardCode);
export default CardCode;
