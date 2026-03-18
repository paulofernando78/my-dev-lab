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
import "@/js/components/pages/frontend/js/module-7/Mousemove.js";

const style = /* css */ `

`;

class JSModuleSeven extends HTMLElement {
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
      //! 7.1 Event Fundamentals
      {
        sectionId: "event-fundamentals",
        sectionLabel: "7.1 Event Fundamentals",
        sectionAriaLabel: "7.1 Event Fundamentals",
        description: /* html */ `
          ...
        `,
        subSections: [
          //! Event Listeners
          {
            subSectionId: "event-listeners",
            subSectionLabel: "Event Listeners",
            subSectionAriaLabel: "Event Listeners",
            description: /* html */ `
              ...
            `,
            topics: [
              //! addEventListener()
              {
                topicId: "add-event-listener",
                topicLabel: "addEventListener()",
                topicAriaLabel: "addEventListener()",
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
              //! removeEventListener()
              {
                topicId: "remove-event-listener",
                topicLabel: "removeEventListener()",
                topicAriaLabel: "removeEventListener()",
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
              //! Event handler vs Event listener
              {
                topicId: "event-handler-vs-event-listener",
                topicLabel: "Event handler vs Event listener",
                topicAriaLabel: "Event hander vs Event listener",
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
              //! Event object (event)
              {
                topicId: "event-object",
                topicLabel: "Event Object",
                topicAriaLabel: "Event Object",
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
      //! 7.2 Mouse Events
      {
        sectionId: "mouse-events",
        sectionLabel: "7.2 Mouse Events",
        sectionAriaLabel: "7.2 Mouse Events",
        description: /* html */ `
          ...
        `,
        subSections: [
          //! Mouse Events (Base)
          {
            subSectionId: "mouse-events-basic",
            subSectionLabel: "Mouse Events",
            subSectionAriaLabel: "Mouse Events",
            description: /* html */ `
            <p>Mouse events allow you to respond to user interactions such as clicks and button presses.</p>
            `,
            topics: [
              //! click
              {
                topicId: "click-event",
                topicLabel: "click",
                topicAriaLabel: "click",
                description: /* html */ `
                <p>The <code>click</code> event is triggered when a user clicks on an element. It is one of the most commonly used events for creating interactivity.</p>
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
              //! mousedown & mouseup
              {
                topicId: "mousedown-mouseup",
                topicLabel: "mousedown & mouseup",
                topicAriaLabel: "mousedown and mouseup",
                description: /* html */ `
                <p>The <code>mousedown</code> event is triggered when the mouse button is pressed,
                  and <code>mouseup</code> when it is released. These events are useful for detecting press and hold interactions.</p>
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
          //! Hover Events
          {
            subSectionId: "hover-events",
            subSectionLabel: "Hover Events",
            subSectionAriaLabel: "Hover Events",
            description: /* html */ `
            <p>Hover events allow you to detect when the mouse enters or leaves an element.</p>
            `,
            topics: [
              //! mouseenter & mouseleave
              {
                topicId: "mouseenter-mouseleave",
                topicLabel: "mouseenter & mouseleave",
                topicAriaLabel: "mouseenter and mouseleave",
                description: /* html */ `
                <p>The <code>mouseenter</code> event is triggered when the mouse enters an element, and <code>mouseleave</code> when it leaves.These are commonly used for hover effects and UI interactions.</p>
                  
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
          //! Mouse Interactions
          {
            subSectionId: "mouse-interactions",
            subSectionLabel: "Mouse Interactions",
            subSectionAriaLabel: "Mouse Interactions",
            description: /* html */ `
              ...
            `,
            topics: [
              //! mousemove (Tracking Mouse Position)
              {
                topicId: "mousemove",
                topicLabel: "mousemove (Tracking Mouse Position)",
                topicAriaLabel: "mousemove (Tracking Mouse Position)",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "HTML",
                    language: "html",
                    code: /* html */ `
<span id="x"></span>
<span id="y"></span>
                    `,
                  },
                  {
                    cardLabel: "CSS",
                    language: "css",
                    code: /* css */ `
body {
  display: grid;
  place-items: center
}                    
                    `,
                  },
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `
const spanX = document.querySelector("#x")
const spanY = document.querySelector("#y")

  window.addEventListener("mousemove", (event) => {
  spanX.textContent = "x: " + event.clientX
  spanY.textContent = "y: " + event.clientY

  console.log(event.clientX)
  console.log(event.clientY)
})
                    `,
                  },
                ],
                preview: /* html */ `
                  <wc-frontend-js-module-7-mousemove></wc-frontend-js-module-7-mousemove>
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
      //! 7.3 Keyboard Events
      {
        sectionId: "keyboard-events",
        sectionLabel: "7.3 Keyboard Events",
        sectionAriaLabel: "7.3 Keyboard Events",
        description: /* html */ `
          ...
        `,
        subSections: [
          //! Keyboard Events
          {
            subSectionId: "keyboard-events-basic",
            subSectionLabel: "Keyboard Events",
            subSectionAriaLabel: "Keyboard Events",
            description: /* html */ `
              ...
            `,
            topics: [
              //! keydown & keyup
              {
                topicId: "keydown-keyup",
                topicLabel: "keydown & keyup",
                topicAriaLabel: "keydown and keyup",
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
      //! 7.4 Form Events
      {
        sectionId: "form-events",
        sectionLabel: "7.4 Form Events",
        sectionAriaLabel: "7.4 Form Events",
        description: /* html */ `
          ...
        `,
        subSections: [
          //! Form Events
          {
            subSectionId: "form-events-basic",
            subSectionLabel: "Form Events",
            subSectionAriaLabel: "Form Events",
            description: /* html */ `
              ...
            `,
            topics: [
              //! submit, input & change
              {
                topicId: "form-events-core",
                topicLabel: "submit, input & change",
                topicAriaLabel: "submit input change",
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
      //! 7.5 Window and Globall Events
      {
        sectionId: "...",
        sectionLabel: "7.5 Event Flow",
        sectionAriaLabel: "7.5 Event Flow",
        description: /* html */ `
          ...
        `,
        subSections: [
          //! ...
          {
            subSectionId: "...",
            subSectionLabel: "...",
            subSectionAriaLabel: "...",
            description: /* html */ `
              ...
            `,
            topics: [
              //! ...
              {
                topicId: "...",
                topicLabel: "...",
                topicAriaLabel: "...",
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
      //! 7.5 Event Flow
      {
        sectionId: "event-flow",
        sectionLabel: "7.5 Event Flow",
        sectionAriaLabel: "7.5 Event Flow",
        description: /* html */ `
          ...
        `,
        subSections: [
          //! Event Flow
          {
            subSectionId: "event-flow-basics",
            subSectionLabel: "Event Flow",
            subSectionAriaLabel: "Event Flow",
            description: /* html */ `
              ...
            `,
            topics: [
              //! ...
              {
                topicId: "bubbling-capturing",
                topicLabel: "Bubbling & Capturing",
                topicAriaLabel: "Bubbling and Capturing",
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
      //! 7.6 Event Pattern
      {
        sectionId: "event-patterns",
        sectionLabel: "7.6 Event Patterns",
        sectionAriaLabel: "7.6 Event Patterns",
        description: /* html */ `
          ...
        `,
        subSections: [
          //! Event Patterns
          {
            subSectionId: "event-patterns-core",
            subSectionLabel: "Event Patterns",
            subSectionAriaLabel: "Event Patterns",
            description: /* html */ `
              ...
            `,
            topics: [
              //! Event Delegation
              {
                topicId: "event-delegation",
                topicLabel: "Event Delegation",
                topicAriaLabel: "Event Delegation",
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

customElements.define("wc-frontend-js-module-7", JSModuleSeven);
export default JSModuleSeven;
