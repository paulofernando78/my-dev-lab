import styleImports from "@css/styles.css?inline";

const style = /* css */ `
  section {
    width: 100x;
    border: 1px solid black;
  }
`;

class Section extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* HTML */ `
      <style>
        ${styleImports}
        ${style}
      </style>
      <span>Testaaaaaa</span>
      `;
    }
  }

customElements.define("wc-section", Section);
export default Section;