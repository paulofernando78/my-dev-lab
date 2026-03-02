import styleImports from "@css/styles.css?inline";
import "@/js/components/molecules/PageHeader.js";
import "@/js/components/molecules/Contents.js";
import "@/js/components/molecules/Section.js";
import "@/js/components/molecules/CardIcon.js";
import "@/js/components/atoms/CardCode.js";
import "@/js/components/atoms/Wrapper.js";
import "@/js/components/molecules/Code.js";
import "@/js/components/organisms/Sandbox.js";
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

class ModuleEight extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const sections = [
      //! Window object
      {
        sectionId: "window-object",
        sectionLabel: "Window object",
        sectionAriaLabel: "Window object",
        description: /* html */ `
          <p>...</p>
        `,
        notes: /* html */ `
          <p>...</p>
        `,
      },
      //! Document object
      {
        sectionId: "document-object",
        sectionLabel: "Document object",
        sectionAriaLabel: "Document object",
        description: /* html */ `
          <p>...</p>
        `,
        notes: /* html */ `
          <p>...</p>
        `,
      },
      //! History API
      {
        sectionId: "history-api",
        sectionLabel: "History API",
        sectionAriaLabel: "History API",
        description: /* html */ `
          <p>...</p>
        `,
        notes: /* html */ `
          <p>...</p>
        `,
      },
      //! Location
      {
        sectionId: "location",
        sectionLabel: "Location",
        sectionAriaLabel: "Location",
        description: /* html */ `
          <p>...</p>
        `,
        notes: /* html */ `
          <p>...</p>
        `,
      },
      //! ContentEditable
      {
        sectionId: "contentEditable",
        sectionLabel: "ContentEditable",
        sectionAriaLabel: "ContentEditable",
        description: /* html */ `
          <p>...</p>
        `,
        notes: /* html */ `
          <p>...</p>
        `,
      },
      //! ...
      {
        sectionId: "whats-it",
        sectionLabel: "What’s it?",
        sectionAriaLabel: "What’s it?",
        description: /* html */ `
          <p>...</p>
        `,
        notes: /* html */ `
          <p>...</p>
        `,
      },
      //! Design Mode
      {
        sectionId: "Design-mode",
        sectionLabel: "Design Mode",
        sectionAriaLabel: "Design Mode",
        description: /* html */ `
          <p>The document.designMode property in HTML allows for making the entire document editable within the browser. This property can be set to either "on" or "off".</p>
        `,
        examples: [
          {
            type: "code",
            cardLabel: "Javascript",
            language: "js",
            code: `
document.designMode = "on";
            `,
            preview: () => /* js */ `
              
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
        page="Module 8"
        unit="Core Language"
        aria-label="..."
      ></wc-page-header>

      <wc-contents></wc-contents>

      <div class="line-break">${renderSections(sections)}</div>

      <wc-lesson-nav></wc-lesson-nav>
    `;

    setupContents(this.shadowRoot, sections);
  }
}

customElements.define("wc-frontend-js-module-8", ModuleEight);
export default ModuleEight;
