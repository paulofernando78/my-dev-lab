import styleImports from "@css/styles.css?inline";

const style = /* css */ `
  p {
    
  }
`;

class Component extends HTMLElement {
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
      <p>It's a component.</p>
      `;
    }
  }

customElements.define("wc-component", Component);
export default Component;