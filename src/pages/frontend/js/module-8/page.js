import styleImports from "@css/styles.css?inline";
import "@/js/components/molecules/PageHeader.js";
import "@/js/components/molecules/Contents.js";
import "@/js/components/molecules/Section.js";
import "@/js/components/molecules/CardIcon.js";
import "@/js/components/molecules/SubSection.js";
import "@/js/components/atoms/Wrapper.js";
import "@/js/components/atoms/Image.js";
import "@/js/components/molecules/Topic.js";
import "@/js/components/atoms/CardCode.js";
import "@/js/components/molecules/Code.js";
import "@/js/components/molecules/Demo.js";
import "@/js/components/organisms/Sandbox.js";
import "@/js/components/molecules/Links.js";
import "@/js/components/molecules/LessonNav.js";

import { setupContents } from "@/js/utils/setupContents.js";
import { renderSections } from "@/js/renderers/renderSection.js";

const style = /* css */ `
  .box {
    background-color: blue;
    width: 100px;
    height: 100px
  }
`;

class ModuleEight extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const sections = [
      //! 8.1 Window Object
      {
        sectionId: "8-1-window-object",
        sectionLabel: "8.1 Window Object",
        sectionAriaLabel: "8.1 Window Object",
        description: /* html */ `
          <p>
          The <code>window</code> object represents the browser window or tab in which a web page is loaded. It is the global object in the browser environment, giving scripts access to browser APIs such as <code>document</code>, <code>location</code>, <code>history</code>, and <code>screen</code>, as well as information about the viewport — its width, height, and scroll position.
          </p>
          <p>Because it is the global object, its properties and methods can be accessed without explicitly writing <code>window</code>. For example, <code>window.innerWidth</code> and <code>innerWidth</code> refer to the same value.</p>
        `,
        subSections: [
          //! Window Properties
          {
            subSectionId: "window-properties",
            subSectionLabel: "Window Properties",
            subSectionAriaLabel: "Window Properties",
            description: /* html */ `
                <p>
                  Window properties provide information about the current browser window and the user's viewport. 
                  They allow you to access values such as the width and height of the visible area of the page 
                  and the current scroll position.
                  </p>

                  <p>
                  These properties are commonly used to build responsive layouts, detect viewport changes, 
                  and react to user scrolling.
                </p>
              `,
            //! Topic
            topics: [
              //! window
              {
                topicId: "window",
                topicLabel: "window",
                topicAriaLabel: "",
                description: /* html */ `
  <p>
    The <code>window</code> object represents the browser window or tab where the current web page is loaded.
    It is the <strong>global object</strong> in the browser environment, which means that many variables,
    functions, and browser APIs are attached to it.
  </p>

  <p>
    Because <code>window</code> is the global object, its properties and methods can usually be accessed
    without writing <code>window</code>. For example:
    <code>window.innerWidth</code> and <code>innerWidth</code> refer to the same value.
  </p>

  <p>
    The <code>window</code> object provides access to important browser features such as:
  </p>

  <ul>
    <li><code>document</code> – the DOM of the page</li>
    <li><code>location</code> – information about the current URL</li>
    <li><code>history</code> – the browser session history</li>
    <li><code>innerWidth</code> and <code>innerHeight</code> – the viewport size</li>
    <li><code>scrollX</code> and <code>scrollY</code> – the current scroll position</li>
  </ul>

  <p>
    In practice, developers rarely interact with the <code>window</code> object directly,
    but many commonly used APIs are actually properties of <code>window</code>.
  </p>
`,
                cardCodes: [
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `
console.log(window);
                `,
                  },
                ],
                sandbox: [
                  {
                    js: true,
                    console: true,
                  },
                ],
              },
              //! window.innerWidth & innerHeight
              {
                topicId: "window-innerWidth",
                topicLabel: "window.innerWidth",
                topicAriaLabel: "",
                description: /* html */ `
                  <p><code>window.innerWidth</code> returns the width of the browser viewport in pixels.</p>
                  <p><code>window.innerHeight</code> returns the height of the browser viewport in pixels.</p>
                `,
                cardCodes: [
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `
console.log("Width:", window.innerWidth);
console.log("Height:", window.innerHeight);
                `,
                  },
                ],
                sandbox: [
                  {
                    js: true,
                    console: true
                  },
                ],
              },
              //! window.scrollX & scrollY
              {
                topicId: "window-scroll-x-scroll-y",
                topicLabel: "window.scrollX & scrollY",
                topicAriaLabel: "",
                description: /* html */ `
  <p>
    <code>window.scrollX</code> and <code>window.scrollY</code> return the number of pixels that the document
    has been scrolled horizontally and vertically.
  </p>

  <p>
    <code>scrollX</code> represents the horizontal scroll position (left ↔ right),
    while <code>scrollY</code> represents the vertical scroll position (top ↕ bottom).
  </p>

  <p>
    These properties are commonly used when reacting to user scrolling, such as
    implementing sticky elements, scroll animations, or detecting how far the user
    has moved down the page.
  </p>
`,
                cardCodes: [
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `
window.addEventListener("scroll", () => {
  console.log("X:", window.scrollX)
  console.log("Y:", window.scrollY)
})
                `,
                  },
                ],
                sandbox: [
                  {
                    html: true,
                    css: true,
                    js: true,
                    console: true,
                  },
                ],
              },
            ],
          },
          //! Window Methods
          {
            subSectionId: "window-methods",
            subSectionLabel: "Window Methods",
            subSectionAriaLabel: "Window Methods",
            description: /* html */ `
                ...
              `,
            topics: [
              //! window.alert()
              {
                topicId: "window-alert",
                topicLabel: "window.alert()",
                topicAriaLabel: "",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `

                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    js: true,
                  },
                ],
              },
              //! window.setTimeout()
              {
                topicId: "window-setTimeout()",
                topicLabel: "window.setTimeout( )",
                topicAriaLabel: "",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `
                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    js: true,
                  },
                ],
              },
              //! window.setInterval()
              {
                topicId: "window-setInterval()",
                topicLabel: "window.setInterval( )",
                topicAriaLabel: "",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `
                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    js: true,
                  },
                ],
              },
              //! window.open()
              {
                topicId: "window-open()",
                topicLabel: "window.open( )",
                topicAriaLabel: "",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `
                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    js: true,
                  },
                ],
              },
              //! window.scrollTo()
              {
                topicId: "window-scrollTo()",
                topicLabel: "window.scrollTo( )",
                topicAriaLabel: "",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `
                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    js: true,
                  },
                ],
              },
              //! window.scrollBy()
              {
                topicId: "window-scrollBy()",
                topicLabel: "window.scrollBy( )",
                topicAriaLabel: "",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `
                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    js: true,
                  },
                ],
              },
            ],
          },
        ],
      },
      //! History API
      {
        sectionId: "history-api",
        sectionLabel: "History API",
        sectionAriaLabel: "History API",
        description: /* html */ `
          <p>...</p>
        `,
        subSections: [
          //! History Properties
          {
            subSectionId: "history-properties",
            subSectionLabel: "History Properties",
            subSectionAriaLabel: "History Properties",
            description: /* html */ `
                ...
              `,
            topics: [
              //! history.length
              {
                topicId: "history-length",
                topicLabel: "history.length",
                topicAriaLabel: "",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `

                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    js: true,
                  },
                ],
              },
              //! history.state
              {
                topicId: "history-state",
                topicLabel: "history.state",
                topicAriaLabel: "",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `
                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    js: true,
                  },
                ],
              },
            ],
          },
          //! Navigation Methods
          {
            subSectionId: "navigation-methods",
            subSectionLabel: "Navigation Methods",
            subSectionAriaLabel: "Navigation Methods",
            description: /* html */ `
                ...
              `,
            topics: [
              //! history.back()
              {
                topicId: "history-back()",
                topicLabel: "history.back()",
                topicAriaLabel: "",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `

                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    js: true,
                  },
                ],
              },
              //! history.forward()
              {
                topicId: "history-forward()",
                topicLabel: "history.forward()",
                topicAriaLabel: "",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `
                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    js: true,
                  },
                ],
              },
              //! history.go()
              {
                topicId: "history-go()",
                topicLabel: "history.go()",
                topicAriaLabel: "",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `
                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    js: true,
                  },
                ],
              },
            ],
          },
          //! pushState / replaceState
          {
            subSectionId: "pushstate-replacestate",
            subSectionLabel: "pushState / replaceState",
            subSectionAriaLabel: "pushState / replaceState",
            description: /* html */ `
                ...
              `,
            topics: [
              //! history.pushState()
              {
                topicId: "history-pushState()",
                topicLabel: "history.pushState()",
                topicAriaLabel: "",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `

                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    js: true,
                  },
                ],
              },
              //! history.replaceState()
              {
                topicId: "history-replaceState()",
                topicLabel: "history.replaceState()",
                topicAriaLabel: "",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `
                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    js: true,
                  },
                ],
              },
              //! popstate event
              {
                topicId: "popstate-event",
                topicLabel: "popstate event",
                topicAriaLabel: "",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `
                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    js: true,
                  },
                ],
              },
            ],
          },
        ],
      },
      //! Location Object
      {
        sectionId: "location-object",
        sectionLabel: "Location Object",
        sectionAriaLabel: "Location Object",
        description: /* html */ `
          <p>...</p>
        `,
        subSections: [
          //! Location Properties
          {
            subSectionId: "location-properties",
            subSectionLabel: "Location Properties",
            subSectionAriaLabel: "Location Properties",
            description: /* html */ `
                ...
              `,
            topics: [
              //! location.href
              {
                topicId: "location-href",
                topicLabel: "location.href",
                topicAriaLabel: "",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `

                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    js: true,
                  },
                ],
              },
              //! location.pathname
              {
                topicId: "location-pathname",
                topicLabel: "location.pathname",
                topicAriaLabel: "",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `
                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    js: true,
                  },
                ],
              },
              //! location.search
              {
                topicId: "location-search",
                topicLabel: "location.search",
                topicAriaLabel: "",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `
                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    js: true,
                  },
                ],
              },
              //! location.hash
              {
                topicId: "location-hash",
                topicLabel: "location.hash",
                topicAriaLabel: "",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `
                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    js: true,
                  },
                ],
              },
            ],
          },
          //! Location Methods
          {
            subSectionId: "location-methods",
            subSectionLabel: "Location Methods",
            subSectionAriaLabel: "Location Methods",
            description: /* html */ `
                ...
              `,
            topics: [
              //! location.reload()
              {
                topicId: "location-reload()",
                topicLabel: "location.reload()",
                topicAriaLabel: "",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `

                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    js: true,
                  },
                ],
              },
              //! location.assign()
              {
                topicId: "location-assign()",
                topicLabel: "location.assign()",
                topicAriaLabel: "",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `
                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    js: true,
                  },
                ],
              },
              //! location.replace()
              {
                topicId: "location-replace()",
                topicLabel: "location.replace()",
                topicAriaLabel: "",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `
                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    js: true,
                  },
                ],
              },
            ],
          },
        ],
      },
      //! ContentEditable
      {
        sectionId: "content-editable",
        sectionLabel: "ContentEditable",
        sectionAriaLabel: "ContentEditable",
        description: /* html */ `
          <p>...</p>
        `,
        subSections: [
          //! Using contenteditable
          {
            subSectionId: "using-contenteditable",
            subSectionLabel: "Using contenteditable",
            subSectionAriaLabel: "Using contenteditable",
            description: /* html */ `
                ...
              `,
            topics: [
              //! contenteditable attribute
              {
                topicId: "contenteditable-attribute",
                topicLabel: "contenteditable attribute",
                topicAriaLabel: "",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "HTML",
                    language: "html",
                    code: /* js */ `
<div contenteditable="true">Edit me</div>
                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    html: true,
                  },
                ],
              },
              //! element.contentEditable
              {
                topicId: "element-contentEditable",
                topicLabel: "element.contentEditable",
                topicAriaLabel: "",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `
                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    js: true,
                  },
                ],
              },
            ],
          },
          //! Reading Edited Content
          {
            subSectionId: "reading-edited-content",
            subSectionLabel: "Reading Edited Content",
            subSectionAriaLabel: "Reading Edited Content",
            description: /* html */ `
                ...
              `,
            topics: [
              //! Topic
              {
                topicId: "topic",
                topicLabel: "Topic",
                topicAriaLabel: "",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `

                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    js: true,
                  },
                ],
              },
              //! Topic
              {
                topicId: "topic",
                topicLabel: "Topic",
                topicAriaLabel: "",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `
                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    js: true,
                  },
                ],
              },
            ],
          },
          //! Controlling with Javascript
          {
            subSectionId: "controlling-with-javascript",
            subSectionLabel: "Controlling with Javascript",
            subSectionAriaLabel: "Controlling with Javascript",
            description: /* html */ `
                ...
              `,
            topics: [
              //! Topic
              {
                topicId: "topic",
                topicLabel: "Topic",
                topicAriaLabel: "",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `

                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    js: true,
                  },
                ],
              },
              //! Topic
              {
                topicId: "topic",
                topicLabel: "Topic",
                topicAriaLabel: "",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `
                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    js: true,
                  },
                ],
              },
            ],
          },
        ],
      },
      //! Design Mode
      {
        sectionId: "design-mode",
        sectionLabel: "Design Mode",
        sectionAriaLabel: "Design Mode",
        description: /* html */ `
          <p>The <code>document.designMode</code> property in HTML allows for making the entire document editable within the browser. This property can be set to either "on" or "off".</p>
        `,
        subSections: [
          {
            subSectionId: "enabling-design-mode",
            subSectionLabel: "Enabling Design Mode",
            subSectionAriaLabel: "Enabling Design Mode",
            topics: [
              //! Topic
              {
                topicId: "document-designMode",
                topicLabel: 'document.designMode = "on" / "off"',
                topicAriaLabel: "",
                cardCodes: [
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `
document.designMode = "on";
                `,
                  },
                ],
              },
            ],
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
        category="Javascript"
        page="Module 8"
        unit="Core Language"
        aria-label="..."
      ></wc-page-header>

      <wc-contents></wc-contents>

      <div class="line-break">${renderSections(sections)}</div>

      <wc-lesson-nav></wc-lesson-nav>
    `;

    setupContents(this.shadowRoot, sections);
  }
}

customElements.define("wc-frontend-js-module-8", ModuleEight);
export default ModuleEight;
