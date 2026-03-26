import styleImports from "@css/styles.css?inline";

const styles = /* css */ `
  div {
    margin-top: 1rem
  }
`;

class CheckConsole extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {
    // cleanup (events, intervals, observers)
  }

  render() {
    this.shadowRoot.innerHTML = /* HTML */ `
      <style>
        ${styleImports}
        ${styles}
      </style>
      <div class="flex-align-center">
        <wc-icon name="attention"></wc-icon>
        <span>Check console</span>
      </div>
      `;
    }
  }

customElements.define("wc-check-console", CheckConsole);
export default CheckConsole;