import styleImports from "@css/styles.css?inline";

const style = /* css */ `

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
    const ariaAttr = this.getAttribute("aria");

    this.shadowRoot.innerHTML = /* HTML */ `
      <style>
        ${styleImports}
        ${style}
      </style>
      <section aria-label=${ariaAttr}>
        <span>${labelAttr}</span>
        <slot></slot>
      </section>
    `;
  }
}

customElements.define("wc-section", Section);
export default Section;
