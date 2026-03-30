import styleImports from "@css/styles.css?inline";
import "@/js/components/molecules/PageHeader.js";
import "@/js/components/molecules/Contents.js";
import "@/js/components/molecules/Section.js";
import "@/js/components/molecules/CardCode.js";
import "@/js/components/atoms/Wrapper.js";

import "@/js/components/atoms/Code.js";
import "@/js/components/molecules/Links.js";

import "@/js/components/molecules/LessonNav.js";
import { setupContents } from "@/js/utils/setupContents.js";
import { renderSections } from "@/js/renderers/renderSection";

const style = /* css */ `
  
`;

class CSSResources extends HTMLElement {
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
        links: [
          {
            href: "https://www.joshwcomeau.com/",
            label: "Josh W. Comeau",
          },
          {
            href: "https://www.joshwcomeau.com/css/center-a-div/?from=newsletter",
            label: "Josh W. Comeau | How to center a DIV",
          },
          {
            href: "https://lea.verou.me/",
            label: "Lea Verou",
          },
        ],
      },
      {
        sectionId: "youtube-channels",
        sectionLabel: "Youtube Channels",
        links: [
          {
            href: "https://www.youtube.com/watch?v=kINNs4uYYnY&list=PLj-4DlPRT48kQD-jzqfkutO5OvMUXLcNP",
            label: "Lama Dev",
          },
          {
            href: "https://www.youtube.com/watch?v=ZPTVr2pS0XE",
            label: "Web Conferences Amsterdam | How to Teach CSS | Josh Comeau | CSS Day 2024",
          },
          {
            href: "https://www.youtube.com/watch?v=UFwu9gxMLvM",
            label: "Voicu Apostol | Design A 3D Button in Figma",
          },
        ],
      },
      {
        sectionId: "practice",
        sectionLabel: "Practice",
        links: [
          {
            href: "https://cssbattle.dev/",
            label: "CSS Battle",
          },
          {
            href: "https://flexboxfroggy.com",
            label: "Flexbox Froggy",
          },
          {
            href: "https://flukeout.github.io/",
            label: "CSS Diner",
          },
          {
            href: "https://cssgridgarden.com",
            label: "Grid Garden",
          },
          {
            href: "https://www.playcss.app/",
            label: "Play CSS",
          },
          {
            href: "https://codepen.io/challenges",
            label: "CODEPEN Challenges",
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
        category="CSS"
        page="Resources"
        aria-label="CSS Resources"
      ></wc-page-header>

      <wc-contents></wc-contents>

      <div class="line-break">${renderSections(sections)}</div>

      <wc-lesson-nav></wc-lesson-nav>
    `;

    setupContents(this.shadowRoot, sections);
  }
}

customElements.define("wc-frontend-css-resources", CSSResources);
export default CSSResources;
