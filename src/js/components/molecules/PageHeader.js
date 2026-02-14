import componentStyles from "@css/imports/component.css?inline";

const style = /* css */ `
  .header {
    border: 1px solid var(--slate-4);
    border-radius: 5px;
    margin-bottom: 30px;
    padding: 5px;
    background-color: white
  }

  h1 {
    margin-bottom: 0.8rem;
  }

  h2 {
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