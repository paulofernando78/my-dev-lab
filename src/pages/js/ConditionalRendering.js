import styleImports from "@css/styles.css?inline";
import "@/js/components/molecules/PageHeader.js";
import "@/js/components/molecules/Contents.js";
import "@/js/components/molecules/Section.js";
import "@/js/components/atoms/Card.js";
import "@/js/components/atoms/Wrapper.js";
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
    const examples = [
      //! TRUE
      {
        label: "true",
        showItem2: true,
        code: `
const showItem2 = true

<span>Item 1</span>
\${showItem2 ? \`<span>Item 2</span>\` : ""}
        `,
        preview: (showItem2) => `
<span>Item 1</span>
${showItem2 ? `<span>Item 2</span>` : ""}
        `,
      },
      //! FALSE
      {
        label: "false",
        showItem2: false,
        code: `
const showItem2 = false

<span>Item 1</span>
\${showItem2 ? \`<span>Item 2</span>\` : ""}
        `,
        preview: (showItem2) => `
<span>Item 1</span>
${showItem2 ? `<span>Item 2</span>` : ""}
        `,
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

      <wc-section
        id="template-literals"
        label="Template Literals"
        aria-label="Template Literals"
        class="line-break"
      >
        ${examples
          .map(
            (example) => /* html */ `
        <wc-card label="${example.label}">
        
          <wc-wrapper>
            <wc-code language="">
  ${example.code}
            </wc-code>
            <div>
              ${example.preview(example.showItem2)}
            </div>
          </wc-wrapper>
        </wc-card>
        ${example.notes ? `<wc-notes>${example.notes}</wc-notes>` : ""}
        
        `,
          )
          .join("")}
      </wc-section>
    `;

    const contentsEl = this.shadowRoot.querySelector("wc-contents");

    contentsEl.contents = [
      {
        id: "whats-it",
        label: "What’s it?",
      },
      {
        id: "template-literals",
        label: "Template Literals",
      },
    ];

    contentsEl.render();
  }
}

customElements.define("wc-js-conditional-rendering", ConditionalRendering);
export default ConditionalRendering;
