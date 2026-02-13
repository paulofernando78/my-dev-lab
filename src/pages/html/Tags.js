import styleImports from "@css/styles.css?inline";

import "../../js/components/molecules/Section.js";

class Tags extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    /* HTML */
    this.shadowRoot.innerHTML = `
    <style>
      ${styleImports}
    </style>
    <wc-section></wc-section>
     <section class="line-break" aria-label="Html Tags">
          <h1 class="page"><b>HTML</b></h1>
          <h2 class="page"><b>Tags</b></h2>
          <input type="text" placeholder="text"/>
          <input type="password" placeholder="password"/>
          <input type="search"placeholder="search"/>
          <input type="date"/>
          <input type="month"/>
          <input type="week"/>
          <input type="time"/>
          <input type="number" placeholder="1234"/>
          <input type="email" placeholder="johndoe@google.com"/>
          <input type="url" placeholder="www.google.com"/>
          <div class>
            <input type="radio"/>
            <input type="radio"/>
          </div>
          <div>
          <input type="checkbox"/>
          <input type="checkbox"/>
          </div>
          <input type="color"/>
          <input type="range"/>
          <input type="file"/>
          <input type="reset"/>
          <input type="button"/>
          <input type="submit"/>
      </section>
    `;
  }
}

export default Tags;
customElements.define("wc-html-tags", Tags);
