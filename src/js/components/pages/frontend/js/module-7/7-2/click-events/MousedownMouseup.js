import styleImports from "@css/styles.css?inline";

class WcJSm72MousedownMouseup extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();

    const button = this.shadowRoot.querySelector("button");

    button.addEventListener("mousedown", () => {
      console.log("mousedown:", button);
    });

    button.addEventListener("mouseup", () => {
      console.log("mouseup:", button);
    });
  }

  disconnectedCallback() {
    // cleanup (events, intervals, observers)
  }

  render() {
    this.shadowRoot.innerHTML = /* HTML */ `
      <style>
        ${styleImports}
      </style>
      <button>Button</button>
    `;
  }
}

customElements.define("wc-js-m-7-2-mousedown-mouseup", WcJSm72MousedownMouseup);
export default WcJSm72MousedownMouseup;
