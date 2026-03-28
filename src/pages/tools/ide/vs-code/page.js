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
import "@/js/components/atoms/Spacer.js";

import { setupContents } from "@/js/utils/setupContents.js";
import { renderSections } from "@/js/renderers/renderSection";

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
      //! Keyboard shortcuts
      {
        sectionId: "keyboard-shortcuts",
        sectionLabel: "Keyboard shortcuts",
        description: /* html */ `
            <style>
              td:first-child {
                font-weight: bold
              }
            </style>
            <p>Essential VS Code keyboard shortcuts to improve speed and productivity while coding.</p>
            <wc-spacer></wc-spacer>
            <table>
            <tr>
              <td>Ctrl + D</td>
              <td>Mutiple selected</td>
            </tr>
            <tr>
              <td>Shift + Alt</td>
              <td>duplicate line</td>
            </tr>
            <tr>
              <td>Alt + Z:</td>
              <td>VS Code Alignment</td>
            </tr>
            <tr>
              <td>Crtl + space</td>
              <td>VS Code folder</td>
            </tr>
          </table>
        `,
      },
      //! ...
      {
        sectionId: "settings",
        sectionLabel: "Settings",
        description: /* html */ `
          <p>Recommended VS Code settings for a cleaner, smoother, and more productive coding experience.</p>
          <wc-spacer></wc-spacer>
          <ul>
            <li>Bracket pair: on</li>
            <li>word map: on</li>
            <li>cursor smooth: on</li>
            <li>blink: expand</li>
          </ul>
          
        `,
      },
      //! Extensions
      {
        sectionId: "extensions",
        sectionLabel: "Extensions",
        description: /* html */ `
        <p>Mac: ⇧ Cmd + ⌘ Shift + X</p>
        <p>Windows: Crtl + Shift + X</p>
        <wc-spacer></wc-spacer>  
        <ul>
            <li>ESLint</li>
            <li>HTMLHint</li>
            <li>vscode-icons</li>
            <li>Prettier - Code Formatter</li>
            <li>Javascript (ES6) code snippets</li>
            <li>Figma for VS Code</li>
            <li>Error Lens</li>
            <li>Auto Rename Tag</li>
            <li>htmltagwrap</li>
            <li>Better Comments</li>
            <li>Code Snap</li>
            <li>Snippets Creator</li>
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
