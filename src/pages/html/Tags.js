import styleImports from "@css/styles.css?inline";
import "@/js/components/molecules/PageHeader.js";
import "@/js/components/molecules/Contents.js";
import "@/js/components/molecules/Section.js";
import "@/js/components/atoms/Card.js";
import "@/js/components/atoms/Wrapper.js";
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
      //! Semantic
      {
        sectionId: "semantic",
        sectionLabel: "Semantic",
        sectionAriaLabel: "...",
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
            notes: "...",
          },
        ],
      },
      //! Text
      {
        sectionId: "text",
        sectionLabel: "Text",
        sectionAriaLabel: "Text",
        examples: [
          //! Headings
          {
            cardLabel: "Headings",
            language: "html",
            code: `
          <h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
          `,
            preview: () => /* html */ `
              <h1>Heading 1</h1>
              <h2>Heading 2</h2>
              <h3>Heading 3</h3>
              <h4>Heading 4</h4>

            `,
            notes: "...",
          },
          //! Paragraph
          {
            cardLabel: "Paragraph",
            language: "html",
            code: `
<p>This is a paragraph.</p>
          `,
            preview: () => /* html */ `
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
            preview: () => /* html */ `
              <textarea>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam voluptatem officia veniam minima ut. Sint laboriosam nemo dolorum neque labore recusandae totam, ea dolorem quae modi ipsum suscipit? Expedita, culpa!</textarea>
            `,
            notes: "...",
          },
        ],
      },
      //! Lists
      {
        sectionId: "...",
        sectionLabel: "Lists",
        sectionAriaLabel: "...",
        examples: [
          //! Ordered List
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
            preview: () => /* html */ `
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
          //! Unordered List
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
            preview: () => /* html */ `
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
      //! Links
      {
        sectionId: "links",
        sectionLabel: "Links",
        sectionAriaLabel: "Links",
        examples: [
          //! Default
          {
            cardLabel: "Default",
            language: "html",
            code: `
<a href="https://example.com">Visit example</a>
          `,
            preview: () => /* html */ `
              <a href="https://example.com">Visit example</a>
            `,
          },
          //! New Tab
          {
            cardLabel: "New Tab",
            language: "html",
            code: `
<a href="https://example.com" target="_blank">
  Open example
</a>
          `,
            preview: () => /* html */ `
              <a href="https://example.com" target="_blank">
                Open example
              </a>
            `,
            notes:
              'Links are created using the <a> (anchor) tag. The href attribute defines the destination URL. Use target="_blank" to open links in a new tab.',
          },
        ],
      },
      //! Input Styles
      {
        sectionId: "input-styles",
        sectionLabel: "Input styles",
        sectionAriaLabel: "Input styles",
        examples: [
          //! text
          {
            cardLabel: "text",
            language: "html",
            code: `
          <input type="text">
          `,
            preview: () => /* html */ `
          <input type="text">
          `,
          },
          //! password
          {
            cardLabel: "password",
            language: "html",
            code: `
          <input type="password">
          `,
            preview: () => /* html */ `
          <input type="password" placeholder="•••••">
          `,
          },
          //! search
          {
            cardLabel: "search",
            language: "html",
            code: `
          <input type="search">
          `,
            preview: () => /* html */ `
          <input type="search">
          `,
          },
          //! date
          {
            cardLabel: "date",
            language: "html",
            code: `
          <input type="date">
          `,
            preview: () => /* html */ `
          <input type="date">
          `,
          },
          //! month
          {
            cardLabel: "month",
            language: "html",
            code: `
          <input type="month">
          `,
            preview: () => /* html */ `
          <input type="month">
          `,
          },
          //! week
          {
            cardLabel: "week",
            language: "html",
            code: `
          <input type="week">
          `,
            preview: () => /* html */ `
          <input type="week">
          `,
          },
          //! time
          {
            cardLabel: "time",
            language: "html",
            code: `
          <input type="time">
          `,
            preview: () => /* html */ `
          <input type="time">
          `,
          },
          //! number
          {
            cardLabel: "number",
            language: "html",
            code: `
          <input type="number">
          `,
            preview: () => /* html */ `
          <input type="number" placeholder="12345">
          `,
          },
          //! phone
          {
            cardLabel: "phone",
            language: "html",
            code: `
          <input type="phone">
          `,
            preview: () => /* html */ `
          <label for="phone">Phone No.</label>
          <input type="phone" placeholder="999-9999" id="phone">
          `,
          },
          //! email
          {
            cardLabel: "email",
            language: "html",
            code: `
          <input type="email">
          `,
            preview: () => /* html */ `
          <input type="email" placeholder="john@email.com">
          `,
          },
          //! url
          {
            cardLabel: "url",
            language: "html",
            code: `
          <input type="url">
          `,
            preview: () => /* html */ `
          <input type="url">
          `,
          },
          //! radio
          {
            cardLabel: "radio",
            language: "html",
            code: `
          <input type="radio">
          `,
            preview: () => /* html */ `
              <div class="radio">
                <div class="flex">
                  <input type="radio" name="radio" id="radio-1">
                  <label for="radio-1">Item 1</label>
                </div>
                <div class="flex">
                  <input type="radio" name="radio" id="radio-2">
                  <label for="radio-2">Item 2</label>
                </div>
              </div>  
          `,
          },
          //! checkbox
          {
            cardLabel: "checkbox",
            language: "html",
            code: `
          <input type="text">
          `,
            preview: () => /* html */ `
              <div class="checkbox">
                <div class="flex">
                  <input type="checkbox" id="checkbox-1">
                  <label for="checkbox-1">Item 1</label>
                </div>
                <div class="flex">
                  <input type="checkbox" id="checkbox-2">
                  <label for="checkbox-2">Item 2</label>
                </div>
              </div>  
          `,
          },
          //! color
          {
            cardLabel: "color",
            language: "html",
            code: `
          <input type="color">
          `,
            preview: () => /* html */ `
          <input type="color">
          `,
          },
          //! range
          {
            cardLabel: "range",
            language: "html",
            code: `
          <input type="range">
          `,
            preview: () => /* html */ `
          <input type="range">
          `,
          },
          //! file
          {
            cardLabel: "file",
            language: "html",
            code: `
          <input type="file">
          `,
            preview: () => /* html */ `
          <input type="file">
          `,
          },
          //! reset
          {
            cardLabel: "reset",
            language: "html",
            code: `
          <input type="reset">
          `,
            preview: () => /* html */ `
          <input type="reset">
          `,
          },
          //! button
          {
            cardLabel: "button",
            language: "html",
            code: `
          <input type="button" value="Click me!">
          `,
            preview: () => /* html */ `
          <input type="button" value="Click me!">
          `,
          notes: /* html */`
          <div class=line-break>
            <p><strong>&lt;input type="button"&gt;</strong> is an older way to create buttons in HTML. It was originally designed for simple form actions.</p>
            <p>Unlike the <strong>&lt;button&gt;</strong> element, an input button cannot contain HTML content. Its label must be defined using the <code>value</code> attribute.</p>
            <p>Because of this limitation, modern web development usually prefers the <strong>&lt;button&gt;</strong> element, which allows text, icons, and other HTML elements inside.</p>
            <p>Today, <code>&lt;input type="button"&gt;</code> is mainly used in legacy code or very simple cases.</p>
          </div>
`
          },
          //! submit
          {
            cardLabel: "submit",
            language: "html",
            code: `
          <input type="submit">
          `,
            preview: () => /* html */ `
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
        ${renderSections(sections)}
      </div> 
    `;

    setupContents(this.shadowRoot, sections);
  }
}

export default Tags;
customElements.define("wc-html-tags", Tags);
