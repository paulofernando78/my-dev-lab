import styleImports from "@css/styles.css?inline";
import "@/js/components/molecules/PageHeader.js";
import "@/js/components/molecules/Contents.js";
import "@/js/components/molecules/Section.js";
import "@/js/components/atoms/CardCode.js";
import "@/js/components/atoms/Wrapper.js";
import "@/js/components/atoms/Description.js";
import "@/js/components/molecules/Code.js";
import "@/js/components/atoms/Notes.js";
import "@/js/components/molecules/LessonNav.js";
import { setupContents } from "@/js/utils/setupContents.js";
import { renderSections } from "@/js/renderers/renderSection";

const style = /* css */ `
  
`;

class Resources extends HTMLElement {
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
        sectionId: "sites",
        sectionLabel: "Sites",
        sectionAriaLabel: "Sites",
        links: [
          {
            href: "",
            title: ""
          },
        ]
      },
      {
        sectionId: "youtube-channels",
        sectionLabel: "Youtube Channels",
        sectionAriaLabel: "Youtube Channels",
        links: [
          {
            href: "",
            title: ""
          }
        ]
      },
      {
        sectionId: "practice",
        sectionLabel: "Practice",
        sectionAriaLabel: "Practice",
        links: [
          {
            href: "",
            title: ""
          },
        ]
      },
    ];

    this.shadowRoot.innerHTML = /* HTML */ `
      <style>
        ${styleImports}
        ${style}
      </style>
      
      <wc-page-header></wc-page-header>

      <wc-contents></wc-contents>

      <div class="line-break">
        ${renderSections(sections)}
      </div>

      <wc-lesson-nav></wc-lesson-nav>
    `;

    setupContents(this.shadowRoot, sections);
  }
}

customElements.define("wc-html-resources", Resources);
export default Resources;
