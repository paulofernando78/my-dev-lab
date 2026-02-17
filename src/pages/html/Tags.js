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
          <wc-text-block>
            <p><strong>HTML tags</strong> are the building blocks of a web page. They define the structure and meaning of content, such as headings, paragraphs, links, images, and sections.</p>
            <p>Most tags have an opening tag and a closing tag, and the content goes between them.</p>
          </wc-text-block>
        `,
      },
      //! Semantic
      {
        sectionId: "semantic",
        sectionLabel: "Semantic",
        sectionAriaLabel: "Semantic",
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
          },
          //! Text Area
          {
            cardLabel: "Text Area",
            language: "html",
            code: `
<textarea>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam voluptatem officia veniam minima ut. Sint laboriosam nemo dolorum neque labore recusandae totam, ea dolorem quae modi ipsum suscipit? Expedita, culpa!</textarea>
          `,
            preview: () => /* html */ `
              <textarea>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam voluptatem officia veniam minima ut. Sint laboriosam nemo dolorum neque labore recusandae totam, ea dolorem quae modi ipsum suscipit? Expedita, culpa!</textarea>
            `,
            notes: /* html */ `
              <wc-text-block>
                <p>The <code>&lt;textarea&gt;</code> element is used for multi-line text input, such as comments, messages, or longer descriptions.</p>

                <p>Unlike <code>&lt;input&gt;</code> elements, a textarea does not use a <code>value</code> attribute. The initial text is written between the opening and closing tags.</p>

                <p>Common attributes include:</p>
                <ul>
                  <li><code>rows</code> and <code>cols</code> — define the visible size of the textarea</li>
                  <li><code>placeholder</code> — shows helper text when empty</li>
                  <li><code>maxlength</code> — limits the number of characters</li>
                  <li><code>readonly</code> and <code>disabled</code> — control user interaction</li>
                </ul>

                <p>Textareas are resizable by default in most browsers and can be controlled using CSS.</p>
              </wc-text-block>
            `,
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
            notes: /* html */ `
              <div class="line-break">
                <p><strong>Ordered lists</strong> support different numbering types using the <code>type</code> attribute:</p>
                <ul>
                  <li><code>1</code> — numbers (default)</li>
                  <li><code>A</code> — uppercase letters</li>
                  <li><code>a</code> — lowercase letters</li>
                  <li><code>I</code> — uppercase Roman numerals</li>
                  <li><code>i</code> — lowercase Roman numerals</li>
                </ul>
                <p>The <code>start</code> attribute defines the starting number of the list. By default, ordered lists begin at <code>1</code>.</p>
                <p>Example:</p>
                <pre><code>&lt;ol start="3"&gt;</code></pre>
                <p>This will start the list numbering at 3 instead of 1.</p>
              </div>
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
            notes: /* html */ `
              <p>** Unordered lists support different bullet styles using:</p>
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
            notes: /* html */ `
    <wc-text-block>
      <p>Links are created using the <code>&lt;a&gt;</code> (anchor) tag. The <code>href</code> attribute defines the destination URL.</p>

      <p>Using <code>target="_blank"</code> opens the link in a new browser tab.</p>

      <p>When opening links in a new tab, it is recommended to also use <code>rel="noopener noreferrer"</code> for security and performance reasons.</p>
    </wc-text-block>
  `,
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
            notes: /* html */ `
          <div class=line-break>
            <p><strong>&lt;input type="button"&gt;</strong> is an older way to create buttons in HTML. It was originally designed for simple form actions.</p>
            <p>Unlike the <strong>&lt;button&gt;</strong> element, an input button cannot contain HTML content. Its label must be defined using the <code>value</code> attribute.</p>
            <p>Because of this limitation, modern web development usually prefers the <strong>&lt;button&gt;</strong> element, which allows text, icons, and other HTML elements inside.</p>
            <p>Today, <code>&lt;input type="button"&gt;</code> is mainly used in legacy code or very simple cases.</p>
          </div>
`,
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
