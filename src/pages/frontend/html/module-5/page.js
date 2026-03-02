import styleImports from "@css/styles.css?inline";
import "@/js/components/molecules/PageHeader.js";
import "@/js/components/molecules/Contents.js";
import "@/js/components/molecules/Section.js";
import "@/js/components/atoms/CardCode.js";
import "@/js/components/atoms/Wrapper.js";

import "@/js/components/molecules/Code.js";

import "@/js/components/molecules/LessonNav.js";
import { setupContents } from "@/js/utils/setupContents.js";
import { renderSections } from "@/js/renderers/renderSection";

const style = /* css */ `

`;

class ModuleFive extends HTMLElement {
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
        sectionId: "semantic-layout",
        sectionLabel: "Semantic Layout",
        sectionAriaLabel: "Semantic Layout",
        description: /* html */ `
          <wc-text-block>
            <p><strong>Semantic HTML tags</strong> describe the meaning and purpose of content, not just its appearance. They help browsers, search engines, and assistive technologies understand the structure of a page.</p>

            <p>Instead of using generic containers like <code>&lt;div&gt;</code>, semantic elements clearly define sections such as headers, main content, articles, sidebars, and footers.</p>
          </wc-text-block> 
        `,
        examples: [
          {
            language: "html",
            code: `
<header></header>
<main></main>
<section></section>
<article></article>
<aside></aside>
<footer></footer>
<div></div>
          `,
            preview: () => /* html */ `
              <img src="/assets/images/semantic.jpg"/>
          `,
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

customElements.define("wc-frontend-html-module-5", ModuleFive);
export default ModuleFive;
