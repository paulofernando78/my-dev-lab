import styleImports from "@css/styles.css?inline";
import "@/js/components/molecules/PageHeader.js";
import "@/js/components/molecules/Contents.js";
import "@/js/components/molecules/Section.js";
import "@/js/components/molecules/CardIcon.js";
import "@/js/components/atoms/CardCode.js";
import "@/js/components/atoms/Wrapper.js";
import "@/js/components/molecules/Code.js";
import "@/js/components/organisms/Sandbox.js";
import "@/js/components/molecules/Links.js";
import "@/js/components/molecules/LessonNav.js";

import { setupContents } from "@/js/utils/setupContents.js";
import { renderSections } from "@/js/renderers/renderSection";

const style = /* css */ `
  .box {
    background-color: blue;
    width: 100px;
    height: 100px
  }
`;

class Boilerplate extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const sections = [
      //! ...
      {
        sectionId: "settings",
        sectionLabel: "Settings",
        sectionAriaLabel: "Settings",
        list: /* html */ `
          <ul>
            <li>Bracket pair: on</li>
            <li>word map: on</li>
            <li>cursor smooth: on</li>
            <li>blink: expand</li>
          </ul>
        `,
      },
      //! Keyboard shortcuts
      {
        sectionId: "keyboard-shortcuts",
        sectionLabel: "Keyboard shortcuts",
        sectionAriaLabel: "Keyboard shortcuts",
        list: /* html */ `
          <ul>
            <li>Ctrl + D: Mutiple selected</li>
            <li>Shift + Alt = duplicate line</li>
            <li>Alt + Z: VS Code Alignment</li>
            <li>Crtl + space: VS Code folder</li>
            <li>Crtl + link to open it</li>
          </ul>
        `,
      },
      {
        sectionId: "extensions",
        sectionLabel: "Extensions",
        sectionAriaLabel: "Extensions",
        list: /* html */ `
          <ul>
            <li>ESLint</li>
            <li>HTMLHint</li>
            <li>vscode-icons</li>
            <li>Prettier - Code Formatter</li>
            <li>Javascript (ES6) code snippets</li>
            <li>Error Lens</li>
            <li>Auto Rename Tag</li>
            <li>htmltagwrap</li>
            <li>Better Comments</li>
            <li>Code Snap</li>
            <li>Snippets Creator</li>
            <li>Figma for VS Code</li>
            <li>Path Intellisense</li>
            <li>Image preview</li>
            <li>es6-string-html (for Web Components)</li>
          </ul>
        `,
      },
      //! Links
      {
        sectionId: "links",
        sectionLabel: "Links",
        sectionAriaLabel: "Links",
        links: [
          {
            href: "https://code.visualstudio.com/",
            label: "VS Code | The open source AI code editor",
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

customElements.define("wc-tools-ide-vs-code", Boilerplate);
export default Boilerplate;
