import componentStyles from "@css/imports/component.css?inline";

const style = /* css */ `
  :host {
    scroll-margin-top: 5px
  }

  .label {
    background-color: var(--slate-5);
    color: white;
    border: 1px solid var(--slate-4);
    border-radius: 5px;
    padding: 4px 7px;
    font-size: 1.1rem;
    font-weight: bold
  }
`;

class SubSection extends HTMLElement {
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
        ${componentStyles}
        ${style}
      </style>
      <section ${ariaAttr ? `aria-label="${ariaAttr}"` : ""} class="line-break">
        <span class="label">${labelAttr}</span>
        <slot></slot>
      </section>
    `;
  }
}

customElements.define("wc-sub-section", SubSection);
export default SubSection;
