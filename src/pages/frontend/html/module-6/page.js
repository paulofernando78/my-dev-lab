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

class ModuleSix extends HTMLElement {
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
        sectionId: "forms",
        sectionLabel: "Forms & Input Types",
        sectionAriaLabel: "Forms and Input Types",
        cardCodes: [
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
          //! textarea
          {
            cardLabel: "textarea",
            language: "html",
            code: `
<textarea>Lorem ipsum...</textarea>
        `,
            preview: () => /* html */ `
              <textarea>Lorem ipsum...</textarea>
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

customElements.define("wc-frontend-html-module-6", ModuleSix);
export default ModuleSix;
