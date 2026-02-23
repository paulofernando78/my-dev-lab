import styleImports from "@css/styles.css?inline";
import "@/js/components/molecules/PageHeader.js";
import "@/js/components/molecules/Contents.js";
import "@/js/components/molecules/Section.js";
import "@/js/components/atoms/Card.js";
import "@/js/components/atoms/Wrapper.js";
import "@/js/components/atoms/Description.js";
import "@/js/components/molecules/Code.js";
import "@/js/components/molecules/Links.js";
import "@/js/components/atoms/Notes.js";
import { setupContents } from "@/js/utils/setupContents.js";
import { renderSections } from "@/js/renderers/renderSection";

const style = /* css */ `
  .box {
    background-color: blue;
    width: 100px;
    height: 100px
  }
`;

class CommonQuestionsAndAnswers extends HTMLElement {
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
        sectionId: "rqa",
        sectionLabel: "Questions & Answers",
        sectionAriaLabel: "...",
        description: /* html */ `
            <p>Description</p>
        `,
      },
      {
        sectionId: "links",
        sectionLabel: "Links",
        sectionAriaLabel: "Links",
        links: [
          {
            href: "https://www.youtube.com/@TheCompaniesExpert",
            title: "The Companies Expert"
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
        category="Jobs"
        page="Common Questions & Answers"
        unit="..."
        aria-label="..."
      ></wc-page-header>

      <wc-contents></wc-contents>

      <div class="line-break">
        ${renderSections(sections)}
      </div>
    `;

    setupContents(this.shadowRoot, sections);
  }
}

customElements.define("wc-jobs-common.questions-answers", CommonQuestionsAndAnswers);
export default CommonQuestionsAndAnswers;
