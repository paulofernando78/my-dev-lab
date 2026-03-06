import styleImports from "@css/styles.css?inline";
import "@/js/components/molecules/PageHeader.js";
import "@/js/components/molecules/Contents.js";
import "@/js/components/molecules/Section.js";
import "@/js/components/molecules/CardIcon.js";
import "@/js/components/molecules/SubSection.js";
import "@/js/components/atoms/Wrapper.js";
import "@/js/components/atoms/Image.js";
import "@/js/components/atoms/CardCode.js";
import "@/js/components/molecules/Code.js";
import "@/js/components/molecules/Demo.js";
import "@/js/components/organisms/Sandbox.js";
import "@/js/components/molecules/Links.js";
import "@/js/components/molecules/LessonNav.js";

import { setupContents } from "@/js/utils/setupContents.js";
import { renderSections } from "@/js/renderers/renderSection";

class Boilerplate extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const sections = [
      {
        sectionId: "headings",
        sectionLabel: "Headings",
        sectionAriaLabel: "Headings",
        description: /* html */ `
          <p>Headings define the structure and hierarchy of a page.</p>
          <p>They range from <code>&lt;h1&gt;</code> (most important) to <code>&lt;h6&gt;</code> (least important).</p>
          <p>Search engines and assistive technologies use headings to understand the structure of the document.</p>
        `,
        sampleAnswer: /* html */ `
          <wc-html-headings></wc-html-headings>
        `,
        notes: /* html */ `
          <p>Use headings to organize content logically.</p>
        `,
        imgs: [
          {
            imgSrc: "/assets/images/headings.jpg",
            alt: "Headings example",
          },
        ],
        imgSrc: "/assets/images/headings.jpg",
        alt: "Headings example",

        subSections: [
          {
            subSectionId: "headings-sub",
            subSectionLabel: "Headings Subsection",
            subSectionAriaLabel: "Headings Subsection",
            description: /* html */ `
              <p>Headings help users navigate your content.</p>
            `,
            notes: /* html */ `
              <p>Don't skip heading levels.</p>
            `,
            cardCodes: [
              {
                cardLabel: "HTML",
                language: "html",
                code: /* html */ `
                  <h1>Main Title</h1>
                  <h2>Sub Title</h2>
                `,
              },
            ],
            preview: /* html */ `
              <wc-demo></wc-demo>
            `,
            sandbox: [
              {
                html: true,
                css: true,
                js: false,
              },
            ],
          },
        ],
      },
      {
        sectionId: "paragraph",
        sectionLabel: "Paragraph",
        sectionAriaLabel: "Paragraph",
        description: /* html */ `
          <p>The <code>&lt;p&gt;</code> element represents a paragraph of text.</p>
          <p>Browsers automatically add spacing before and after paragraphs to improve readability.</p>
          <p>Paragraphs are used to group related sentences into blocks of content.</p>
        `,
        sampleAnswer: /* html */ `
          <p>This is a paragraph</p>
        `,
        notes: /* html */ `
          <p>Use paragraphs to separate blocks of text.</p>
        `,
        imgs: [
          {
            imgSrc: "/assets/images/paragraph.jpg",
            alt: "Paragraph example",
          },
        ],
        imgSrc: "/assets/images/paragraph.jpg",
        alt: "Paragraph example",

        subSections: [
          {
            subSectionId: "paragraph-sub",
            subSectionLabel: "Paragraph Subsection",
            subSectionAriaLabel: "Paragraph Subsection",
            description: /* html */ `
              <p>The <code>&lt;p&gt;</code> element represents a paragraph of text.</p>
              <p>Browsers automatically add spacing before and after paragraphs to improve readability.</p>
              <p>Paragraphs are used to group related sentences into blocks of content.</p>
            `,
            notes: /* html */ `
              <p>Paragraphs improve readability.</p>
            `,
            cardCodes: [
              {
                cardLabel: "HTML",
                language: "html",
                code: /* html */ `
                  <p>This is a paragraph</p>
                `,
              },
            ],
            preview: /* html */ `
              <wc-demo></wc-demo>
            `,
            sandbox: [
              {
                html: true,
                css: true,
                js: false,
              },
            ],
          },
        ],
      },
    ];

    this.innerHTML = /* HTML */ `
      <style>
        ${styleImports}
        ${style}
      </style>
      <wc-page-header></wc-page-header>
      <wc-contents></wc-contents>
      <div class="line-break">${renderSections(sections)}</div>
      <wc-lesson-nav></wc-lesson-nav>
    `;

    setupContents(this, sections);
  }
}

customElements.define("wc-boilerplate", Boilerplate);
export default Boilerplate;
