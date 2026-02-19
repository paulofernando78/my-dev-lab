import styleImports from "@css/styles.css?inline";
import "@/js/components/molecules/PageHeader.js";
import "@/js/components/molecules/Contents.js";
import "@/js/components/molecules/Section.js";
import "@/js/components/atoms/Card.js";
import "@/js/components/atoms/Wrapper.js";
import "@/js/components/atoms/TextBlock.js";
import "@/js/components/molecules/Code.js";
import "@/js/components/molecules/Notes.js";
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
    sectionId: "doctype",
    sectionLabel: "DOCTYPE Declaration",
    sectionAriaLabel: "DOCTYPE Declaration",
    description: /* html */ `
      <wc-text-block>
        <p>The <code>&lt;!DOCTYPE html&gt;</code> declaration tells the browser that the document uses HTML5.</p>
        <p>It must always be the first line of an HTML document to ensure standards mode rendering.</p>
      </wc-text-block>
    `,
    examples: [
      {
        language: "html",
        code: `
<!DOCTYPE html>
        `,
        preview: () => `
<code>&lt;!DOCTYPE html&gt;</code>
        `,
      },
    ],
  },
  {
    sectionId: "html-root",
    sectionLabel: "The HTML Root Element",
    sectionAriaLabel: "The HTML Root Element",
    description: /* html */ `
      <wc-text-block>
        <p>The <code>&lt;html&gt;</code> element is the root of the document and contains all other elements.</p>
        <p>The <code>lang</code> attribute defines the language of the page for accessibility and SEO.</p>
      </wc-text-block>
    `,
    examples: [
      {
        language: "html",
        code: `
<html lang="en"></html>
        `,
        preview: () => `
<code>&lt;html lang="en"&gt;&lt;/html&gt;</code>
        `,
      },
    ],
  },
  {
    sectionId: "head",
    sectionLabel: "The Head Element",
    sectionAriaLabel: "The Head Element",
    description: /* html */ `
      <wc-text-block>
        <p>The <code>&lt;head&gt;</code> contains metadata and configuration for the page.</p>
        <p>Content inside the head is not displayed directly in the browser.</p>
      </wc-text-block>
    `,
    examples: [
      {
        language: "html",
        code: `
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
        `,
        preview: () => `
<code>&lt;head&gt;...&lt;/head&gt;</code>
        `,
      },
    ],
  },
  {
    sectionId: "body",
    sectionLabel: "The Body Element",
    sectionAriaLabel: "The Body Element",
    description: /* html */ `
      <wc-text-block>
        <p>The <code>&lt;body&gt;</code> contains all visible content of the webpage.</p>
      </wc-text-block>
    `,
    examples: [
      {
        language: "html",
        code: `
<body>
  <h1>Hello World</h1>
</body>
        `,
        preview: () => `
<h1>Hello World</h1>
        `,
      },
    ],
  },
  {
    sectionId: "boilerplate",
    sectionLabel: "Basic HTML Boilerplate",
    sectionAriaLabel: "Basic HTML Boilerplate",
    description: /* html */ `
      <wc-text-block>
        <p>This is the minimal structure of a valid HTML document.</p>
      </wc-text-block>
    `,
    examples: [
      {
        language: "html",
        code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

</body>
</html>
        `,
        preview: () => `
<code>HTML Document Structure</code>
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
    
    <wc-page-header category="HTML" page="Module 1 • Document Foundations" aria-label="HTML Module 1 Document Foundations"/></wc-page-header>
    <wc-contents></wc-contents>

    <div class="line-break">
        ${renderSections(sections)}
      </div> 
    `;

    setupContents(this.shadowRoot, sections);
  }
}

export default ModuleOne;
customElements.define("wc-html-module-one", ModuleOne);
