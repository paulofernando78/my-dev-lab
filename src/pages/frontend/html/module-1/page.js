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
  h1, h2, h3, h4 {
    margin-bottom: 0.5rem
  }

  ol {
    padding-left: 1rem;
  }

  ul {
    padding-left: 1rem;
  }

  textarea, input {
    padding: 2px 4px
  }

  .radio, .checkbox {
    display: flex;
    gap: 20px
  }

  @media (width < 575px) {
    .wrapper {
      grid-template-columns: 1fr
    }
  }
`;

class ModuleOne extends HTMLElement {
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
        sectionId: "boilerplate",
        sectionLabel: "Basic HTML",
        sectionAriaLabel: "Basic HTML",
        cardCodes: [
          {
            type: "snippet",
            cardLabel: "Boilerplate",
            image: "/assets/images/html/module-1/basic-structure.png",
            description: /* html */ `
              <p>This is the minimal structure of a valid HTML document.</p>
              <p><mark>The <code>&lt;!doctype html&gt;</code> declaration</mark> tells the browser that the document uses HTML5.</p>
              <p>It must always be the first line of an HTML document to ensure standards mode rendering.</p>
              <p><mark>The <code>&lt;html&gt;</code> element</mark> is the root of the document and contains all other elements. The <code>lang</code> attribute defines the language of the page for accessibility and SEO.</p>
              <p><mark>The <code>&lt;head&gt;</code> contains metadata and configuration</mark> for the page. Content inside the head is not displayed directly in the browser.</p>
              <p><mark>The <code>&lt;body&gt;</code> contains all visible content</mark> of the webpage.</p>
            `,
          },
        ],
      },
    ];

    /* HTML */
    this.shadowRoot.innerHTML = `
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

export default ModuleOne;
customElements.define("wc-frontend-html-module-1", ModuleOne);
