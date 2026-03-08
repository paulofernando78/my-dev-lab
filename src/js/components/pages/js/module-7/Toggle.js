import styleImports from "@css/styles.css?inline";

const style = /* css */ `
  button {
    display: block;
    margin-bottom: 0.5rem
  }  

  .hidden {
    display: none
  }

  .hidden.show {
    display: block
  }
`;

class JsModuleSevenToggle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();

    const button = this.shadowRoot.querySelector("button");
    const span = this.shadowRoot.querySelector("span");

    button.addEventListener("click", () => {
      span.classList.toggle("show")
    });
  }

  disconnectedCallback() {
    // cleanup (events, intervals, observers)
  }

  render() {
    this.shadowRoot.innerHTML = /* HTML */ `
      <style>
        ${styleImports}
        ${style}
      </style>
      <button>Show message</button>
      <span class="hidden">Hidden message</span>
    `;
  }
}

customElements.define("wc-js-module-7-toggle", JsModuleSevenToggle);
export default JsModuleSevenToggle;
