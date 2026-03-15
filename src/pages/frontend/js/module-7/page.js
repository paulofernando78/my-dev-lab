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
      //! 7.1 Event Fundamentals
      {
        sectionId: "event-fundamentals",
        sectionLabel: "7.1 Event Fundamentals",
        sectionAriaLabel: "7.1 Event Fundamentals",
        description: /* html */ `
          ...
        `,
        sampleAnswer: /* html */ `
          
        `,
        subSections: [
          //! Event Listeners
          {
            subSectionId: "event-listeners",
            subSectionLabel: "Event Listeners",
            subSectionAriaLabel: "Event Listeners",
            description: /* html */ `
              ...
            `,
            topics: [
              //! addEventListener()
              {
                topicId: "add-event-listener",
                topicLabel: "addEventListener()",
                topicAriaLabel: "addEventListener()",
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
              //! removeEventListener()
              {
                topicId: "remove-event-listener",
                topicLabel: "removeEventListener()",
                topicAriaLabel: "removeEventListener()",
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
              //! Event hander vs Event listener
              {
                topicId: "event-hander-vs-event-listener",
                topicLabel: "Event hander vs Event listener",
                topicAriaLabel: "Event hander vs Event listener",
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
              //! Event object (event)
              {
                topicId: "topic",
                topicLabel: "Topic",
                topicAriaLabel: "...",
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
          //! Event Types
          {
            subSectionId: "even-types",
            subSectionLabel: "Event Types",
            subSectionAriaLabel: "Event Types",
            description: /* html */ `
              ...
            `,
            topics: [
              //! click
              {
                topicId: "click",
                topicLabel: "click",
                topicAriaLabel: "click",
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
              //! dblclick
              {
                topicId: "topic",
                topicLabel: "Topic",
                topicAriaLabel: "...",
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
              //! contenxtmenu
              {
                topicId: "topic",
                topicLabel: "Topic",
                topicAriaLabel: "...",
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
              //! scroll
              {
                topicId: "topic",
                topicLabel: "Topic",
                topicAriaLabel: "...",
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
              //! resize
              {
                topicId: "topic",
                topicLabel: "Topic",
                topicAriaLabel: "...",
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
      //! 7.2 Mouse Events
      {
        sectionId: "mouse-events",
        sectionLabel: "7.2 Mouse Events",
        sectionAriaLabel: "7.2 Mouse Events",
        description: /* html */ `
          ...
        `,
        sampleAnswer: /* html */ `
          
        `,
        subSections: [
          //! Mouse Interactions
          {
            subSectionId: "mouse-interactions",
            subSectionLabel: "Mouse Interactions",
            subSectionAriaLabel: "Mouse Interactions",
            description: /* html */ `
              ...
            `,
            topics: [
              //! Topic
              {
                topicId: "topic",
                topicLabel: "Topic",
                topicAriaLabel: "...",
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
      //! 7.3 Keyboard Events
      {
        sectionId: "Section",
        sectionLabel: "Section",
        sectionAriaLabel: "...",
        description: /* html */ `
          ...
        `,
        sampleAnswer: /* html */ `
          
        `,
        subSections: [
          //! Sub Section
          {
            subSectionId: "sub-section",
            subSectionLabel: "Sub Section",
            subSectionAriaLabel: "...",
            description: /* html */ `
              ...
            `,
            topics: [
              //! Topic
              {
                topicId: "topic",
                topicLabel: "Topic",
                topicAriaLabel: "...",
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
      //! 7.4 Form Events
      {
        sectionId: "Section",
        sectionLabel: "Section",
        sectionAriaLabel: "...",
        description: /* html */ `
          ...
        `,
        sampleAnswer: /* html */ `
          
        `,
        subSections: [
          //! Sub Section
          {
            subSectionId: "sub-section",
            subSectionLabel: "Sub Section",
            subSectionAriaLabel: "...",
            description: /* html */ `
              ...
            `,
            topics: [
              //! Topic
              {
                topicId: "topic",
                topicLabel: "Topic",
                topicAriaLabel: "...",
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
      //! 7.5 Event Flow
      {
        sectionId: "Section",
        sectionLabel: "Section",
        sectionAriaLabel: "...",
        description: /* html */ `
          ...
        `,
        sampleAnswer: /* html */ `
          
        `,
        subSections: [
          //! Sub Section
          {
            subSectionId: "sub-section",
            subSectionLabel: "Sub Section",
            subSectionAriaLabel: "...",
            description: /* html */ `
              ...
            `,
            topics: [
              //! Topic
              {
                topicId: "topic",
                topicLabel: "Topic",
                topicAriaLabel: "...",
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
      //! 7.6 Event Pattern
      {
        sectionId: "Section",
        sectionLabel: "Section",
        sectionAriaLabel: "...",
        description: /* html */ `
          ...
        `,
        sampleAnswer: /* html */ `
          
        `,
        subSections: [
          //! Sub Section
          {
            subSectionId: "sub-section",
            subSectionLabel: "Sub Section",
            subSectionAriaLabel: "...",
            description: /* html */ `
              ...
            `,
            topics: [
              //! Topic
              {
                topicId: "topic",
                topicLabel: "Topic",
                topicAriaLabel: "...",
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

customElements.define("wc-frontend-js-module-7", JSModuleSeven);
export default JSModuleSeven;
