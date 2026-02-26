import styleImports from "@css/styles.css?inline";
import "@/js/components/molecules/PageHeader.js";
import "@/js/components/molecules/Contents.js";
import "@/js/components/molecules/Section.js";
import "@/js/components/atoms/CardCode.js";
import "@/js/components/atoms/Wrapper.js";

import "@/js/components/molecules/Code.js";

import "@/js/components/molecules/Links.js";
import "@/js/components/molecules/LessonNav.js";
import { setupContents } from "@/js/utils/setupContents.js";
import { renderSections } from "@/js/renderers/renderSection";

const style = /* css */ `
  .box {
    background-color: blue;
    width: 100px;
    height: 100px
  }
`;

class ModuleFour extends HTMLElement {
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
            <p>Description</p>
            <p>Description</p>
        `,
      },
      {
        sectionId: "css",
        sectionLabel: "CSS",
        sectionAriaLabel: "CSS block",
        examples: [
          {
            type: "code",
            cardLabel: "CSS",
            language: "css",
            code: `
.box {
  background-color: blue;
  width: 100px;
  height: 100px
}
            `,
            preview: () => /* html */ `
              <div class="box">
              </div>
            `,
            notes: /* html */ `
              <p>Notes</p>
            `,
          },
        ],
      },
      {
        sectionId: "links",
        sectionLabel: "Links",
        sectionAriaLabel: "Links",
        links: [
          {
            href: "https://www.youtube.com/watch?v=radgOh1F8o0",
            label:
              "Austin Davis | CSS Positioning - The Only Guide You Will Ever Need",
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

customElements.define("wc-css-module-four", ModuleFour);
export default ModuleFour;
