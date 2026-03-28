import styleImports from "@css/styles.css?inline";
import styles from "./ifSum.css?inline";

class ifSum extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();

    const btn = this.shadowRoot.querySelector("button");
    
    if (btn) {
      btn.addEventListener("click", () => {
        const counter = this.shadowRoot.querySelector("#counter");
        const total = Number(counter.textContent) + 1;
        if (total <= 5) {
          counter.textContent = total;
        } else {
          const msg = this.shadowRoot.querySelector("#msg");
          msg.innerText = "You've reached max items per person."
        }
      });
    }
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
      <div>
      <span>Apples on sale.</span>
      <span>Max 5 per person.</span>
        <div class="inner-container">
          <image
            src="/assets/images/apple.png"
            alt="apple icon"
            class="apple"
          ></image>
          <button>Add</button>
          <div id="counter">0</div>
        </div>
        <span id="msg"></span>
      </div>
    `;
  }
}

customElements.define("wc-if-sum", ifSum);
export default ifSum;
