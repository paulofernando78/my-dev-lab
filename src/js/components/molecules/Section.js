import styleImports from "@css/styles.css?inline";

const style = /* css */ `
  .label {
    background-color: black;
    color: white;
    border-radius: 5px;
    padding: 3px 5px;
    font-weight: bold
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
    const labelAttr = this.getAttribute("label");
    const ariaAttr = this.getAttribute("aria-label");

    this.shadowRoot.innerHTML = /* HTML */ `
      <style>
        ${styleImports}
        ${style}
      </style>
      <section ${ariaAttr ? `aria-label="${ariaAttr}"` : ""} class="line-break">
        <span class="label">${labelAttr}</span>
        <slot></slot>
      </section>
    `;
  }
}

customElements.define("wc-section", Section);
export default Section;
