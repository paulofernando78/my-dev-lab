import styleImports from "@css/styles.css?inline";
import "@/js/components/molecules/PageHeader.js";
import "@/js/components/molecules/Contents.js";
import "@/js/components/molecules/Section.js";
import "@/js/components/molecules/CardIcon.js";
import "@/js/components/atoms/Wrapper.js";
import "@/js/components/atoms/CardCode.js";
import "@/js/components/atoms/Preview.js";
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
        `
      },
       //! Snippet + Image
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
      //! HTML
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
            sandbox: [
              {
                html: true,
              }
            ],
            notes: /* html */ `
                <p>...</p>
            `,
          },
        ],
      },
      //! CSS
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
            sandbox: [
              {
                html: true,
                css: true,
              }
            ],
            notes: /* html */ `
              <p>Notes</p>
            `,
          },
        ],
      },
      //! Javascript
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
            sandbox: [
              {
                html: true,
                css: true,
                js: true,
              },
            ],
            notes: /* html */ `
              <p>...</p>
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

    this.innerHTML = /* HTML */ `
      <style>
        ${styleImports}
        ${style}
      </style>

      <wc-page-header></wc-page-header>

      <wc-contents></wc-contents>

      <div class="line-break">${renderSections(sections)}</div>

      <wc-lesson-nav></wc-lesson-nav>
    `;

    setupContents(this, sections);
  }
}

customElements.define("wc-boilerplate", Boilerplate);
export default Boilerplate;
