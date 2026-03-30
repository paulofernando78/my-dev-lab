import styleImports from "@css/styles.css?inline";

// Sections
import {sections} from "./module-7-data"

import "@/js/components/molecules/PageHeader.js";
import "@/js/components/molecules/Contents.js";
import "@/js/components/molecules/Section.js";
import "@/js/components/molecules/CardIcon.js";
import "@/js/components/molecules/SubSection.js";
import "@/js/components/atoms/Wrapper.js";
import "@/js/components/atoms/Image.js";
import "@/js/components/molecules/Topic.js";
import "@/js/components/molecules/CardCode.js";
import "@/js/components/atoms/Code.js";
import "@/js/components/molecules/Demo.js";
import "@/js/components/organisms/Sandbox.js";
import "@/js/components/molecules/Links.js";
import "@/js/components/molecules/LessonNav.js";
import "@/js/components/atoms/CheckConsole.js";
import "@/js/components/atoms/Spacer.js";

import { setupContents } from "@/js/utils/setupContents.js";
import { renderSections } from "@/js/renderers/renderSection.js";

//! 7.1 Event Fundamentals

//! 7.2 Mouse Events
// Click Events
import "@/js/components/pages/frontend/js/module-7/7-2/click-events/Click.js";
import "@/js/components/pages/frontend/js/module-7/7-2/click-events/MousedownMouseup.js";
// Hover Events
import "@/js/components/pages/frontend/js/module-7/7-2/hover-events/MouseenterMouseleave.js";
// Mouse Interactions
import "@/js/components/pages/frontend/js/module-7/7-2/mouse-interactions/Mousemove.js";
// Mouse Interactions Circle
import "@/js/components/pages/frontend/js/module-7/7-2/mouse-interactions/MousemoveCircle.js";

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

customElements.define("wc-frontend-js-module-7", JSModuleSeven);
export default JSModuleSeven;
