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

// Preview
import "@/js/components/pages/js/module-6/Toggle.js"


const style = /* css */ `
  
`;

class JSModuleSix extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {
    // cleanup (events, intervals, observers)
  }

  render() {
    const sections = [
      //! 6.1 The DOM
      {
        sectionId: "the-dom",
        sectionLabel: "6.1 The DOM",
        sectionAriaLabel: "6.1 The DOM",
        description: /* html */ `
            ...
          `,
        subSections: [
          //! DOM Basics
          {
            subSectionId: "dom-basics",
            subSectionLabel: "DOM Basics",
            subSectionAriaLabel: "DOM Basics",
            description: /* html */ `
                ...
              `,
            topics: [
              //! What is the DOM?
              {
                topicId: "what-is-the-dom",
                topicLabel: "What is the DOM?",
                topicAriaLabel: "What is the DOM?",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "HTML",
                    language: "html",
                    code: /* html */ `

                `,
                  },
                  {
                    cardLabel: "CSS",
                    language: "css",
                    code: /* css */ `

                `,
                  },
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
                    html: true,
                    css: true,
                    js: true,
                    console: true,
                  },
                ],
              },
              //! DOM Tree
              {
                topicId: "dom-tree",
                topicLabel: "DOM tree",
                topicAriaLabel: "DOM tree",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "HTML",
                    language: "html",
                    code: /* html */ `

                `,
                  },
                  {
                    cardLabel: "CSS",
                    language: "css",
                    code: /* css */ `

                `,
                  },
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
                    html: true,
                    css: true,
                    js: true,
                    console: true,
                  },
                ],
              },
              //! Nodes vs. Elements
              {
                topicId: "nodes-vs-elements",
                topicLabel: "Nodes vs Elements",
                topicAriaLabel: "Nodes vs Elements",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "HTML",
                    language: "html",
                    code: /* html */ `

                `,
                  },
                  {
                    cardLabel: "CSS",
                    language: "css",
                    code: /* css */ `

                `,
                  },
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
                    html: true,
                    css: true,
                    js: true,
                    console: true,
                  },
                ],
              },
            ],
          },
        ],
      },
      //! 6.2 Selecting Elements
      {
        sectionId: "selecting-elements",
        sectionLabel: "6.2 Selecting Elements",
        sectionAriaLabel: "6.2 Selecting Elements",
        description: /* html */ `
            ...
          `,
        subSections: [
          //! DOM Selectors
          {
            subSectionId: "dom-selectors",
            subSectionLabel: "DOM Selectors",
            subSectionAriaLabel: "DOM Selectors",
            description: /* html */ `
                ...
              `,
            topics: [
              //! document.getElementsByTagName()
              {
                topicId: "document-get-elements-by-tagname",
                topicLabel: "document.getElementsByTagName()",
                topicAriaLabel: "document.getElementsByTagName()",
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
              //! document.getElementsByClassName()
              {
                topicId: "document-get-elements-by-classname",
                topicLabel: "document.getElementsByClassName()",
                topicAriaLabel: "document.getElementsByClassName()",
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
              //! document.getElementById()
              {
                topicId: "document-get-element-by-id",
                topicLabel: "document.getElementById()",
                topicAriaLabel: "document.getElementById()",
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
              //! document.querySelector()
              {
                topicId: "document-query-selector",
                topicLabel: "document.querySelector()",
                topicAriaLabel: "document.querySelector()",
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
              //! document.querySelectorAll()
              {
                topicId: "document-query-selector-all",
                topicLabel: "document.querySelectorAll()",
                topicAriaLabel: "document.querySelectorAll()",
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
      //! 6.3 Reading & Updating Content
      {
        sectionId: "reading-and-updating-content",
        sectionLabel: "6.3 Reading & Updating Content",
        sectionAriaLabel: "6.3 Reading & Updating Content",
        description: /* html */ `
            ...
          `,
        subSections: [
          //! Content API
          {
            subSectionId: "content-api",
            subSectionLabel: "Content API",
            subSectionAriaLabel: "Content API",
            description: /* html */ `
                ...
              `,

            topics: [
              //! element.textContent
              {
                topicId: "element-text-content",
                topicLabel: "element.textContent",
                topicAriaLabel: "element.textContent",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "HTML",
                    language: "html",
                    code: /* html */ `

                `,
                  },
                  {
                    cardLabel: "CSS",
                    language: "css",
                    code: /* css */ `

                `,
                  },
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
                    html: true,
                    css: true,
                    js: true,
                    console: true,
                  },
                ],
              },
              //! element.innerText
              {
                topicId: "element-inner-text",
                topicLabel: "element.innerText",
                topicAriaLabel: "element.innerText",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "HTML",
                    language: "html",
                    code: /* html */ `

                `,
                  },
                  {
                    cardLabel: "CSS",
                    language: "css",
                    code: /* css */ `

                `,
                  },
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
                    html: true,
                    css: true,
                    js: true,
                    console: true,
                  },
                ],
              },
              //! element.innerHTML
              {
                topicId: "element-inner-html",
                topicLabel: "element.innerHTML",
                topicAriaLabel: "element.innerHTML",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "HTML",
                    language: "html",
                    code: /* html */ `

                `,
                  },
                  {
                    cardLabel: "CSS",
                    language: "css",
                    code: /* css */ `

                `,
                  },
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
                    html: true,
                    css: true,
                    js: true,
                    console: true,
                  },
                ],
              },
            ],
          },
        ],
      },
      //! 6.4 Attributes
      {
        sectionId: "attributes",
        sectionLabel: "6.4 Attributes",
        sectionAriaLabel: "6.4 Attributes",
        description: /* html */ `
            ...
          `,
        subSections: [
          //! Attributes API
          {
            subSectionId: "attributes-api",
            subSectionLabel: "Attributes API",
            subSectionAriaLabel: "Attributes API",
            description: /* html */ `
                ...
              `,

            topics: [
              //! element.getAttribute()
              {
                topicId: "element-get-attribute",
                topicLabel: "element.getAttribute()",
                topicAriaLabel: "element.getAttribute()",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "HTML",
                    language: "html",
                    code: /* html */ `

                `,
                  },
                  {
                    cardLabel: "CSS",
                    language: "css",
                    code: /* css */ `

                `,
                  },
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
                    html: true,
                    css: true,
                    js: true,
                    console: true,
                  },
                ],
              },
              //! element.setAttribute()
              {
                topicId: "element-set-attribute",
                topicLabel: "element.setAttribute()",
                topicAriaLabel: "element.setAttribute()",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "HTML",
                    language: "html",
                    code: /* html */ `

                `,
                  },
                  {
                    cardLabel: "CSS",
                    language: "css",
                    code: /* css */ `

                `,
                  },
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
                    html: true,
                    css: true,
                    js: true,
                    console: true,
                  },
                ],
              },
              //! element.removeAttribute()
              {
                topicId: "element-remove-attribute",
                topicLabel: "element.removeAttribute()",
                topicAriaLabel: "element.removeAttribute()",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "HTML",
                    language: "html",
                    code: /* html */ `

                `,
                  },
                  {
                    cardLabel: "CSS",
                    language: "css",
                    code: /* css */ `

                `,
                  },
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
                    html: true,
                    css: true,
                    js: true,
                    console: true,
                  },
                ],
              },
              //! element.hasAttribute()
              {
                topicId: "element-has-attribute",
                topicLabel: "element.hasAttribute()",
                topicAriaLabel: "element.hasAttribute()",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "HTML",
                    language: "html",
                    code: /* html */ `

                `,
                  },
                  {
                    cardLabel: "CSS",
                    language: "css",
                    code: /* css */ `

                `,
                  },
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
                    html: true,
                    css: true,
                    js: true,
                    console: true,
                  },
                ],
              },
              //! element.dataset
              {
                topicId: "element-dataset",
                topicLabel: "element.dataset",
                topicAriaLabel: "element.dataset",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "HTML",
                    language: "html",
                    code: /* html */ `

                `,
                  },
                  {
                    cardLabel: "CSS",
                    language: "css",
                    code: /* css */ `

                `,
                  },
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
                    html: true,
                    css: true,
                    js: true,
                    console: true,
                  },
                ],
              },
            ],
          },
        ],
      },
      //! 6.5 Classes
      {
        sectionId: "classes",
        sectionLabel: "6.5 Classes",
        sectionAriaLabel: "6.5 Classes",
        description: /* html */ `
            ...
          `,
        //! classList API
        subSections: [
          {
            subSectionId: "class-list-api",
            subSectionLabel: "6.5 classList API",
            subSectionAriaLabel: "6.5 classList API",
            description: /* html */ `
                ...
              `,

            topics: [
              //! element.classList
              {
                topicId: "element-class-list",
                topicLabel: "element.classList",
                topicAriaLabel: "element.classList",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "HTML",
                    language: "html",
                    code: /* html */ `

                `,
                  },
                  {
                    cardLabel: "CSS",
                    language: "css",
                    code: /* css */ `

                `,
                  },
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
                    html: true,
                    css: true,
                    js: true,
                    console: true,
                  },
                ],
              },
              //! classList.add()
              {
                topicId: "class-list-add",
                topicLabel: "classList.add()",
                topicAriaLabel: "classList.add()",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "HTML",
                    language: "html",
                    code: /* html */ `

                `,
                  },
                  {
                    cardLabel: "CSS",
                    language: "css",
                    code: /* css */ `

                `,
                  },
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
                    html: true,
                    css: true,
                    js: true,
                    console: true,
                  },
                ],
              },
              //! classList.remove()
              {
                topicId: "class-list-remove",
                topicLabel: "classList.remove()",
                topicAriaLabel: "classList.remove()",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "HTML",
                    language: "html",
                    code: /* html */ `

                `,
                  },
                  {
                    cardLabel: "CSS",
                    language: "css",
                    code: /* css */ `

                `,
                  },
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
                    html: true,
                    css: true,
                    js: true,
                    console: true,
                  },
                ],
              },
              //! classList.toggle()
              {
                topicId: "class-list-toggle",
                topicLabel: "classList.toggle()",
                topicAriaLabel: "classList.toggle()",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "HTML",
                    language: "html",
                    code: /* html */ `
<button>Show message</button>
<span class="hidden">Hidden message</span>
                `,
                  },
                  {
                    cardLabel: "CSS",
                    language: "css",
                    code: /* css */ `
button {
  display: block;
  margin-bottom: 0.5rem
}  

.hidden {
  display: none
}

.hidden.show {
  display: block
}
                `,
                  },
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `
const button = document.querySelector("button");
const span = document.querySelector("span");

// Callback inline
button.addEventListener("click", () => {
  span.classList.toggle("show")
});
                `,
                  },
                ],
                preview: /* html */ `
                  <wc-js-module-6-toggle></wc-js-module-6-toggle>
                `,
                sandbox: [
                  {
                    html: true,
                    css: true,
                    js: true,
                    console: true,
                  },
                ],
              },
              //! classList.contains()
              {
                topicId: "class-list-contains",
                topicLabel: "classList.contains()",
                topicAriaLabel: "classList.contains()",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "HTML",
                    language: "html",
                    code: /* html */ `

                `,
                  },
                  {
                    cardLabel: "CSS",
                    language: "css",
                    code: /* css */ `

                `,
                  },
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
                    html: true,
                    css: true,
                    js: true,
                    console: true,
                  },
                ],
              },
            ],
          },
        ],
      },
      //! 6.6 Creating & Modifying Elements
      {
        sectionId: "creating-and-modifying-elements",
        sectionLabel: "6.6 Creating & Modifying Elements",
        sectionAriaLabel: "6.6 Creating & Modifying Elements",
        description: /* html */ `
            ...
          `,
        subSections: [
          //! Creating Elements
          {
            subSectionId: "creating-elements",
            subSectionLabel: "Creating Elements",
            subSectionAriaLabel: "Creating Elements",
            description: /* html */ `
                ...
              `,

            topics: [
              //! document.createElement( )
              {
                topicId: "document-create-element",
                topicLabel: "document.createElement()",
                topicAriaLabel: "document.createElement()",
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
              //! element.append( )
              {
                topicId: "element-append",
                topicLabel: "element.append( )",
                topicAriaLabel: "element.append( )",
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
              //! element.appendChild( )
              {
                topicId: "element-append-child",
                topicLabel: "element.appendChild( )",
                topicAriaLabel: "element.appendChild( )",
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
              //! element.prepend( )
              {
                topicId: "element-prepend",
                topicLabel: "element.prepend( )",
                topicAriaLabel: "element.prepend( )",
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
              //! element.replaceWith( )
              {
                topicId: "element-replace-with",
                topicLabel: "element.replaceWith( )",
                topicAriaLabel: "element.replaceWith( )",
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
          //! Removing Elements
          {
            subSectionId: "removing-elements",
            subSectionLabel: "Removing Elements",
            subSectionAriaLabel: "Removing Elements",
            description: /* html */ `
                ...
              `,

            topics: [
              //! element.remove( )
              {
                topicId: "element-remove",
                topicLabel: "element.remove( )",
                topicAriaLabel: "element.remove( )",
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
              //! element.replaceWith( )
              {
                topicId: "element-replaceWith-remove",
                topicLabel: "element.replaceWith( )",
                topicAriaLabel: "element.replaceWith( )",
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
      //! Resources
      {
        sectionId: "resources",
        sectionLabel: "Resources",
        sectionAriaLabel: "Resources",
        links: [
          {
            href: "https://www.google.com/",
            label: "link",
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

customElements.define("wc-frontend-js-module-6", JSModuleSix);
export default JSModuleSix;
