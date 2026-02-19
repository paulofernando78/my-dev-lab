import styleImports from "@css/styles.css?inline";
import "@/js/components/molecules/PageHeader.js";
import "@/js/components/molecules/Contents.js";
import "@/js/components/molecules/Section.js";
import "@/js/components/atoms/Card.js";
import "@/js/components/atoms/TextBlock.js";
import "@/js/components/atoms/Wrapper.js";
import "@/js/components/molecules/Code.js";
import "@/js/components/molecules/Notes.js";
import { setupContents } from "@/js/utils/setupContents.js";
import { renderSections } from "@/js/renderers/renderSection";

const style = /* css */ `

`;

class Boilerplate extends HTMLElement {
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
        sectionId: "whats-it",
        sectionLabel: "What’s it?",
        sectionAriaLabel: "What’s it?",
        description: /* html */ `
        <wc-text-block>
          <p>...</p>
          <p>...</p>
        </wc-text-block>
        `,
      },
      {
        sectionId: "section-1",
        sectionLabel: "Section 1",
        sectionAriaLabel: "...",
        examples: [
          {
            cardLabel: "Code Block 1",
            language: "",
            code: `
          ...
          `,
            preview: () => /* html */`
              <span>...</span>
          `,
            notes: /* html */`
              <span>...</span>
            `,
          },
        ],
      },
      {
        sectionId: "section-2",
        sectionLabel: "Section 2",
        sectionAriaLabel: "...",
        examples: [
          {
            cardLabel: "Code Block 2",
            language: "",
            code: `
          ...
          `,
            preview: () => /* html */`
              <span>...</span>
          `,
            notes: /* html */`
              <span>...</span>
            `,
          },
        ],
      },
      {
        sectionId: "section-3",
        sectionLabel: "Section 3",
        sectionAriaLabel: "...",
        examples: [
          {
            cardLabel: "Code Block 3",
            language: "",
            code: `
          ...
          `,
            preview: () => /* html */`
              <span>...</span>
          `,
            notes: /* html */`
              <span>...</span>
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
        category="Random
        "
        page="..."
        aria-label="..."
      ></wc-page-header>
      <wc-page-header
        category="HTML"
        page="..."
        aria-label="..."
      ></wc-page-header>
      <wc-page-header
        category="CSS"
        page="..."
        aria-label="..."
      ></wc-page-header>
      <wc-page-header
        category="Javascript"
        page="..."
        aria-label="..."
      ></wc-page-header>

      <wc-contents></wc-contents>

      <div class="line-break">
        ${renderSections(sections)}
      </div>
    `;

    setupContents(this.shadowRoot, sections);
  }
}

customElements.define("wc-boilerplate", Boilerplate);
export default Boilerplate;
