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

class HTMLModuleSeven extends HTMLElement {
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
    sectionId: "accessibility",
    sectionLabel: "Accessibility",
    sectionAriaLabel: "Accessibility",
    description: /* html */ `
      <p>Accessibility (a11y) means building web pages that everyone can use, including people who rely on screen readers, keyboard navigation, or other assistive technologies.</p>
    `,
    subSections: [
      {
        subSectionId: "semantic-html",
        subSectionLabel: "Semantic HTML",
        subSectionAriaLabel: "Semantic HTML",
        description: /* html */ `
          <p>Using the right HTML elements for the right purpose is the foundation of accessibility. Screen readers rely on semantic elements to understand page structure.</p>
        `,
        cardCodes: [
          { cardLabel: "HTML", language: "html", code: /* html */ `
<header>...</header>
<nav>...</nav>
<main>...</main>
<article>...</article>
<footer>...</footer>
          ` }
        ]
      },
      {
        subSectionId: "aria",
        subSectionLabel: "ARIA",
        subSectionAriaLabel: "ARIA",
        description: /* html */ `
          <p>ARIA (Accessible Rich Internet Applications) attributes add extra meaning to elements when semantic HTML alone isn't enough.</p>
          <ul>
            <li><code>aria-label</code> — provides an accessible name for an element</li>
            <li><code>aria-hidden</code> — hides decorative elements from screen readers</li>
            <li><code>aria-expanded</code> — indicates if a collapsible element is open or closed</li>
            <li><code>role</code> — defines the purpose of an element</li>
          </ul>
        `,
        cardCodes: [
          { cardLabel: "HTML", language: "html", code: /* html */ `
<button aria-label="Close menu">X</button>
<img src="decoration.png" aria-hidden="true">
<nav role="navigation" aria-label="Main">
          ` }
        ]
      },
      {
        subSectionId: "alt-text",
        subSectionLabel: "Alt Text",
        subSectionAriaLabel: "Alt Text",
        description: /* html */ `
          <p>The <code>alt</code> attribute on images describes the image for screen readers and displays when the image fails to load.</p>
          <ul>
            <li>Descriptive images should have meaningful alt text</li>
            <li>Decorative images should use <code>alt=""</code> so screen readers skip them</li>
          </ul>
        `,
        cardCodes: [
          { cardLabel: "HTML", language: "html", code: /* html */ `
<!-- descriptive -->
<img src="dog.jpg" alt="Golden retriever playing in the park">

<!-- decorative -->
<img src="divider.png" alt="">
          ` }
        ]
      },
      {
        subSectionId: "keyboard-navigation",
        subSectionLabel: "Keyboard Navigation",
        subSectionAriaLabel: "Keyboard Navigation",
        description: /* html */ `
          <p>All interactive elements should be reachable and usable with a keyboard alone. Native HTML elements like <code>&lt;button&gt;</code>, <code>&lt;a&gt;</code>, and <code>&lt;input&gt;</code> handle this automatically.</p>
          <ul>
            <li><code>tabindex="0"</code> — makes a non-interactive element focusable</li>
            <li><code>tabindex="-1"</code> — removes an element from tab order</li>
          </ul>
        `,
        cardCodes: [
          { cardLabel: "HTML", language: "html", code: /* html */ `
<div tabindex="0" role="button">Click me</div>
          ` }
        ]
      },
    ],
  },
  {
    sectionId: "seo",
    sectionLabel: "SEO",
    sectionAriaLabel: "SEO",
    description: /* html */ `
      <p>SEO (Search Engine Optimization) helps search engines understand and rank your page. Good HTML structure is the foundation of good SEO.</p>
    `,
    subSections: [
      {
        subSectionId: "meta-tags",
        subSectionLabel: "Meta Tags",
        subSectionAriaLabel: "Meta Tags",
        description: /* html */ `
          <p>Meta tags in the <code>&lt;head&gt;</code> provide information to search engines and social media platforms.</p>
        `,
        cardCodes: [
          { cardLabel: "HTML", language: "html", code: /* html */ `
<meta name="description" content="Learn HTML from scratch">
<meta name="keywords" content="HTML, CSS, web development">
<meta property="og:title" content="My Page">
<meta property="og:description" content="Page description">
          ` }
        ]
      },
      {
        subSectionId: "headings-structure",
        subSectionLabel: "Headings Structure",
        subSectionAriaLabel: "Headings Structure",
        description: /* html */ `
          <p>Search engines use heading hierarchy to understand content structure. There should be only one <code>&lt;h1&gt;</code> per page, followed by <code>&lt;h2&gt;</code>, <code>&lt;h3&gt;</code> in order.</p>
        `,
        cardCodes: [
          { cardLabel: "HTML", language: "html", code: /* html */ `
<h1>Page Title</h1>
  <h2>Section</h2>
    <h3>Subsection</h3>
  <h2>Another Section</h2>
          ` }
        ]
      },
      {
        subSectionId: "semantic-seo",
        subSectionLabel: "Semantic & SEO",
        subSectionAriaLabel: "Semantic and SEO",
        description: /* html */ `
          <p>Semantic elements also help SEO by giving search engines context about your content.</p>
          <ul>
            <li><code>&lt;article&gt;</code> — signals standalone content worth indexing</li>
            <li><code>&lt;nav&gt;</code> — identifies navigation links</li>
            <li><code>&lt;main&gt;</code> — marks the primary content of the page</li>
            <li><code>&lt;time datetime="2024-01-01"&gt;</code> — provides machine-readable dates</li>
          </ul>
        `,
        cardCodes: [
          { cardLabel: "HTML", language: "html", code: /* html */ `
<time datetime="2024-01-01">January 1st, 2024</time>
          ` }
        ]
      },
    ],
  },
  {
    sectionId: "resources",
    sectionLabel: "Resources",
    sectionAriaLabel: "Resources",
    links: [
      { href: "https://www.w3.org/WAI/fundamentals/accessibility-intro/", label: "W3C Accessibility Introduction" },
      { href: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA", label: "MDN ARIA Docs" },
      { href: "https://web.dev/learn/accessibility", label: "web.dev Accessibility Course" },
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

customElements.define("wc-frontend-html-module-7", HTMLModuleSeven);
export default HTMLModuleSeven;
