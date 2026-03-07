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
import "@/js/components/organisms/Sandbox.js";
import "@/js/components/molecules/Links.js";
import "@/js/components/molecules/LessonNav.js";

import { setupContents } from "@/js/utils/setupContents.js";
import { renderSections } from "@/js/renderers/renderSection.js";

const style = /* css */ `

`;

class ModuleFour extends HTMLElement {
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
        sectionId: "why",
        sectionLabel: "Why is it important?",
        sectionAriaLabel: "Why is it important?",
        description: /* html */ `
          <p><strong>Semantic HTML tags</strong> describe the meaning and purpose of content, not just its appearance. They help browsers, search engines, and assistive technologies understand the structure of a page.</p>

          <p>For example, using <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, and <code>&lt;footer&gt;</code> clearly communicates the role of each part of the page.</p>
          <p>This improves:</p>

          <ul>
            <li><strong>Accessibility</strong> – Screen readers can navigate the page structure more easily.</li>
            <li><strong>SEO</strong> – Search engines better understand the content hierarchy.</li>
            <li><strong>Maintainability</strong> – Developers can read and understand the layout faster.</li>
          </ul>

        <p>Using semantic elements instead of generic containers like <code>&lt;div&gt;</code> makes your HTML more meaningful and future-proof.</p>
        `,
        imgs: [
          {
            imgSrc: "/assets/images/semantic.jpg",
            alt: "Headings example",
          },
        ],
      },
      {
        sectionId: "tags",
        sectionLabel: "Tags",
        sectionAriaLabel: "Tags",
        description: /* html */ `
          <p>HTML provides several semantic elements that define the structure of a webpage. These elements describe the role of each part of the layout instead of just grouping content.</p>

          <p>Common semantic layout elements include:</p>

          <ul>
            <li><code>&lt;header&gt;</code></li>
            <li><code>&lt;nav&gt;</code></li>
            <li><code>&lt;main&gt;</code></li>
            <li><code>&lt;section&gt;</code></li>
            <li><code>&lt;article&gt;</code></li>
            <li><code>&lt;aside&gt;</code></li>
            <li><code>&lt;footer&gt;</code></li>
          </ul>

          <p>Each element communicates the purpose of its content to browsers, developers, and assistive technologies.</p>
        `,
        subSections: [
          {
            subSectionId: "header",
            subSectionLabel: "Header",
            subSectionAriaLabel: "Header",
            description: /* html */ `
              <p>The <code>&lt;header&gt;</code> element represents introductory content for a page or section.</p>

              <p>It typically contains:</p>

              <ul>
              <li>Logo or site title</li>
              <li>Navigation menus</li>
              <li>Search bars</li>
              <li>Introductory headings</li>
              </ul>

              <p>A page may contain multiple headers, for example inside articles or sections.</p>
            `,
          },
          {
            subSectionId: "navigation",
            subSectionLabel: "Navigation",
            subSectionAriaLabel: "Navigation",
            description: /* html */ `
              <p>The <code>&lt;nav&gt;</code> element defines a section that contains navigation links.</p>

              <p>It is commonly used for:</p>

              <ul>
              <li>Main site navigation</li>
              <li>Sidebar navigation</li>
              <li>Table of contents</li>
              </ul>

              <p>Not every group of links needs to be inside a <code>&lt;nav&gt;</code>. Only major navigation blocks should use it.</p>
            `,
          },
          {
            subSectionId: "section",
            subSectionLabel: "Section",
            subSectionAriaLabel: "Section",
            description: /* html */ `
              <p>The <code>&lt;section&gt;</code> element represents a thematic grouping of content.</p>

              <p>Sections usually include a heading and group related information together.</p>

              <p>For example:</p>

              <ul>
              <li>Chapters of an article</li>
              <li>Different topics on a page</li>
              <li>Feature blocks</li>
              </ul>
            `,
          },
          {
            subSectionId: "article",
            subSectionLabel: "Article",
            subSectionAriaLabel: "Article",
            description: /* html */ `
              <p>The <code>&lt;article&gt;</code> element represents independent, self-contained content.</p>

              <p>Examples include:</p>

              <ul>
              <li>Blog posts</li>
              <li>News articles</li>
              <li>Forum posts</li>
              <li>Product cards</li>
              </ul>

              <p>The key idea is that the content could be reused or distributed independently.</p>
            `,
          },
          {
            subSectionId: "aside",
            subSectionLabel: "Aside",
            subSectionAriaLabel: "Aside",
            description: /* html */ `
              <p>The <code>&lt;aside&gt;</code> element contains content that is related to the main content but not essential to it.</p>

              <p>Common examples include:</p>

              <ul>
              <li>Sidebars</li>
              <li>Related links</li>
              <li>Advertisements</li>
              <li>Additional information</li>
              </ul>
            `,
          },
          {
            subSectionId: "footer",
            subSectionLabel: "Footer",
            subSectionAriaLabel: "Footer",
            description: /* html */ `
              <p>The <code>&lt;footer&gt;</code> element represents the footer for a page or section.</p>

              <p>It commonly includes:</p>

              <ul>
              <li>Copyright information</li>
              <li>Contact links</li>
              <li>Privacy policies</li>
              <li>Social media links</li>
              </ul>

              <p>A page may contain multiple footers, for example inside articles or sections.</p>
            `,
          },
        ],
      },
      {
        sectionId: "layouts",
        sectionLabel: "Layouts",
        sectionAriaLabel: "Layouts",
        description: /* html */ `
          <p>...</p>
        `,
        imgs: [
          {
            imgSrc: "/assets/images/semantic.jpg",
            alt: "Headings example",
          },
        ],
        subSections: [
          {
            subSectionId: "...",
            subSectionLabel: "...",
            subSectionAriaLabel: "...",
            description: /* html */ `
              <p>Semantic layouts help both humans and machines understand how the page is organized.</p>
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

customElements.define("wc-frontend-html-module-4", ModuleFour);
export default ModuleFour;
