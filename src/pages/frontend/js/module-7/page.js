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
      //! Event Basics
      {
        sectionId: "event-basics",
        sectionLabel: "Event Basics",
        sectionAriaLabel: "Event Basics",
        cardCodes: [
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
        demo: /* html */ `
              <wc-></wc->
            `,
        sandbox: [
          {
            html: true,
            css: true,
            js: true,
          },
        ],
      },
      //! Event Listeners
      {
        sectionId: "event-listeners",
        sectionLabel: "Event Listeners",
        sectionAriaLabel: "Event Listeners",
        cardCodes: [
          {
            cardLabel: "HTML",
            language: "html",
            code: /* html */ `
              <button>Show Object</button>
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
              const button = document.querySelector("button")
              const div = document.querySelector("div")

              button.addEventListener("click", () => {
                div.classList.toggle("box")
              })

            `,
          },
        ],
        demo: /* html */ `
              <wc-toogle></wc-toogle>
            `,
        sandbox: [
          {
            html: true,
            css: true,
            js: true,
          },
        ],
      },
      //! Event Object
      {
        sectionId: "event-object",
        sectionLabel: "Event Object",
        sectionAriaLabel: "Event Object",
        cardCodes: [
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
        demo: /* html */ `
              <wc-></wc->
            `,
        sandbox: [
          {
            html: true,
            css: true,
            js: true,
          },
        ],
      },
      //! Event Propagation
      {
        sectionId: "event-propagation",
        sectionLabel: "Event Propagation",
        sectionAriaLabel: "Event Propagation",
        cardCodes: [
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
        demo: /* html */ `
              <wc-></wc->
            `,
        sandbox: [
          {
            html: true,
            css: true,
            js: true,
          },
        ],
      },
      //! Event Delegation
      {
        sectionId: "event-delegation",
        sectionLabel: "Event Delegation",
        sectionAriaLabel: "Event Delegation",
        cardCodes: [
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
        demo: /* html */ `
              <wc-></wc->
            `,
        sandbox: [
          {
            html: true,
            css: true,
            js: true,
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

      <wc-page-header
        category="Javascript"
        page="Module 7"
        unit="Events"
        aria-label="..."
      ></wc-page-header>

      <wc-contents></wc-contents>

      <div class="line-break">${renderSections(sections)}</div>

      <wc-lesson-nav></wc-lesson-nav>
    `;

    setupContents(this.shadowRoot, sections);
  }
}

customElements.define("wc-frontend-js-module-7", ModuleSeven);
export default ModuleSeven;
