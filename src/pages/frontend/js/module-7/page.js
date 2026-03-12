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

class JSModuleSeven extends HTMLElement {
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
<h1>Hello World!</h1>
                `,
                  },
                  {
                    cardLabel: "CSS",
                    language: "css",
                    code: /* css */ `
h1 {
  display: block;
  margin-bottom: 1rem
}

div {
  width: 50px;
  height: 50px;
  animation: roll 2s infinite alternate;
  margin-bottom: 10px
}

@keyframes roll {
  0% {
      transform: translateX(0) rotate(0deg);
      background-color: green;
      border-radius: 0
  }
  33% {
    transform: translateX(50px) rotate(360deg);
    background-color: red;
    border-radius: 0%
  }
  66% {
    transform: translateX(66px) rotate(0deg);
    background-color: orange;
    border-radius: 50%
  }
  100% {
    transform: translateX(100px) rotate(360deg);
    background-color: blue;
    border-radius: 0%
  }
}
                `,
                  },
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `
console.log("Hello World")
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

customElements.define("wc-frontend-js-module-7", JSModuleSeven);
export default JSModuleSeven;
