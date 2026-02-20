import componentStyles from "@css/imports/component.css?inline";

const style = /* css */ `
  .ribbon {
    background-color: var(--category-bg-color);
    border-radius: 5px;
    height: 60px;
    position: relative;
    width: 100%
  }
  
  .icons {
    position: absolute;
    bottom: -15px;
    left: 10px;
    width: 40px;
    height: auto;

    filter: drop-shadow(0px 0px 1px black);
  }
  
  .headings {
    margin: 32px 0 20px 0;
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
    const categoryAttr = this.getAttribute("category")
    const unitAttr = this.getAttribute("unit")
    const pageAttr = this.getAttribute("page")

    const categoryStyles = {
      HTML: {
        background: "var(--orange-6)",
        icon: "/assets/images/icons/html5.svg"
      },
      CSS: {
        background: "var(--purple-6)",
        icon: "/assets/images/icons/css.svg"
      },
      Javascript: {
        background: "var(--yellow-3)",
        icon: "/assets/images/icons/javascript.svg"
      },
      "Node JS": {
        background: "var(--green-7)",
        icon: "/assets/images/icons/nodejs.svg"
      }
    }

    const config = categoryStyles[categoryAttr] ?? {
      background: "var(--slate-2)",
      icon: ""
    }

    this.style.setProperty("--category-bg-color", config.background);

    this.shadowRoot.innerHTML = /* HTML */ `
      <style>
        ${componentStyles}
        ${style}
      </style>
      <div class="ribbon">
      ${config.icon
        ? /* html */`
          <img src="${config.icon}" class="icons"/>
        `
        : ""
      }
      </div>
      <div class="headings">
        <h1><b>${categoryAttr}</b></h1>
        ${pageAttr ? /* html */`<h2><b>${pageAttr}</b></h2>` : ""}
        ${unitAttr ? /* html */`<h3><b>${unitAttr}</b></h3>` : ""}
      </div>
      <hr />
      `;
    }
  }

customElements.define("wc-page-header", PageHeader);
export default PageHeader;