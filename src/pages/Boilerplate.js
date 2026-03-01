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
      //! Description / Sample Answer / Notes
      {
        sectionId: "whats-it",
        sectionLabel: "What’s it?",
        sectionAriaLabel: "What’s it?",
        description: /* html */ `
          <p>...</p>
        `,
        sampleAnswer: /* html */ `
          <p>...</p>
        `,
        notes: /* html */ `
          <p>...</p>
        `,
      },
      //! Sandbox
      {
        sectionId: "sandbox",
        sectionLabel: "Sandbox",
        sectionAriaLabel: "Sandbox",
        examples: [
          {
            type: "sandbox",
            cardLabel: "Sandbox",
          }
        ]
      },
      //! Code
      {
        sectionId: "html",
        sectionLabel: "HTML",
        sectionAriaLabel: "HTML block",
        examples: [
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
      //! Code
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
      //! Code
      {
        sectionId: "javascript",
        sectionLabel: "Javascript",
        sectionAriaLabel: "Javascript block",
        examples: [
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
      //! Snippet + Image
      {
        sectionId: "snippet",
        sectionLabel: "Snippet",
        sectionAriaLabel: "...",
        examples: [
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
      //! Links
      {
        sectionId: "links",
        sectionLabel: "Links",
        sectionAriaLabel: "Links",
        links: [
          {
            href: "www.google.com",
            label: "link",
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

customElements.define("wc-boilerplate", Boilerplate);
export default Boilerplate;
