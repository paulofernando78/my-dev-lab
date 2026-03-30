import styleImports from "@css/styles.css?inline";
import { sections } from "./module-6-data.js";
import "@/js/components/molecules/PageHeader.js";
import "@/js/components/molecules/Contents.js";
import "@/js/components/molecules/Section.js";
import "@/js/components/molecules/CardIcon.js";
import "@/js/components/molecules/SubSection.js";
import "@/js/components/atoms/Wrapper.js";
import "@/js/components/atoms/Image.js";
import "@/js/components/molecules/CardCode.js";
import "@/js/components/atoms/Code.js";
import "@/js/components/molecules/Demo.js";
import "@/js/components/organisms/Sandbox.js";
import "@/js/components/molecules/Links.js";
import "@/js/components/molecules/LessonNav.js";

import { setupContents } from "@/js/utils/setupContents.js";
import { renderSections } from "@/js/renderers/renderSection.js";

import "@/js/components/pages/frontend/html/module-6/Text.js";
import "@/js/components/pages/frontend/html/module-6/Email.js";
import "@/js/components/pages/frontend/html/module-6/Password.js";
import "@/js/components/pages/frontend/html/module-6/Number.js";
import "@/js/components/pages/frontend/html/module-6/Radio.js";
import "@/js/components/pages/frontend/html/module-6/Checkbox.js";
import "@/js/components/pages/frontend/html/module-6/Option.js";
import "@/js/components/pages/frontend/html/module-6/File.js";
import "@/js/components/pages/frontend/html/module-6/Textarea.js";

const style = /* css */ `

`;

class HTMLModuleSix extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
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

customElements.define("wc-frontend-html-module-6", HTMLModuleSix);
export default HTMLModuleSix;
