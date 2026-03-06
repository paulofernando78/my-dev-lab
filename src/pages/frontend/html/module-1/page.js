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
  connectedCallback() {
    this.render();
  }

  render() {
    const sections = [
      //! ...
      {
        sectionId: "basic-html",
        sectionLabel: "Basic HTML",
       sectionAriaLabel: "Basic HTML",
        description: /* html */ `
          <p>This is the minimal structure of a valid HTML document.</p>
            <p><mark>The <code>&lt;!doctype html&gt;</code> declaration</mark> tells the browser that the document uses HTML5.</p>
            <p>It must always be the first line of an HTML document to ensure standards mode rendering.</p>
            <p><mark>The <code>&lt;html&gt;</code> element</mark> is the root of the document and contains all other elements. The <code>lang</code> attribute defines the language of the page for accessibility and SEO.</p>
            <p><mark>The <code>&lt;head&gt;</code> contains metadata and configuration</mark> for the page. Content inside the head is not displayed directly in the browser.</p>
            <p><mark>The <code>&lt;body&gt;</code> contains all visible content</mark> of the webpage.</p>
        `,

        subSections: [
          {
            subSectionId: "sub-section",
            subSectionLabel: "Sub Section",
            subSectionAriaLabel: "Sub Section",
            cardCodes: [
              {
                cardLabel: "Img",
                imgs: [
                  {
                    imgSrc: "/assets/images/html/module-1/basic-structure.png",
                    alt: "Basic Structure",
                  },
                ],
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

export default ModuleOne;
customElements.define("wc-frontend-html-module-1", ModuleOne);
