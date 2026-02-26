import styleImports from "@css/styles.css?inline";
import "@/js/components/molecules/PageHeader.js";
import "@/js/components/molecules/Contents.js";
import "@/js/components/molecules/Section.js";
import "@/js/components/atoms/Card.js";
import "@/js/components/atoms/Wrapper.js";

import "@/js/components/molecules/Code.js";

import { setupContents } from "@/js/utils/setupContents.js";
import { renderSections } from "@/js/renderers/renderSection";

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
    const sections = [
      {
        sectionId: "template-literals",
        sectionLabel: "Template Literals",
        sectionAriaLabel: "...",
        examples: [
          //! TRUE
          {
            cardLabel: "true",
            language: "js",
            showItem2: true,
            code: `
const showItem2 = true

<span>Item 1</span>
\${showItem2 ? \`<span>Item 2</span>\` : ""}
            `,
            preview: (showItem2) => /* html */ `
              <span>Item 1</span>
              ${showItem2 ? /* html */ `<span>Item 2</span>` : ""}
            `,
          },
          //! FALSE
          {
            cardLabel: "false",
            language: "js",
            showItem2: false,
            code: `
const showItem2 = false

<span>Item 1</span>
\${showItem2 ? \`<span>Item 2</span>\` : ""}
        `,
            preview: (showItem2) => /* html */ `
          <span>Item 1</span>
          ${showItem2 ? /* html */ `<span>Item 2</span>` : ""}
        `,
          },
        ],
      },
    ];

    this.shadowRoot.innerHTML = /* HTML */ `
      <style>
        ${styleImports}
        ${style}
      </style>

      <wc-page-header
        category="Javascript"
        page="Conditional Rendering"
        aria-label="Conditional Rendering"
      ></wc-page-header>

      <wc-contents></wc-contents>

      <div class="line-break">${renderSections(sections)}</div>
    `;

    setupContents(this.shadowRoot, sections);
  }
}

customElements.define("wc-js-conditional-rendering", ConditionalRendering);
export default ConditionalRendering;
