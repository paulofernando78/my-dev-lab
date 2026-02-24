import styleImports from "@css/styles.css?inline";
import "@/js/components/molecules/PageHeader.js";
import "@/js/components/molecules/Contents.js";
import "@/js/components/molecules/Section.js";
import "@/js/components/atoms/CardCode.js";
import "@/js/components/atoms/Wrapper.js";
import "@/js/components/atoms/Description.js";
import "@/js/components/molecules/Code.js";
import "@/js/components/atoms/Notes.js";
import "@/js/components/molecules/LessonNav.js";
import { setupContents } from "@/js/utils/setupContents.js";
import { renderSections } from "@/js/renderers/renderSection";

const style = /* css */ `

`;

class ModuleTwo extends HTMLElement {
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
        sectionId: "text",
        sectionLabel: "Text and Content Structure",
        sectionAriaLabel: "Text and Content Structure",
        examples: [
          {
            type: "code",
            cardLabel: "Headings",
            language: "html",
            code: `
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
        `,
            preview: () => /* html */`
              <h1>Heading 1</h1>
              <h2>Heading 2</h2>
              <h3>Heading 3</h3>
              <h4>Heading 4</h4>
        `,
          },
          {
            cardLabel: "Paragraph",
            language: "html",
            code: `
<p>This is a paragraph.</p>
        `,
            preview: () => /* html */`
              <p>This is a paragraph.</p>
        `,
          },
          {
            cardLabel: "Textarea",
            language: "html",
            code: `
<textarea>Lorem ipsum...</textarea>
        `,
            preview: () => /* html */`
              <textarea>Lorem ipsum...</textarea>
        `,
            notes: /* html */`
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

      <wc-page-header
        category="HTML"
        page="Module 2"
        unit="Text and Content Structure"
        aria-label="HTML Module 2 Text and Content Structure"
      ></wc-page-header>

      <wc-contents></wc-contents>

      <div class="line-break">
        ${renderSections(sections)}
      </div>

      <wc-lesson-nav></wc-lesson-nav>
    `;

    setupContents(this.shadowRoot, sections);

  }
}

customElements.define("wc-html-module-two", ModuleTwo);
export default ModuleTwo;
