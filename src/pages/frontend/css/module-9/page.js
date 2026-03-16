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

// Previews
import "@/js/components/pages/css/module-9/SvgCustomPath.js"

const style = /* css */ `

`;

class ModuleNine extends HTMLElement {
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
        sectionId: "Random Animations",
        sectionLabel: "Random Animations",
        sectionAriaLabel: "...",
        description: /* html */ `
          ...
        `,
        sampleAnswer: /* html */ `
          
        `,
        //! Sub Section
        subSections: [
          {
            subSectionId: "svg",
            subSectionLabel: "SVG",
            subSectionAriaLabel: "SVG",
            description: /* html */ `
              ...
            `,
            //! Topic
            topics: [
              {
                topicId: "svg-custom-path",
                topicLabel: "SVG Custom Path",
                topicAriaLabel: "SVG Custom Path",
                description: /* html */ `
                  ...
                `,
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
                  <wc-css-svg-custom-path></wc-css-svg-custom-path>
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

customElements.define("wc-frontend-css-module-9", ModuleNine);
export default ModuleNine;
