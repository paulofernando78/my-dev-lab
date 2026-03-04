import styleImports from "@css/styles.css?inline";
import "@/js/components/molecules/PageHeader.js";
import "@/js/components/molecules/Contents.js";
import "@/js/components/molecules/Section.js";
import "@/js/components/atoms/CardCode.js";
import "@/js/components/atoms/Wrapper.js";

import "@/js/components/molecules/Code.js";

import "@/js/components/molecules/LessonNav.js";
import { setupContents } from "@/js/utils/setupContents.js";
import { renderSections } from "@/js/renderers/renderSection";

const style = /* css */ `
  ol, ul {
    padding-left: 1.20rem
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
        cardCodes: [
          //! Default (numbers)
          {
            cardLabel: "Default (numbers)",
            language: "html",
            code: `
<ol>
  <li>...</li>
  <li>...</li>
</ol>
        `,
            preview: () => /* html */ `
              <ol>
                <li>...</li>
                <li>...</li>
              </ol>
        `,
          },
          //! Letters
          {
            cardLabel: "Alphabetic (HTML type - legacy)",
            language: "html",
            code: `
<ol type="A">
  <li>...</li>
  <li>...</li>
</ol>
        `,
            preview: () => /* html */ `
              <ol type="A">
                <li>...</li>
                <li>...</li>
              </ol>
        `,
          },
          //! ...
          {
            cardLabel: "Alphabetic (CSS list-style-type)",
            language: "html",
            code: `
<style>
  ol.alpha {
    list-style-type: lower-alpha;
  }
</style>

<ol class="alpha">
  <li>...</li>
  <li>...</li>
</ol>
        `,
            preview: () => /* html */ `
              <ol style="list-style-type: lower-alpha;">
                <li>...</li>
                <li>...</li>
              </ol>
        `,
            sandbox: [
              {
                html: true,
              },
            ],
          },
        ],
      },
      {
        sectionId: "unordered-lists",
        sectionLabel: "Unordered Lists",
        sectionAriaLabel: "Unordered Lists",
        cardCodes: [
          {
            cardLabel: "Unordered List",
            language: "html",
            code: `
<ul>
  <li>...</li>
  <li>...</li>
</ul>
        `,
            preview: () => /* html */ `
              <ul>
                <li>...</li>
                <li>...</li>
              </ul>
        `,
          },
        ],
      },
      {
        sectionId: "links",
        sectionLabel: "Links",
        sectionAriaLabel: "Links",
        cardCodes: [
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

customElements.define("wc-frontend-html-module-3", ModuleThree);
export default ModuleThree;
