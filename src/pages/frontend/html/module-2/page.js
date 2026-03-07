import styleImports from "@css/styles.css?inline";
import "@/js/components/molecules/PageHeader.js";
import "@/js/components/molecules/Contents.js";
import "@/js/components/molecules/Section.js";
import "@/js/components/molecules/CardIcon.js";
import "@/js/components/molecules/SubSection.js";
import "@/js/components/atoms/Wrapper.js";
import "@/js/components/atoms/Image.js";
import "@/js/components/atoms/CardCode.js";
import "@/js/components/molecules/Code.js";
import "@/js/components/organisms/Sandbox.js";
import "@/js/components/molecules/Links.js";
import "@/js/components/molecules/LessonNav.js";

import { setupContents } from "@/js/utils/setupContents.js";
import { renderSections } from "@/js/renderers/renderSection";

// Previews
import "@/js/components/pages/html/module-2/Headings.js"
import "@/js/components/pages/html/module-2/Paragraph.js"

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
        sectionId: "text-and-content-structure",
        sectionLabel: "Text and Content Structure",
        sectionAriaLabel: "Text and Content Structure",
        description: /* html */ `
          <p>HTML provides elements that define the structure and organization of textual content on a webpage.</p>
          <p>Elements such as <code>&lt;h1&gt;</code>–<code>&lt;h6&gt;</code> and <code>&lt;p&gt;</code> help organize information into meaningful sections and paragraphs.</p>
          <p>This structure improves readability for users and helps search engines and assistive technologies understand the content of the page.</p>
          `,
        subSections: [
          {
            subSectionId: "headings",
            subSectionLabel: "Headings",
            subSectionAriaLabel: "Headings",
            description: /* html */ `
              <p>Headings define the structure and hierarchy of a page.</p>
              <p>They range from <code>&lt;h1&gt;</code> (most important) to <code>&lt;h6&gt;</code> (least important).</p>
              <p>Search engines and assistive technologies use headings to understand the structure of the document.</p>
            `,
            cardCodes: [
              {
                cardLabel: "HTML",
                language: "html",
                code: /* html */ `
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
                `,
              },
            ],
            preview: /* html */ `
              <wc-html-module-2-headings></wc-html-module-2-headings>
            `,
          },
          {
            subSectionId: "paragraph",
            subSectionLabel: "Paragraph",
            subSectionAriaLabel: "Paragraph",
            description: /* html */ `
              <p>The <code>&lt;p&gt;</code> element represents a paragraph of text.</p>
              <p>Browsers automatically add spacing before and after paragraphs to improve readability.</p>
              <p>Paragraphs are used to group related sentences into blocks of content.</p>
            `,
            cardCodes: [
              {
                cardLabel: "HTML",
                language: "html",
                code: /* html */ `
<p>This is a paragraph.</p>
                `,
              },
            ],
            preview: /* html */ `
              <wc-html-module-2-paragraph></wc-html-module-2-paragraph>
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
