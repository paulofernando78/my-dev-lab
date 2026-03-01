import componentStyles from "@css/imports/component.css?inline";

import "@/js/components/organisms/Sandbox.js";

const style = /* css */ `
  :host {
    scroll-margin-top: 5px
  }  

  .icon {
    width: 20px
  }

  .label {
    display: flex;
    align-items: center;
    gap: 5px;

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
    const cardLabelIconAttr = this.getAttribute("cardLabelIcon");
    const cardLabelAttr = this.getAttribute("cardLabel");

    this.shadowRoot.innerHTML = /* html */ `
      <style>
        ${componentStyles}
        ${style}

        
      </style>
      ${cardLabelAttr
        ? /* html */ `
        <div class="label">
          <img src="${cardLabelIconAttr}" class="icon"/>
          ${cardLabelAttr}
        </div>`
        :
        ""}
      <div class="card-container">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define("wc-card-code", CardCode);
export default CardCode;
