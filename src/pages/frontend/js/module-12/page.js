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

`;

class JSModuleTwelve extends HTMLElement {
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
      //! Section
      {
        sectionId: "deployment",
        sectionLabel: "Deployment",
        sectionAriaLabel: "Deployment",
        //! Sub Section
        subSections: [
          {
            subSectionId: "vercel",
            subSectionLabel: "Vercel",
            subSectionAriaLabel: "Vercel",
            //! Topic
            topics: [
              {
                topicId: "routing",
                topicLabel: "Routing",
                topicAriaLabel: "Routing",
                description: /* html */ `
                  <p>When deploying a Single Page Application (SPA) to Vercel,  you need to rewrite all incoming routes to index.html.
                  This ensures that your client-side router (like router.js) can handle navigation instead of the server returning a 404 error.</p>
                  <p>Add a file named vercel.json to the root of your project with the following content:</p>
                `,
                cardCodes: [
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
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

customElements.define("wc-frontend-js-module-12", JSModuleTwelve);
export default JSModuleTwelve;
