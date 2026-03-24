import styleImports from "@css/styles.css?inline";
import styles from "./MousemoveCircle.css?inline";

class WcJSm72MousemoveCircle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();

    const preview = this.shadowRoot.querySelector(".preview");
    const circle = this.shadowRoot.querySelector(".circle");

    function followMouse(e) {
      const rect = preview.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      circle.style.left = x + "px";
      circle.style.top = y + "px";
    }

    preview.addEventListener("mousemove", followMouse);
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
      <div class="preview">
        <div class="circle"></div>
      </div>
    `;
  }
}

customElements.define("wc-js-m-7-2-mousemove-circle", WcJSm72MousemoveCircle);
export default WcJSm72MousemoveCircle;
