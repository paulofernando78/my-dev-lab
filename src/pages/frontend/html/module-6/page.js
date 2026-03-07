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
import "@/js/components/molecules/Demo.js";
import "@/js/components/organisms/Sandbox.js";
import "@/js/components/molecules/Links.js";
import "@/js/components/molecules/LessonNav.js";

import { setupContents } from "@/js/utils/setupContents.js";
import { renderSections } from "@/js/renderers/renderSection.js";

const style = /* css */`

`;

class ModuleSix extends HTMLElement {
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
        sectionId: "Section",
        sectionLabel: "Section",
        sectionAriaLabel: "Section",
        description: /* html */ `
          ...
        `,

        subSections: [
          {
            subSectionId: "sub-section",
            subSectionLabel: "Sub Section",
            subSectionAriaLabel: "Sub Section",
            description: /* html */ `
              ...
            `,
            cardCodes: [
              {
                cardLabel: "HTML",
                language: "html",
                code: /* html */ `
<input type="">
                `,
              },
            ],
            preview: /* html */ `
              <wc-></wc->
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

customElements.define("wc-frontend-html-module-6", ModuleSix);
export default ModuleSix;
