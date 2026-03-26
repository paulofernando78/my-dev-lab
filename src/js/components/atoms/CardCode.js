import componentStyles from "@css/imports/component.css?inline";
import styles from "./CardCode.css?inline";

import "@/js/components/organisms/Sandbox.js";

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
        ${styles}
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
    const copy = this.shadowRoot.querySelector("[data-copy]");

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
          const codeEl = code.shadowRoot.querySelector("code");
          const text = codeEl ? codeEl.textContent : "";

          await navigator.clipboard.writeText(text);
          alert("Copied to clipboard");
        } catch (err) {
          console.error("Clipboard copy failed:", err);
          copy.remove();
        }
      });
    } else if (copy) {
      copy.remove();
    }
  }
}

customElements.define("wc-card-code", CardCode);
export default CardCode;
