import componentStyles from "@css/imports/component.css?inline";

const style = /* css */ `
  :host([compact]) .header {
    margin-bottom: 0
  }

  .header {
    background-color: var(--category-bg-color);
    border: 3px solid var(--category-border-color);
    border-radius: 5px;
    margin-bottom: 30px;
    padding: 5px;
  }

  h1 {
    color: var(--surface-text-color);
  }

  h1:has(+ h2) {
    margin-bottom: 0.8rem;
  }
  
  h2 {
    color: var(--surface-text-color);
    margin-bottom: 0.4rem;
  }

  h2:has(+ h3) {
    margin-bottom: 0.7rem;
  }
  
  h3 {
    color: var(--surface-text-color);
    margin-bottom: 0.07rem;
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
    const unitAttr = this.getAttribute("unit")
    const pageAttr = this.getAttribute("page")

    const categoryStyles = {
      HTML: {
        color: "var(--orange-6)",
        background: "var(--orange-1)"
      },
      CSS: {
        color: "var(--purple-6)",
        background: "var(--purple-1)"
      },
      Javascript: {
        color: "var(--yellow-3)",
        background: "var(--yellow-1)"
      },
      "Node JS": {
        color: "var(--green-7)",
        background: "var(--green-1)"
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
        ${pageAttr ? /* html */`<h2><b>${pageAttr}</b></h2>` : ""}
        ${unitAttr ? `<h3><b>${unitAttr}</b></h3>` : ""}
      </div>
      `;
    }
  }

customElements.define("wc-page-header", PageHeader);
export default PageHeader;