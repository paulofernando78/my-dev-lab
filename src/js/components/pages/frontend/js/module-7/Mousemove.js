import styleImports from "@css/styles.css?inline";

const style = /* css */ `
  :host {
  display: block;
}

.preview {
  position: relative;
  width: 100%;
  min-height: 160px;
  display: grid;
  place-items: center;
}


  #x {
    align-self: end;
  }

  #y {
    align-self: start;
  }
`;

class JSModuleSevenMousemove extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();

    const preview = this.shadowRoot.querySelector(".preview");
    const spanX = this.shadowRoot.querySelector("#x");
    const spanY = this.shadowRoot.querySelector("#y");

    preview.addEventListener("mousemove", (event) => {
      const rect = preview.getBoundingClientRect();

      const x = Math.floor(event.clientX - rect.left);
      const y = Math.floor(event.clientY - rect.top);

      spanX.textContent = "x: " + x;
      spanY.textContent = "y: " + y;
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
      <div class="preview">
        <span id="x"></span>
        <span id="y"></span>
      </div>
    `;
  }
}

customElements.define(
  "wc-frontend-js-module-7-mousemove",
  JSModuleSevenMousemove,
);
export default JSModuleSevenMousemove;
