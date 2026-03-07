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

class Boilerplate extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const sections = [
      {
        sectionId: "headings",
        sectionLabel: "Headings",
        sectionAriaLabel: "Headings",
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
        imgSrc: "/assets/images/headings.jpg",
        alt: "Headings example",

        subSections: [
          {
            subSectionId: "sub-section",
            subSectionLabel: "Subsection",
            subSectionAriaLabel: "Subsection",
            description: /* html */ `
              ...
            `,
            notes: /* html */ `
              ...
            `,
            cardCodes: [
              {
                cardLabel: "HTML",
                language: "html",
                code: /* html */ `
<h1>Hello Wordl!</h1>
                `,
              },
              {
                cardLabel: "CSS",
                language: "css",
                code: /* css */ `

div {
  width: 50px;
  height: 50px;
  background-color: red;
  animation: roll 2s infinite alternate;
  margin-bottom: 10px
}

@keyframes roll {
  from {
    transform: translateX(0) rotate(0deg);
    border-radius: 0
  }
  to {
    transform: translateX(100px) rotate(360deg);
    border-radius: 50%
  }
  }
                `,
              },
              {
                cardLabel: "Javascript",
                language: "js",
                code: /* js */ `
console.log()
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
    ];

    this.innerHTML = /* HTML */ `
      <style>
        ${styleImports}
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
