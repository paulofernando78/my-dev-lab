import componentStyles from "@css/imports/component.css?inline";

const style = /* css */ `
  .page-header {
    background-color: var(--category-bg-color);
    border-radius: 5px;
    color: var(--category-color);
    width: 100%;
    margin-bottom: 32px;
    padding: 12px;
    position: relative;
  }
  
  .icons {
    position: absolute;
    bottom: -15px;
    right: 20px;
    width: 40px;
    height: auto;

    filter: drop-shadow(0px 0px 1px black);
  }

  h1:has(+ h2) {
    margin-bottom: 0.8rem;
  }
  
  h2 {
    margin-bottom: 0.4rem;
  }

  h2:has(+ h3) {
    margin-bottom: 0.7rem;
  }

  hr {
    margin-bottom: 16px;
    margin-inline: 10px;
    border-color: var(--slate-6)
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
    const categoryStyles = {
      HTML: {
        background: "#E44D25",
        color: "#fff",
        icon: "/assets/images/icons/html5.svg",
      },
      CSS: {
        background: "#673299",
        color: "#fff",
        icon: "/assets/images/icons/css.svg",
      },
      Javascript: {
        background: "#F0DB4F",
        icon: "/assets/images/icons/javascript.svg",
      },
      "Node JS": {
        background: "var(--green-7)",
        color: "#fff",
        icon: "/assets/images/icons/nodejs.svg",
      },
    };

    const categoryAttr = this.getAttribute("category");
    const unitAttr = this.getAttribute("unit");
    const pageAttr = this.getAttribute("page");

    const config = categoryStyles[categoryAttr] ?? {
      background: "var(--slate-2)",
    };

    this.style.setProperty("--category-bg-color", config.background);
    this.style.setProperty("--category-color", config.color ?? "#18191F");

    this.shadowRoot.innerHTML = /* HTML */ `
      <style>
        ${componentStyles}
        ${style}
      </style>
      <div class="page-header">
        <div>
          <h1><b>${categoryAttr}</b></h1>
          ${pageAttr ? /* html */ `<h2><b>${pageAttr}</b></h2>` : ""}
          ${unitAttr ? /* html */ `<h3><b>${unitAttr}</b></h3>` : ""}
        </div>
        ${config.icon
          ? /* html */ `<img src="${config.icon}" class="icons"/>`
          : ""}
      </div>
    `;
  }
}

customElements.define("wc-page-header", PageHeader);
export default PageHeader;
