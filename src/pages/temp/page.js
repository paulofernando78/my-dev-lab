import styleImports from "@css/styles.css?inline";
import styles from "../../js/renderers/renderSection.css?inline";

// Testing
import "@/js/components/pages/frontend/js/module-2/2-1/ifSum.js";
import "@/js/components/molecules/CardCode.js";
import "@/js/components/atoms/Code.js";

class Temp extends HTMLElement {
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
        ${styles}
      </style>
      <wc-if-sum></wc-if-sum>

      <div class="cards-wrapper">

        <wc-card-code
          cardLabel="HTML"
          cardLabelIcon="/assets/images/icons/code.svg"
        >
          <wc-code language="html">
  <h1>Test</h1>
          </wc-code>
        </wc-card-code>

      </div>

      <div class="cards-wrapper">
        <wc-card-code
          cardLabel="HTML"
          cardLabelIcon="/assets/images/icons/code.svg"
        >
          <wc-code language="html">
  <h1>Test</h1>
          </wc-code>
        </wc-card-code>
        
        <wc-card-code
          cardLabel="CSS"
          cardLabelIcon="/assets/images/icons/code.svg"
        >
          <wc-code language="css">
  div {
    
  }
          </wc-code>
        </wc-card-code>
      </div>

      <div class="cards-wrapper">
        <wc-card-code
          cardLabel="HTML"
          cardLabelIcon="/assets/images/icons/code.svg"
        >
          <wc-code language="html">
  <h1>Test</h1>
          </wc-code>
        </wc-card-code>

        <wc-card-code
          cardLabel="CSS"
          cardLabelIcon="/assets/images/icons/code.svg"
        >
          <wc-code language="css">
  div {
    
  }
          </wc-code>
        </wc-card-code>

        <wc-card-code
          cardLabel="JS"
          cardLabelIcon="/assets/images/icons/code.svg"
        >
          <wc-code language="js">
  console.log(div)
          </wc-code>
        </wc-card-code>
      </div>
      
    `;
  }
}

customElements.define("wc-temp", Temp);
export default Temp;
