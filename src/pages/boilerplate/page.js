import styleImports from "@css/styles.css?inline";
import "@/js/components/molecules/PageHeader.js";
import "@/js/components/molecules/Contents.js";
import "@/js/components/molecules/Section.js";
import "@/js/components/molecules/CardIcon.js";
import "@/js/components/molecules/SubSection.js";
import "@/js/components/atoms/Wrapper.js";
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

class Boilerplate extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const sections = [
      //! ...
      {
        sectionId: "...",
        sectionLabel: "Section",
        sectionAriaLabel: "...",
        description: /* html */ `
          <p>...</p>
        `,
        sampleAnswer: /* html */ `
          <p>...</p>
        `,
        notes: /* html */ `
          <p>...</p>
        `,

        subSections: [
          {
            subSectionId: "sub-section",
            subSectionLabel: "Sub Section",
            subSectionAriaLabel: "Sub Section",
            cardCodes: [
              {
                cardLabel: "Img",
                image: "/assets/images/semantic.jpg",
              },
              {
                cardLabel: "HTML",
                language: "html",
                code: /* html */ `
                  ...
                `,
              },
              {
                cardLabel: "CSS",
                language: "css",
                code: /* css */ `
                  ...
                `,
              },
              {
                cardLabel: "JS",
                language: "js",
                code: /* js */ `
                  ...
                `,
              },
            ],
            preview: /* html */ `
              <wc-demo></wc-demo>
            `,
            sandbox: [
              {
                html: true,
                css: true,
                js: true,
              },
            ],
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
