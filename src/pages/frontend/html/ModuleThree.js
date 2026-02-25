import styleImports from "@css/styles.css?inline";
import "@/js/components/molecules/PageHeader.js";
import "@/js/components/molecules/Contents.js";
import "@/js/components/molecules/Section.js";
import "@/js/components/atoms/CardCode.js";
import "@/js/components/atoms/Wrapper.js";
import "@/js/components/atoms/Description.js";
import "@/js/components/molecules/Code.js";
import "@/js/components/atoms/Notes.js";
import "@/js/components/molecules/LessonNav.js";
import { setupContents } from "@/js/utils/setupContents.js";
import { renderSections } from "@/js/renderers/renderSection";

const style = /* css */ `
  ol, ul {
    
  }
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
        sectionId: "ordered-lists",
        sectionLabel: "Ordered Lists",
        sectionAriaLabel: "Ordered Lists",
        examples: [
          {
            cardLabel: "default (numbers)",
            language: "html",
            code: `
<ol>
  <li>Item 1</li>
  <li>Item 2</li>
</ol>
        `,
            preview: () => /* html */ `
              <ol>
                <li>Item 1</li>
                <li>Item 2</li>
              </ol>
        `,
          },
          {
            cardLabel: "letters",
            language: "html",
            code: `
<ol>
  <li>Item 1</li>
  <li>Item 2</li>
</ol>
        `,
            preview: () => /* html */ `
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
            preview: () => /* html */ `
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
              </ul>
        `,
          },
        ],
      },
      {
        sectionId: "unordered-lists",
        sectionLabel: "Unordered Lists",
        sectionAriaLabel: "Unordered Lists",
        examples: [
          {
            cardLabel: "Unordered List",
            language: "html",
            code: `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
        `,
            preview: () => /* html */ `
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
            preview: () => /* html */ `
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
            preview: () => /* html */ `
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

      <wc-page-header></wc-page-header>

      <wc-contents></wc-contents>

      <div class="line-break">${renderSections(sections)}</div>

      <wc-lesson-nav></wc-lesson-nav>
    `;

    setupContents(this.shadowRoot, sections);
  }
}

customElements.define("wc-html-module-three", ModuleThree);
export default ModuleThree;
