import styleImports from "@css/styles.css?inline";
import "@/js/components/molecules/PageHeader.js";
import "@/js/components/molecules/Contents.js";
import "@/js/components/molecules/Section.js";
import "@/js/components/molecules/CardIcon.js";
import "@/js/components/molecules/SubSection.js";
import "@/js/components/atoms/Wrapper.js";
import "@/js/components/atoms/Image.js";
import "@/js/components/molecules/Topic.js";
import "@/js/components/atoms/CardCode.js";
import "@/js/components/molecules/Code.js";
import "@/js/components/molecules/Demo.js";
import "@/js/components/organisms/Sandbox.js";
import "@/js/components/molecules/Links.js";
import "@/js/components/molecules/LessonNav.js";

import { setupContents } from "@/js/utils/setupContents.js";
import { renderSections } from "@/js/renderers/renderSection.js";

const style = /* css */ `

`;

class Boilerplate extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {
    // cleanup (events, intervals, observers)
  }

  render() {
    const sections = [
      //! Section
      {
        sectionId: "Section",
        sectionLabel: "Section",
        sectionAriaLabel: "...",
        description: /* html */ `
          ...
        `,
        sampleAnswer: /* html */ `
          
        `,
        notes: /* html */ `
          ...
        `,
        imgs: [
          {
            imgSrc: "/assets/images/semantic.jpg",
            alt: "Headings example",
          },
        ],
        //! Sub Section
        subSections: [
          {
            subSectionId: "sub-section",
            subSectionLabel: "Sub Section",
            subSectionAriaLabel: "...",
            description: /* html */ `
              ...
            `,
            notes: /* html */ `
              ...
            `,
            imgs: [
              {
                imgSrc: "/assets/images/semantic.jpg",
                alt: "Headings example",
              },
            ],
            //! Topic
            topics: [
              {
                topicId: "topic",
                topicLabel: "Topic",
                topicAriaLabel: "...",
                description: /* html */ `
                  ...
                `,
                notes: /* html */ `
                  ...
                `,
                imgs: [
                  {
                    imgSrc: "/assets/images/semantic.jpg",
                    alt: "Headings example",
                  },
                ],
                cardCodes: [
                  {
                    cardLabel: "HTML",
                    language: "html",
                    code: /* html */ `

                `,
                  },
                  {
                    cardLabel: "CSS",
                    language: "css",
                    code: /* css */ `

                `,
                  },
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `

                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    html: true,
                    css: true,
                    js: true,
                    console: true
                  },
                ],
              },
            ],
          },
        ],
      },
      //! Resources
      {
        sectionId: "resources",
        sectionLabel: "Resources",
        sectionAriaLabel: "Resources",
        links: [
          {
            href: "https://www.google.com/",
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
