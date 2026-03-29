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

class HTMLResources extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const sections = [
       //! Links
      {
        sectionId: "links",
        sectionLabel: "Links",
        links: [
          {
            href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
            label: "MDN | HTML: HyperText Markup Language",
          },
          {
            href: "https://html.spec.whatwg.org/",
            label: "HTML | Living Standard",
          },
          {
            href: "https://htmlreference.io/",
            label: "HTML | Reference IO",
          },
          {
            href: "https://htmldog.com/",
            label: "HTML DOG",
          },
          {
            href: "https://www.w3schools.com/html/default.asp",
            label: "W3 School",
          },
        ],
      },
      {
        sectionId: "youtube-channels",
        sectionLabel: "Youtube Channels",
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

customElements.define("wc-frontend-html-resources", HTMLResources);
export default HTMLResources;
