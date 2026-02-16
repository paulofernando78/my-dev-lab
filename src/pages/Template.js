import styleImports from "@css/styles.css?inline";
import "@/js/components/molecules/PageHeader.js";
import "@/js/components/molecules/Contents.js";
import "@/js/components/molecules/Section.js";
import "@/js/components/atoms/Card.js";
import "@/js/components/atoms/Wrapper.js";
import "@/js/components/molecules/Code.js";
import "@/js/components/molecules/Notes.js";
import { setupContents } from "@/js/utils/setupContents.js";

const style = /* css */ `

`;

class Template extends HTMLElement {
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
        <p>...</p>
        `,
      },
      {
        sectionId: "...",
        sectionLabel: "...",
        sectionAriaLabel: "...",
        examples: [
          {
            cardLabel: "...",
            language: "",
            code: `
          ...
          `,
            preview: () => `
          ...
          `,
            notes: `...`,
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
        category="HTML / CSS / Javascript"
        page="..."
        aria-label="..."
      ></wc-page-header>

      <wc-contents></wc-contents>

      <div class="line-break">
        ${sections
          .map(
            (section) => /* html */ `
        <wc-section id="${section.sectionId}" label="${section.sectionLabel}" aria-label="${section.sectionAriaLabel}" class="line-break">
          ${section.description ? `<wc-description>${section.description}</wc-description>` : ""}
          ${
            section.examples
              ? section.examples
                  .map(
                    (example) => /* html */ `
        <wc-card cardLabel="${example.cardLabel}">
          <wc-wrapper>
            <wc-code language="${example.language}">
              ${example.code}
            </wc-code>
            <div>
              ${example.preview()}
            </div>
          </wc-wrapper>
        </wc-card>
        ${example.notes ? `<wc-notes>${example.notes}</wc-notes>` : ""}
        `,
                  )
                  .join("")
              : ""
          }
        </wc-section>
          `,
          )
          .join("")}
      </div>
    `;

    setupContents(this.shadowRoot, sections);
  }
}

customElements.define("wc-template", Template);
export default Template;
