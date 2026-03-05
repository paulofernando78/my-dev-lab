import styleImports from "@css/styles.css?inline";
import "@/js/components/molecules/PageHeader.js";
import "@/js/components/molecules/Contents.js";
import "@/js/components/molecules/Section.js";
import "@/js/components/molecules/CardIcon.js";
import "@/js/components/atoms/CardCode.js";
import "@/js/components/atoms/Wrapper.js";
import "@/js/components/molecules/Code.js";
import "@/js/components/molecules/Links.js";
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
            label: "...",
          },
        ],
      },
      {
        sectionId: "youtube-channels",
        sectionLabel: "Youtube Channels",
        sectionAriaLabel: "Youtube Channels",
        links: [
          {
            href: "https://www.youtube.com/watch?v=HD13eq_Pmp8",
            label: "Bro Code | Learn HTML in 1 hour",
          },
          {
            href: "https://www.youtube.com/watch?v=qz0aGYrrlhU",
            label: "Programming with Mosh | HTML Tutorial for Beginners: HTML Crash Course (1:09:33)",
          },
          {
            href: "https://www.youtube.com/watch?v=mJgBOIoGihA",
            label: "Dave Gray HTML Full Course for Beginners | Complete All-in-One Tutoria… (4:07:33)",
          },
          
          {
            href: "",
            label: "",
          },
        ],
      },
      {
        sectionId: "practice",
        sectionLabel: "Practice",
        sectionAriaLabel: "Practice",
        links: [
          {
            href: "",
            label: "...",
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

customElements.define("wc-frontend-html-resources", Resources);
export default Resources;
