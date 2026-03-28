import styleImports from "@css/styles.css?inline";
import "@/js/components/molecules/PageHeader.js";
import "@/js/components/molecules/Contents.js";
import "@/js/components/molecules/Section.js";
import "@/js/components/atoms/CardCode.js";
import "@/js/components/atoms/Wrapper.js";

import "@/js/components/molecules/Code.js";
import "@/js/components/molecules/Links.js";

import "@/js/components/molecules/LessonNav.js";

import { setupContents } from "@/js/utils/setupContents.js";
import { renderSections } from "@/js/renderers/renderSection";

const style = /* css */ `
  
`;

class JSResources extends HTMLElement {
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
            href: "https://jsoncrack.com/",
            label: "JSON CRACK | Online JSON Viewer",
          },
        ],
      },
      {
        sectionId: "paid-courses",
        sectionLabel: "Paid Courses",
        links: [
          {
            href: "https://www.jschallenger.com/",
            label: "JS Challenger",
          },
          {
            href: "https://firt.dev/vanilla-js/",
            label: "Vanilla-JS, You Might Not Need a Framework",
          },
          {
            href: "https://www.codingame.com/start/",
            label: "CodinGame | Programmig Challenges",
          },
        ],
      },
      {
        sectionId: "youtube-channels",
        sectionLabel: "Youtube Channels",
        links: [
          {
            href: "https://www.youtube.com/watch?v=lfmg-EJ8gm4",
            label: "Bro Code | JavaScript Full Course (12:00:00)",
          },
        ],
      },
      {
        sectionId: "practice",
        sectionLabel: "Practice",
        links: [
          {
            href: "https://runjs.app/play",
            label: "Run JS",
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
        page="Resources"
        aria-label="Javascript Resources"
      ></wc-page-header>

      <wc-contents></wc-contents>

      <div class="line-break">${renderSections(sections)}</div>

      <wc-lesson-nav></wc-lesson-nav>
    `;

    setupContents(this.shadowRoot, sections);
  }
}

customElements.define("wc-frontend-js-resources", JSResources);
export default JSResources;
