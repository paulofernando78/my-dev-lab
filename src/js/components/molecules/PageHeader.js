import componentStyles from "@css/imports/component.css?inline";

const style = /* css */ `
  .header {
    background-color: var(--category-bg-color);
    border: 5px solid var(--category-border-color);
    border-radius: 5px;
    margin-bottom: 30px;
    padding: 5px;
  }

  h1 {
    color: var(--surface-text-color);
    margin-bottom: 0.8rem;
  }

  h2 {
    color: var(--surface-text-color);
    margin-bottom: 0.3rem;
  }
`;

class PageHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const categoryAttr = this.getAttribute("category")
    const pageAttr = this.getAttribute("page")

    const categoryStyles = {
      HTML: {
        color: "#F5470C",
        background: "#FFF3EF"
      },
      CSS: {
        color: "#6C3B9D",
        background: "#F4ECFA"
      },
      Javascript: {
        color: "#FFDF01",
        background: "#FFFCE5"
      }
    }

    const config = categoryStyles[categoryAttr] ?? {
      color: "var(--slate-4)",
      background: "var(--slate-2)"
    }

    this.style.setProperty("--category-border-color", config.color);
    this.style.setProperty("--category-bg-color", config.background);

    this.shadowRoot.innerHTML = /* HTML */ `
      <style>
        ${componentStyles}
        ${style}
      </style>
      <div class="header">
        <h1><b>${categoryAttr}</b></h1>
        <h2><b>${pageAttr}</b></h2>
      </div>
      `;
    }
  }

customElements.define("wc-page-header", PageHeader);
export default PageHeader;