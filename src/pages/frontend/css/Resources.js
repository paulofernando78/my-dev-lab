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
            href: "https://www.joshwcomeau.com/",
            title: "Josh Comeau"
          },
          {
            href: "https://lea.verou.me/",
            title: "Lea Verou"
          }
        ]
      },
      {
        sectionId: "youtube-channels",
        sectionLabel: "Youtube Channels",
        sectionAriaLabel: "Youtube Channels",
        links: [
          {
            href: "https://www.youtube.com/watch?v=kINNs4uYYnY&list=PLj-4DlPRT48kQD-jzqfkutO5OvMUXLcNP",
            title: "Lama Dev"
          }
        ]
      },
      {
        sectionId: "practice",
        sectionLabel: "Practice",
        sectionAriaLabel: "Practice",
        links: [
          {
            href: "https://cssbattle.dev/",
            title: "CSS Battle"
          },
          {
            href: "https://flexboxfroggy.com",
            title: "Flexbox Froggy"
          },
          {
            href: "https://flukeout.github.io/",
            title: "CSS Diner"
          },
          {
            href: "https://cssgridgarden.com",
            title: "Grid Garden"
          },
          {
            href: "https://codepen.io/challenges",
            title: "CODEPEN Challenges"
          },
        ]
      },
    ];

    this.shadowRoot.innerHTML = /* HTML */ `
      <style>
        ${styleImports}
        ${style}
      </style>
      <wc-page-header
        category="CSS"
        page="Resources"
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

customElements.define("wc-css-resources", Resources);
export default Resources;
