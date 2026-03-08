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
import "@/js/components/organisms/Sandbox.js";
import "@/js/components/molecules/Links.js";
import "@/js/components/molecules/LessonNav.js";

import { setupContents } from "@/js/utils/setupContents.js";
import { renderSections } from "@/js/renderers/renderSection.js";

// Previews
import "@/js/components/pages/js/module-7/Toggle.js";

const style = /* css */ `
  .box {
    background-color: blue;
    width: 100px;
    height: 100px
  }
`;

class ModuleSeven extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const sections = [
      //! What's it?
      {
        sectionId: "whats-it",
        sectionLabel: "What’s it?",
        sectionAriaLabel: "What’s it?",
        description: /* html */ `
          <p>...</p>
        `,
      },
      //! Event Basics
      {
        sectionId: "event-basics",
        sectionLabel: "Event Basics",
        sectionAriaLabel: "Event Basics",
        description: /* html */ `
          <p>...</p>
        `,
        subSections: [
          {
            subSectionId: "sub-section",
            subSectionLabel: "Sub Section",
            subSectionAriaLabel: "Sub Section",
            description: /* html */ `
              ...aaa
            `,
            notes: /* html */ `
              ...aaa
            `,
            cardCodes: [
              {
                cardLabel: "HTML",
                language: "html",
                code: /* html */ `
                  <h1>...</h1>
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
      //! Event Listeners
      {
        sectionId: "event-listeners",
        sectionLabel: "Event Listeners",
        sectionAriaLabel: "Event Listeners",
        description: /* html */ `
          <p>...</p>
        `,
        subSections: [
          {
            subSectionId: "toggle",
            subSectionLabel: "Toggle",
            subSectionAriaLabel: "Toggle",
            description: /* html */ `
              ...aaa
            `,
            cardCodes: [
              {
                cardLabel: "HTML",
                language: "html",
                code: /* html */ `
<button>Show message</button>
<span class="hidden">Hidden message</span>
                `,
              },
              {
                cardLabel: "CSS",
                language: "css",
                code: /* css */ `
                button {
display: block;
margin-bottom: 0.5rem
}  

.hidden {
display: none
}

.hidden.show {
display: block
}
              `,
              },
              {
                cardLabel: "Javascript",
                language: "js",
                code: /* js */ `
const button = document.querySelector("button");
const span = document.querySelector("span");

button.addEventListener("click", () => {
  span.classList.toggle("show")
});
                `,
              },
            ],
            preview: /* html */ `
              <wc-js-module-7-toggle></wc-js-module-7-toggle>
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
      //! Event Object
      {
        sectionId: "event-object",
        sectionLabel: "Event Object",
        sectionAriaLabel: "Event Object",
        description: /* html */ `
          <p>...</p>
        `,
        subSections: [
          {
            subSectionId: "sub-section",
            subSectionLabel: "Sub Section",
            subSectionAriaLabel: "Sub Section",
            description: /* html */ `
              ...aaa
            `,
            notes: /* html */ `
              ...aaa
            `,
            cardCodes: [
              {
                cardLabel: "HTML",
                language: "html",
                code: /* html */ `
                  <h1>...</h1>
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
      //! Event Propagation
      {
        sectionId: "event-propagation",
        sectionLabel: "Event Propagation",
        sectionAriaLabel: "Event Propagation",
        description: /* html */ `
          <p>...</p>
        `,
        subSections: [
          {
            subSectionId: "sub-section",
            subSectionLabel: "Sub Section",
            subSectionAriaLabel: "Sub Section",
            description: /* html */ `
              ...aaa
            `,
            notes: /* html */ `
              ...aaa
            `,
            cardCodes: [
              {
                cardLabel: "HTML",
                language: "html",
                code: /* html */ `
                  <h1>...</h1>
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
      //! Event Delegation
      {
        sectionId: "event-delegation",
        sectionLabel: "Event Delegation",
        sectionAriaLabel: "Event Delegation",
        description: /* html */ `
          <p>...</p>
        `,
        subSections: [
          {
            subSectionId: "sub-section",
            subSectionLabel: "Sub Section",
            subSectionAriaLabel: "Sub Section",
            description: /* html */ `
              ...aaa
            `,
            notes: /* html */ `
              ...aaa
            `,
            cardCodes: [
              {
                cardLabel: "HTML",
                language: "html",
                code: /* html */ `
                  <h1>...</h1>
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

customElements.define("wc-frontend-js-module-7", ModuleSeven);
export default ModuleSeven;
