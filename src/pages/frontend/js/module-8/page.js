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
      //! Window Object
      {
        sectionId: "window-object",
        sectionLabel: "Window Object",
        sectionAriaLabel: "Window Object",
        description: /* html */ `
          <p>...</p>
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
              //! window.innerWidth
              {
                topicId: "window-innerWidth",
                topicLabel: "window.innerWidth",
                topicAriaLabel: "",
                description: /* html */ `
                  <p>Returns the width of the browser viewport in pixels.</p>
                `,
                cardCodes: [
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `
console.log(window.innerWidth);
                `,
                  },
                ],
                sandbox: [
                  {
                    js: true,
                  },
                ],
              },
              //! window.innerHeight
              {
                topicId: "window-innerHeight",
                topicLabel: "window.innerHeight",
                topicAriaLabel: "",
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
                  <wc-demo></wc-demo>
                `,
                sandbox: [
                  {
                    html: true,
                    css: true,
                    js: true,
                  },
                ],
              },
              //! window.scrollX
              {
                topicId: "window-scroll-x",
                topicLabel: "window.scrollX",
                topicAriaLabel: "",
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
                  <wc-demo></wc-demo>
                `,
                sandbox: [
                  {
                    html: true,
                    css: true,
                    js: true,
                  },
                ],
              },
              //! window.scrollY
              {
                topicId: "window-scroll-y",
                topicLabel: "window.scrollY",
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
                  <wc-demo></wc-demo>
                `,
                sandbox: [
                  {
                    html: true,
                    css: true,
                    js: true,
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
                topicId: "window-alert()",
                topicLabel: "window.alert( )",
                topicAriaLabel: "",
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
                  <wc-demo></wc-demo>
                `,
                sandbox: [
                  {
                    html: true,
                    css: true,
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
                  <wc-demo></wc-demo>
                `,
                sandbox: [
                  {
                    html: true,
                    css: true,
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
                  <wc-demo></wc-demo>
                `,
                sandbox: [
                  {
                    html: true,
                    css: true,
                    js: true,
                  },
                ],
              },
            ],
          },
        ],
      },
      //! Document Object
      {
        sectionId: "document-object",
        sectionLabel: "Document Object",
        sectionAriaLabel: "Document Object",
        description: /* html */ `
          <p>...</p>
        `,
        notes: /* html */ `
          <p>...</p>
        `,
        subSections: [
          //! Selecting Elements
          {
            subSectionId: "document-object-selecting-objects",
            subSectionLabel: "Selecting Elements",
            subSectionAriaLabel: "Selecting Elements",
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
                  <wc-demo></wc-demo>
                `,
                sandbox: [
                  {
                    html: true,
                    css: true,
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
                  <wc-demo></wc-demo>
                `,
                sandbox: [
                  {
                    html: true,
                    css: true,
                    js: true,
                  },
                ],
              },
            ],
          },
          //! Creating & Modifying Elements
          {
            subSectionId: "creating-modifying-elements",
            subSectionLabel: "Creating & Modifying Elements",
            subSectionAriaLabel: "Creating & Modifying Elements",
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
                  <wc-demo></wc-demo>
                `,
                sandbox: [
                  {
                    html: true,
                    css: true,
                    js: true,
                  },
                ],
              },
              //! Topic
              {
                topicId: "topic",
                topicLabel: "Topic",
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
                  <wc-demo></wc-demo>
                `,
                sandbox: [
                  {
                    html: true,
                    css: true,
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
        notes: /* html */ `
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
                  <wc-demo></wc-demo>
                `,
                sandbox: [
                  {
                    html: true,
                    css: true,
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
                  <wc-demo></wc-demo>
                `,
                sandbox: [
                  {
                    html: true,
                    css: true,
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
                  <wc-demo></wc-demo>
                `,
                sandbox: [
                  {
                    html: true,
                    css: true,
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
                  <wc-demo></wc-demo>
                `,
                sandbox: [
                  {
                    html: true,
                    css: true,
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
        notes: /* html */ `
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
                  <wc-demo></wc-demo>
                `,
                sandbox: [
                  {
                    html: true,
                    css: true,
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
                  <wc-demo></wc-demo>
                `,
                sandbox: [
                  {
                    html: true,
                    css: true,
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
                  <wc-demo></wc-demo>
                `,
                sandbox: [
                  {
                    html: true,
                    css: true,
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
                  <wc-demo></wc-demo>
                `,
                sandbox: [
                  {
                    html: true,
                    css: true,
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
        notes: /* html */ `
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
                  <wc-demo></wc-demo>
                `,
                sandbox: [
                  {
                    html: true,
                    css: true,
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
                  <wc-demo></wc-demo>
                `,
                sandbox: [
                  {
                    html: true,
                    css: true,
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
                  <wc-demo></wc-demo>
                `,
                sandbox: [
                  {
                    html: true,
                    css: true,
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
                  <wc-demo></wc-demo>
                `,
                sandbox: [
                  {
                    html: true,
                    css: true,
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
                  <wc-demo></wc-demo>
                `,
                sandbox: [
                  {
                    html: true,
                    css: true,
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
                  <wc-demo></wc-demo>
                `,
                sandbox: [
                  {
                    html: true,
                    css: true,
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
                topicLabel: "document.designMode = \"on\" / \"off\"",
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
