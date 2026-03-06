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
import { renderSections } from "@/js/renderers/renderSection";

const style = /* css */ `
  .box {
    background-color: blue;
    width: 100px;
    height: 100px
  }
`;

class ModuleOne extends HTMLElement {
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
        sectionId: "html",
        sectionLabel: "HTML",
        sectionAriaLabel: "HTML block",
        cardCodes: [
          {
            type: "code",
            cardLabel: "HTML",
            language: "html",
            code: `
<span>...</span>
            `,
            preview: () => /* html */ `
              <span>...</span>
            `,
            notes: /* html */ `
                <p>Notes</p>
                <p>Notes</p>
            `,
          },
        ],
      },
      {
        sectionId: "css",
        sectionLabel: "CSS",
        sectionAriaLabel: "CSS block",
        cardCodes: [
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
        sectionId: "javascript",
        sectionLabel: "Javascript",
        sectionAriaLabel: "Javascript block",
        cardCodes: [
          {
            type: "code",
            cardLabel: "Javascript",
            language: "js",
            code: `
console.log(...)
            `,
            preview: () => /* js */ `
              console.log(...)
            `,
            notes: /* html */ `
              <p>Notes</p>
            `,
          },
        ],
      },
      {
        sectionId: "snippet",
        sectionLabel: "Snippet",
        sectionAriaLabel: "...",
        cardCodes: [
          {
            type: "snippet",
            cardLabel: "Snippet (Image + Text)",
            image: "/assets/images/semantic.jpg",
            description: /* html */ `
              <p>Description</p>
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
            href: "www.google.com",
            title: "link",
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
        category="Random"
        page="..."
        unit="..."
        aria-label="..."
      ></wc-page-header>
      <wc-page-header
        category="HTML"
        page="..."
        unit="..."
        aria-label="..."
      ></wc-page-header>
      <wc-page-header
        category="CSS"
        page="..."
        unit="..."
        aria-label="..."
      ></wc-page-header>
      <wc-page-header
        category="Javascript"
        page="..."
        unit="..."
        aria-label="..."
      ></wc-page-header>

      <wc-contents></wc-contents>

      <div class="line-break">${renderSections(sections)}</div>
    `;

    setupContents(this.shadowRoot, sections);
  }
}

customElements.define("wc-git-module-one", ModuleOne);
export default ModuleOne;
