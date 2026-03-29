import styleImports from "@css/styles.css?inline";

const style = /* css */ `
  :host {
    background-color: var(--slate-8);
    border-radius: var(--border-radius);
  }

  :host([variant="notes"]) img {
  filter:
  invert(24%)
  sepia(94%)
  saturate(7000%)
  hue-rotate(350deg)
  brightness(95%)
  contrast(120%);
  }
  
  .container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px 9px;
    color: #fff;
  }
`;

class CardIcon extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const variant = this.getAttribute("variant");

    let icon = "";
    let label = "";

    switch (variant) {
      case "description":
        icon = "/assets/images/icons/info.svg";
        label = "Description";
        break;
      case "sample-answer":
        icon = "/assets/images/icons/text.svg";
        label = "Sample answer";
        break;
      case "preview":
        icon = "/assets/images/icons/preview.svg";
        label = "Preview";
        break;
      case "notes":
        icon = "/assets/images/icons/notes.svg";
        label = "Notes";
        break;
      case "links":
        icon = "/assets/images/icons/links.svg";
        label = "Links";
        break;
      default:
        icon = "";
        label = "";
    }

    this.shadowRoot.innerHTML = /* HTML */ `
      <style>
        ${styleImports}
        ${style}
      </style>
      <div class="container">
        <div class="flex-align-center">
          <img src="${icon}" alt="${variant} icon" />
          <span><b>${label}</b></span>
        </div>
        <div class="content line-break">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

customElements.define("wc-card-icon", CardIcon);
export default CardIcon;
