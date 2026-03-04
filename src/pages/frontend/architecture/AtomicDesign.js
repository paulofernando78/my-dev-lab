import styleImports from "@css/styles.css?inline";
import "@/js/components/molecules/PageHeader.js";
import "@/js/components/molecules/Contents.js";
import "@/js/components/molecules/Section.js";
import "@/js/components/atoms/Card.js";
import "@/js/components/atoms/Wrapper.js";

import "@/js/components/molecules/Code.js";

import { setupContents } from "@/js/utils/setupContents.js";
import { renderSections } from "@/js/renderers/renderSection";

const style = /* css */ `
  .organisms-header {
    background-color: #EEEEEE;
    padding: 5px
  }
  
  .organisms-nav {
    display: flex;
    gap:12px;
  }

  .template-header, .template-footer {
    background:#ddd; height:40px;
    display: grid;
  }

  .template-main {
    display:grid; grid-template-columns:2fr 1fr;
    gap:8px;
  }

  .template-section, .template-aside {
    background:#eee;
    height:80px;
  }

  .template-header, .template-section, .template-aside, .template-footer {
    display: grid;
    place-items: center;
    border-radius: 5px;
    border: 2px solid var(--slate-4)
  }

  .template-header, .template-section, .template-aside {
    margin-bottom: 8px;
  }
 
`;

class AtomicDesign extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const sections = [
      //! What’s it?
      {
        sectionId: "whats-it",
        sectionLabel: "What’s it?",
        sectionAriaLabel: "What is Atomic Design?",
        description: /* html */ `
            <p><strong>Atomic Design</strong> is a methodology for building user interfaces by breaking them into small, reusable components.</p>

            <p>Instead of designing entire pages at once, interfaces are built from small pieces that combine together to form larger structures.</p>
        `,
      },
      //! Why use it?
      {
        sectionId: "why",
        sectionLabel: "Why use it?",
        sectionAriaLabel: "Why use Atomic Design",
        description: /* html */ `
            <p>Atomic Design helps create consistent interfaces, improves reusability, and makes large applications easier to maintain.</p>

            <p>By separating UI into clear layers, teams can scale design systems more easily.</p>
        `,
      },
      //! Atoms
      {
        sectionId: "atoms",
        sectionLabel: "Atoms",
        sectionAriaLabel: "Atoms in Atomic Design",
        description: /* html */ `
            <p>Atoms are the smallest building blocks of an interface. They cannot be broken down further without losing meaning.</p>

            <p>Examples include buttons, inputs, labels, and icons.</p>
        `,
        cardCodes: [
          {
            cardLabel: "button",
            language: "html",
            code: `
<button>Click me!</button>
            `,
            preview: () => /* html */ `
              <button>Click me!</button>
            `,
          },
          {
            cardLabel: "input",
            language: "html",
            code: `
              <input type="text" placeholder="Write something here.."/>
            `,
            preview: () => /* html */ `
              <input type="text" placeholder="Write something here.."/>
            `,
          },
        ],
      },
      //! Molecules
      {
        sectionId: "molecules",
        sectionLabel: "Molecules",
        sectionAriaLabel: "Molecules in Atomic Design",
        description: /* html */ `
            <p>Molecules are groups of atoms working together as a single functional unit.</p>

            <p>For example, a search bar made of an input and a button.</p>
        `,
        cardCodes: [
          {
            cardLabel: "Search bar",
            language: "html",
            code: `
<div>
  <input type="text" placeholder="Search..." />
  <button>Search</button>
</div>
            `,
            preview: () => /* html */ `
              <div style="flex">
                <input type="text" placeholder="Search..." />
                <button>Search</button>
              </div>
            `,
          },
        ],
      },
      //! Organisms
      {
        sectionId: "organisms",
        sectionLabel: "Organisms",
        sectionAriaLabel: "Organisms in Atomic Design",
        description: /* html */ `
            <p>Organisms are complex components made from molecules and atoms combined together.</p>

            <p>Examples include headers, navigation bars, or cards with multiple elements.</p>
        `,
        cardCodes: [
          {
            cardLabel: "Header",
            language: "html",
            code: `
<header>
  <h1>Logo</h1>
  <nav>
    <a href="#">Home</a>
    <a href="#">About</a>
  </nav>
</header>
            `,
            preview: () => /* html */ `
              <header class="organisms-header">
                <strong>Logo</strong>
                <nav style="organisms-nav">
                  <a href="#">Home</a>
                  <a href="#">About</a>
                </nav>
              </header>
            `,
          },
        ],
      },
      //! Templates
      {
        sectionId: "templates",
        sectionLabel: "Templates",
        sectionAriaLabel: "Templates in Atomic Design",
        description: /* html */ `
            <p>Templates define page structure and layout without real content.</p>

            <p>They focus on placement and composition rather than final data.</p>
        `,
        cardCodes: [
          {
            cardLabel: "Page template",
            language: "html",
            code: `
<header></header>
<main>
  <section></section>
  <aside></aside>
</main>
<footer></footer>
            `,
            preview: () => /* html */ `
              <div>
                <div class="template-header">Header</div>
                <div class="template-main">
                  <div class="template-section">Section</div>
                  <div class="template-aside">Aside</div>
                </div>
                <div class="template-footer">Footer</div>
              </div>
            `,
          },
        ],
      },
      //! Pages
      {
        sectionId: "pages",
        sectionLabel: "Pages",
        sectionAriaLabel: "Pages in Atomic Design",
        description: /* html */ `
            <p>Pages are specific instances of templates filled with real content.</p>

            <p>This is where the final UI appears to users.</p>
        `,
      },
    ];

    this.shadowRoot.innerHTML = /* HTML */ `
      <style>
        ${styleImports}
        ${style}
      </style>

      <wc-page-header
        category="Architecture"
        page="Atomic Design"
        aria-label="Atomic Design"
      ></wc-page-header>

      <wc-contents></wc-contents>

      <div class="line-break">${renderSections(sections)}</div>
    `;

    setupContents(this.shadowRoot, sections);
  }
}

customElements.define("wc-atomic-design", AtomicDesign);
export default AtomicDesign;
