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

class ModuleThree extends HTMLElement {
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
        sectionId: "lists",
        sectionLabel: "Lists",
        sectionAriaLabel: "Lists",
        examples: [
          {
            cardLabel: "Ordered List",
            language: "html",
            code: `
<ol>
  <li>Item 1</li>
  <li>Item 2</li>
</ol>
        `,
            preview: () => `
<ol>
  <li>Item 1</li>
  <li>Item 2</li>
</ol>
        `,
          },
          {
            cardLabel: "Unordered List",
            language: "html",
            code: `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
        `,
            preview: () => `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
        `,
          },
        ],
      },
      {
        sectionId: "links",
        sectionLabel: "Links",
        sectionAriaLabel: "Links",
        examples: [
          {
            cardLabel: "Default Link",
            language: "html",
            code: `
<a href="https://example.com">Visit example</a>
        `,
            preview: () => `
<a href="https://example.com">Visit example</a>
        `,
          },
          {
            cardLabel: "Open in New Tab",
            language: "html",
            code: `
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  Open example
</a>
        `,
            preview: () => `
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  Open example
</a>
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
        category="HTML"
        page="Module 3 • Lists, Links & Navigation"
        aria-label="HTML Module 3 Lists Links Navigation"
      ></wc-page-header>

      <wc-contents></wc-contents>

      <div class="line-break">
        ${renderSections(sections)}
      </div>
    `;

    setupContents(this.shadowRoot, sections);
  }
}

customElements.define("wc-html-module-three", ModuleThree);
export default ModuleThree;
