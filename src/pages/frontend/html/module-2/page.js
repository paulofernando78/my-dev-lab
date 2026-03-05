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

`;

class ModuleTwo extends HTMLElement {
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
        sectionId: "text",
        sectionLabel: "Text and Content Structure",
        sectionAriaLabel: "Text and Content Structure",
        description: /* html */ `
          <p>???</p>
        `,
        cardCodes: [
          {
            type: "code",
            cardLabel: "Headings",
            language: "html",
            code: `
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
        `,
            preview: () => /* html */ `
              <h1>Heading 1</h1>
              <h2>Heading 2</h2>
              <h3>Heading 3</h3>
              <h4>Heading 4</h4>
        `,
          },
          {
            description: /* html */ `
              <p>???</p>
            `,
            cardLabel: "Paragraph",
            language: "html",
            code: `
<p>This is a paragraph.</p>
        `,
            preview: () => /* html */ `
              <p>This is a paragraph.</p>
        `,
            sandbox: [
              {
                html: true,
              },
            ],
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

customElements.define("wc-frontend-html-module-2", ModuleTwo);
export default ModuleTwo;
