import styleImports from "@css/styles.css?inline";
import "@/js/components/molecules/PageHeader.js";
import "@/js/components/molecules/Contents.js";
import "@/js/components/molecules/Section.js";
import "@/js/components/atoms/Card.js";
import "@/js/components/molecules/Code.js";
import "@/js/components/molecules/Notes.js";

const style = /* css */ `

`;

class ConditionalRendering extends HTMLElement {
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
      
    <wc-page-header category="Javascript" page="Conditional Rendering" aria-label="html tags"/></wc-page-header>
    <wc-contents></wc-contents>

      <wc-section id="..." label="..." aria-label="...">
        <wc-card label="...">
          <div class="wrapper">
            <wc-code language="">
              
            </wc-code>
          </div>
        </wc-card>
        <wc-notes>...</wc-notes>
      </wc-section>
      `;

      const contentsEl = this.shadowRoot.querySelector("wc-contents");

    contentsEl.contents = [
      {
        id: "...",
        label: "...",
      },
    ];

    contentsEl.render();
    }
  }

customElements.define("wc-js-conditional-rendering", ConditionalRendering);
export default ConditionalRendering;