import "@/js/components/organisms/Sandbox.js";

class Playground extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* HTML */ `
      <wc-sandbox html css js console></wc-sandbox>
    `;
  }
}

customElements.define("wc-playground", Playground);
export default Playground;
