import styleImports from "@css/styles.css?inline";
import "@/js/components/molecules/PageHeader.js";
import "@/js/components/molecules/Contents.js";
import "@/js/components/molecules/Section.js";
import "@/js/components/atoms/Card.js";
import "@/js/components/molecules/Code.js";
import "@/js/components/molecules/Notes.js";
import { setupContents } from "@/js/utils/setupContents.js";

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

  .radio {
    display: flex;
    gap: 20px
  }

  .checkbox {
    display: flex;
    gap: 20px
  }

  @media (width < 575px) {
    .wrapper {
      grid-template-columns: 1fr
    }
  }
`;

class Tags extends HTMLElement {
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
        sectionId: "whats-it",
        sectionLabel: "What’s it?",
        sectionAriaLabel: "What’s it?",
        description: /* html */ `
        <p>...</p>
        `,
      },
      {
        sectionId: "semantic",
        sectionLabel: "Semantic",
        sectionAriaLabel: "...",
        examples: [
          {
            cardLabel: "...",
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
            preview: () => `
          ...
          `,
            notes: "...",
          },
        ],
      },
      {
        sectionId: "text",
        sectionLabel: "Text",
        sectionAriaLabel: "Text",
        examples: [
          {
            cardLabel: "Headings",
            language: "html",
            code: `
          <h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
          `,
            preview: () => `
              <h1>Heading 1</h1>
              <h2>Heading 2</h2>
              <h3>Heading 3</h3>
              <h4>Heading 4</h4>

            `,
            notes: "...",
          },
          {
            cardLabel: "Paragraph",
            language: "html",
            code: `
<p>This is a paragraph.</p>
          `,
            preview: () => `
              <p>This is a paragraph.</p>
            `,
            notes: "...",
          },
          {
            cardLabel: "Text Area",
            language: "html",
            code: `
<textarea>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam voluptatem officia veniam minima ut. Sint laboriosam nemo dolorum neque labore recusandae totam, ea dolorem quae modi ipsum suscipit? Expedita, culpa!</textarea>
          `,
            preview: () => `
              <textarea>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam voluptatem officia veniam minima ut. Sint laboriosam nemo dolorum neque labore recusandae totam, ea dolorem quae modi ipsum suscipit? Expedita, culpa!</textarea>
            `,
            notes: "...",
          },
        ],
      },
      {
        sectionId: "...",
        sectionLabel: "Lists",
        sectionAriaLabel: "...",
        examples: [
          {
            cardLabel: "Ordered List",
            language: "html",
            code: `
<ol type="**">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>
          `,
            preview: () => `
              <ol type="**">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ol>
            `,
            notes: `
** Ordered lists support different numbering types using
<ul>
  <li><code>1</code> — numbers (default)</li>
  <li><code>A</code> — uppercase letters</li>
  <li><code>a</code> — lowercase letters</li>
  <li><code>I</code> — uppercase Roman numerals</li>
  <li><code>i</code> — lowercase Roman numerals</li>
</ul>
              `,
          },
          {
            cardLabel: "Unordered List",
            language: "html",
            code: `
<ul type="**">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
          `,
            preview: () => `
              <ul type="**">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
            `,
            notes: `
** Unordered lists support different bullet styles using
<code>list-style-type</code>:
<ul>
  <li><code>disc</code> — filled circle (default)</li>
  <li><code>circle</code> — hollow circle</li>
  <li><code>square</code> — square bullet</li>
  <li><code>none</code> — no marker</li>
</ul>
            `,
          },
        ],
      },
      {
        sectionId: "links",
        sectionLabel: "Links",
        sectionAriaLabel: "Links",
        examples: [
          {
            cardLabel: "Default",
            language: "html",
            code: `
<a href="https://example.com">Visit example</a>
          `,
            preview: () => `
              <a href="https://example.com">Visit example</a>
            `,
          },
          {
            cardLabel: "New Tab",
            language: "html",
            code: `
<a href="https://example.com" target="_blank">
  Open example
</a>
          `,
            preview: () => `
              <a href="https://example.com" target="_blank">
                Open example
              </a>
            `,
            notes:
              'Links are created using the <a> (anchor) tag. The href attribute defines the destination URL. Use target="_blank" to open links in a new tab.',
          },
        ],
      },
      {
        sectionId: "input-styles",
        sectionLabel: "Input styles",
        sectionAriaLabel: "Input styles",
        examples: [
          {
            cardLabel: "text",
            language: "html",
            code: `
          <input type="text">
          `,
            preview: () => `
          <input type="text">
          `,
          },
          {
            cardLabel: "password",
            language: "html",
            code: `
          <input type="password">
          `,
            preview: () => `
          <input type="password">
          `,
          },
          {
            cardLabel: "search",
            language: "html",
            code: `
          <input type="search">
          `,
            preview: () => `
          <input type="search">
          `,
          },
          {
            cardLabel: "date",
            language: "html",
            code: `
          <input type="date">
          `,
            preview: () => `
          <input type="date">
          `,
          },
          {
            cardLabel: "month",
            language: "html",
            code: `
          <input type="month">
          `,
            preview: () => `
          <input type="month">
          `,
          },
          {
            cardLabel: "week",
            language: "html",
            code: `
          <input type="week">
          `,
            preview: () => `
          <input type="week">
          `,
          },
          {
            cardLabel: "time",
            language: "html",
            code: `
          <input type="time">
          `,
            preview: () => `
          <input type="time">
          `,
          },
          {
            cardLabel: "number",
            language: "html",
            code: `
          <input type="number">
          `,
            preview: () => `
          <input type="number">
          `,
          },
          {
            cardLabel: "email",
            language: "html",
            code: `
          <input type="email">
          `,
            preview: () => `
          <input type="email">
          `,
          },
          {
            cardLabel: "url",
            language: "html",
            code: `
          <input type="url">
          `,
            preview: () => `
          <input type="url">
          `,
          },
          {
            cardLabel: "radio",
            language: "html",
            code: `
          <input type="radio">
          `,
            preview: () => `
          <input type="radio">
          `,
          },
          {
            cardLabel: "checkbox",
            language: "html",
            code: `
          <input type="text">
          `,
            preview: () => `
          <input type="text">
          `,
          },
          {
            cardLabel: "color",
            language: "html",
            code: `
          <input type="color">
          `,
            preview: () => `
          <input type="color">
          `,
          },
          {
            cardLabel: "range",
            language: "html",
            code: `
          <input type="range">
          `,
            preview: () => `
          <input type="range">
          `,
          },
          {
            cardLabel: "file",
            language: "html",
            code: `
          <input type="file">
          `,
            preview: () => `
          <input type="file">
          `,
          },
          {
            cardLabel: "reset",
            language: "html",
            code: `
          <input type="reset">
          `,
            preview: () => `
          <input type="reset">
          `,
          },
          {
            cardLabel: "button",
            language: "html",
            code: `
          <input type="button">
          `,
            preview: () => `
          <input type="button">
          `,
          },
          {
            cardLabel: "submit",
            language: "html",
            code: `
          <input type="submit">
          `,
            preview: () => `
          <input type="submit">
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
    
    <wc-page-header category="HTML" page="Tags" aria-label="html tags"/></wc-page-header>
    <wc-contents></wc-contents>

    <div class="line-break">
        ${sections
          .map(
            (section) => /* html */ `
        <wc-section id="${section.sectionId}" label="${section.sectionLabel}" aria-label="${section.sectionAriaLabel}" class="line-break">
          ${section.description ? `<wc-description>${section.description}</wc-description>` : ""}
          ${
            section.examples
              ? section.examples
                  .map(
                    (example) => /* html */ `
        <wc-card cardLabel="${example.cardLabel}">
          <wc-wrapper>
            <wc-code language="${example.language}">
              ${example.code}
            </wc-code>
            <div>
              ${example.preview()}
            </div>
          </wc-wrapper>
        </wc-card>
        ${example.notes ? `<wc-notes>${example.notes}</wc-notes>` : ""}
        `,
                  )
                  .join("")
              : ""
          }
        </wc-section>
          `,
          )
          .join("")}
      </div> 
    `;

    setupContents(this.shadowRoot, sections);
  }
}

export default Tags;
customElements.define("wc-html-tags", Tags);
