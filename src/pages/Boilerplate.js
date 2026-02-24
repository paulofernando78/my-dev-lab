import styleImports from "@css/styles.css?inline";
import "@/js/components/molecules/PageHeader.js";
import "@/js/components/molecules/Contents.js";
import "@/js/components/molecules/Section.js";
import "@/js/components/atoms/CardCode.js";
import "@/js/components/atoms/Wrapper.js";
import "@/js/components/atoms/Description.js";
import "@/js/components/molecules/Code.js";
import "@/js/components/molecules/Links.js";
import "@/js/components/atoms/Notes.js";
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
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const sections = [
      {
        sectionId: "whats-it",
        sectionLabel: "What’s it?",
        sectionAriaLabel: "What’s it?",
        description: /* html */ `
            <p>Description</p>
            <p>Description</p>
        `,
      },
      {
        sectionId: "html",
        sectionLabel: "HTML",
        sectionAriaLabel: "HTML block",
        examples: [
          {
            type: "code",
            cardLabel: "HTML",
            language: "html",
            code: `
<span>...</span>
            `,
            preview: () => /* html */`
              <span>...</span>
            `,
            notes: /* html */`
                <p>Notes</p>
                <p>Notes</p>
            `,
          },
        ],
      },
      {
        sectionId: "css",
        sectionLabel: "CSS",
        sectionAriaLabel: "CSS block",
        examples: [
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
            preview: () => /* html */`
              <div class="box">
              </div>
            `,
            notes: /* html */`
              <p>Notes</p>
            `,
          },
        ],
      },
      {
        sectionId: "javascript",
        sectionLabel: "Javascript",
        sectionAriaLabel: "Javascript block",
        examples: [
          {
            type: "code",
            cardLabel: "Javascript",
            language: "js",
            code: `
console.log(...)
            `,
            preview: () => /* js */`
              console.log(...)
            `,
            notes: /* html */`
              <p>Notes</p>
            `,
          },
        ],
      },
      {
        sectionId: "snippet",
        sectionLabel: "Snippet",
        sectionAriaLabel: "...",
        examples: [
          {
            type: "snippet",
            cardLabel: "Snippet (Image + Text)",
            image: "/assets/images/semantic.jpg",
            description: /* html */`
              <p>Description</p>
            `,
          },
        ],
      },
      {
        sectionId: "links",
        sectionLabel: "Links",
        sectionAriaLabel: "Links",
        links: [
          {
            href: "www.google.com",
            title: "link"
          }
        ]
      },
    ];

    this.shadowRoot.innerHTML = /* HTML */ `
      <style>
        ${styleImports}
        ${style}
      </style>

      <wc-page-header
        category="Random"
        page="..."
        unit="..."
        aria-label="..."
      ></wc-page-header>
      <wc-page-header
        category="HTML"
        page="..."
        unit="..."
        aria-label="..."
      ></wc-page-header>
      <wc-page-header
        category="CSS"
        page="..."
        unit="..."
        aria-label="..."
      ></wc-page-header>
      <wc-page-header
        category="Javascript"
        page="..."
        unit="..."
        aria-label="..."
      ></wc-page-header>

      <wc-contents></wc-contents>

      <div class="line-break">
        ${renderSections(sections)}
      </div>

      <wc-lesson-nav></wc-lesson-nav>
    `;

    setupContents(this.shadowRoot, sections);
  }
}

customElements.define("wc-boilerplate", Boilerplate);
export default Boilerplate;
