import styleImports from "@css/styles.css?inline";

const style = /* css */ `
  :host {
    background-color: var(--slate-7);
    border-radius: var(--border-radius);
  }

  :host([variant="notes"]) img {
  filter: invert(24%) sepia(94%) saturate(7000%)
          hue-rotate(350deg) brightness(95%) contrast(120%);
}
  
  .container {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 10px;
    padding: 10px 9px;
    color: #fff;
  }

  img {
    grid-column: 1;
    grid-row: 1
  }

  span {
    grid-column: 2;
    grid-row: 1;
    align-self: center
  }

  .content {
    grid-column: 2;
    grid-row: 2
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
        icon = "/assets/images/icons/sample-answer.svg";
        label = "Sample answer";
        break;
      case "notes":
        icon = "/assets/images/icons/notes.svg";
        label = "Notes";
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
        <img src="${icon}" alt="${variant} icon" />
        <span><b>${label}</b></span>
        <div class="content">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

customElements.define("wc-card-icon", CardIcon);
export default CardIcon;
