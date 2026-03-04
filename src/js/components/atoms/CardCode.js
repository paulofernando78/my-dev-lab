import componentStyles from "@css/imports/component.css?inline";

import "@/js/components/organisms/Sandbox.js";

const style = /* css */ `
  :host {
    scroll-margin-top: 5px
  }  

  .icon {
    width: var(--icon);
  }

  .icon-visibility,
  .icon-visibility-off {
    cursor: pointer
  }


  .label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;

    
    padding: 5px 5px 0 5px;
    font-weight: bold;

    color: #fff;
    background-color: var(--gray-7);
    border-radius: 5px 5px 0 0;
    border-bottom: 0px;
  }

  .card-container {
    padding: 0;

    color: #fff;
    background-color: var(--gray-7);
    border-radius: 0 0 5px 5px;
  }

  .hljs {
    margin: 0;
    padding: 0.8rem;
    font-size: 0.9rem;
    white-space: pre-wrap;
  }

  pre {
    border-radius: var(--border-radius);
    overflow: hidden;
  }

  .hljs * {
    margin: 0;
    padding: 0;
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
      ${
        cardLabelAttr
          ? /* html */ `
        <div class="label">
          <div class="flex-align-center">
            <img src="${cardLabelIconAttr}" class="icon"/>
            ${cardLabelAttr}
          </div>
          <div class="flex-align-center">
            <img src="/assets/images/icons/visibility.svg" class="icon icon-visibility"/>
            <img src="/assets/images/icons/visibility-off.svg" class="icon icon-visibility-off"/>
          </div>
        </div>`
          : ""
      }
      <div class="card-container">
        <slot></slot>
      </div>
    `;

    const visibility = this.shadowRoot.querySelector(".icon-visibility");
    const visibilityOff = this.shadowRoot.querySelector(".icon-visibility-off");

    const code = this.querySelector("wc-code");


    if (visibility && visibilityOff && code) {
      visibility.addEventListener("click", () => {
      code.classList.add("hidden");
    });

    visibilityOff.addEventListener("click", () => {
      code.classList.remove("hidden")
    })
    }
    
  }
}

customElements.define("wc-card-code", CardCode);
export default CardCode;
