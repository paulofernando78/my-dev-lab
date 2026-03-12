import componentStyles from "@css/imports/component.css?inline";

import "@/js/components/organisms/Sandbox.js";

const style = /* css */ `
  :host {
    scroll-margin-top: 5px
  }  

  .icon {
    width: var(--icon);
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
    padding: 5px;

    color: #fff;
    background-color: var(--gray-7);
    border-radius: 0 0 5px 5px;
  }

  .hljs * {
    margin: 0;
    padding: 0;
  }

  .hljs {
    padding: 0.8rem;
    font-size: 0.9rem;
    white-space: pre-wrap;
  }

  pre {
    border-radius: var(--border-radius);
    overflow: hidden;
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
          <img src="/assets/images/icons/visibility-off.svg" class="icon cursor-pointer" data-visibility-toggle/>
          <img src="/assets/images/icons/copy.svg" class="icon cursor-pointer" data-copy/>
          </div>
        </div>`
          : ""
      }
      <div class="card-container">
        <slot></slot>
      </div>
    `;

    const code = this.querySelector("wc-code");
    const visibility = this.shadowRoot.querySelector(
      "[data-visibility-toggle]",
    );
    const copy = this.shadowRoot.querySelector("[data-copy]")

    if (visibility && code) {
      visibility.addEventListener("click", () => {
        const hidden = code.classList.toggle("hidden");
        visibility.src = hidden
          ? "/assets/images/icons/visibility.svg"
          : "/assets/images/icons/visibility-off.svg";
      });
    } else {
      visibility.remove();
    }


    if (copy && code) {
      copy.addEventListener("click", async () => {
        try {
          const codeEl = code.shadowRoot.querySelector("code")
          const text = codeEl ? codeEl.textContent : ""

          await navigator.clipboard.writeText(text)
        } catch (err) {
          console.error("Clipboard copy failed:", err)
        }
      });
    }
  }
}

customElements.define("wc-card-code", CardCode);
export default CardCode;
