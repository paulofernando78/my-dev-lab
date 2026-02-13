import styleImports from "@css/styles.css?inline";
import "@/js/components/molecules/Section.js";
import "@/js/components/molecules/Code.js";

const style = /* css */ `
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    align-items: start;
  }

  input {
    padding: 2px
  }

  .radio {
    display: flex;
    gap: 20px
  }

  .checkbox {
    display: flex;
    gap: 20px
  }
`;

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
      ${style}
    </style>
    <h1 class="page"><b>HTML</b></h1>
    <h2 class="page"><b>Tags</b></h2>

    <wc-section label="input styles" aria-label="Html Tags">
      <div class="wrapper">
        <wc-code language="html">
        <input type="text"/>
        </wc-code>
        <input type="text" placeholder="text"/>
      </div>

      <div class="wrapper">
        <wc-code language="html">
        <input type="password"/>
        </wc-code>
        <input type="password" placeholder="password"/>
      </div>
      
      
      <div class="wrapper">
      <wc-code language="html">
        <input type="search"/>
      </wc-code>
      <input type="search"placeholder="search"/>
      </div>
      
      <div class="wrapper">
      <wc-code language="html">
        <input type="date"/>
      </wc-code>
      <input type="date"/>
      </div>

      <div class="wrapper">
      <wc-code language="html">
        <input type="month"/>
      </wc-code>
      <input type="month"/>
      </div>

      <div class="wrapper">
      <wc-code language="html">
        <input type="week"/>
      </wc-code>
      <input type="week"/>
      </div>

      <div class="wrapper">
      <wc-code language="html">
        <input type="time"/>
      </wc-code>
      <input type="time"/>
      </div>

      <div class="wrapper">
      <wc-code language="html">
        <input type="number"/>
      </wc-code>
      <input type="number" placeholder="1234"/>
      </div>

      <div class="wrapper">
      <wc-code language="html">
        <input type="email"/>
      </wc-code>
      <input type="email" placeholder="johndoe@google.com"/>
      </div>

      <div class="wrapper">
      <wc-code language="html">
        <input type="url"/>
      </wc-code>
      <input type="url" placeholder="www.google.com"/>
      </div>

      <div class="wrapper">
      <wc-code language="html">
        <input type="radio"/>
      </wc-code>
        <div class="radio">
          <div class="flex">
            <input type="radio" name="radio" id="radio-1"/>
            <label for="radio-1">Option 1</label>
          </div>
          <div class="flex">
            <input type="radio" name="radio" id="radio-2"/>
            <label for="radio-2">Option 2</label>
          </div>
        </div>
      </div>
      
      <div class="wrapper">
      <wc-code language="html">
        <input type="checkbox"/>
      </wc-code>
        <div class="checkbox">
          <div class="flex">
            <input type="checkbox" name="checkbox" value="" id="checkbox-1"/>
            <label for="checkbox-1">Checkbox 1</label>
          </div>
          <div class="flex">
            <input type="checkbox" name="checkbox" value="" id="checkbox-2"/>
            <label for="checkbox-2">Checkbox 2</label>
          </div>
        </div>
      </div>
      
      <div class="wrapper">
      <wc-code language="html">
        <input type="color"/>
      </wc-code>
        <input type="color"/>
      </div>

      <div class="wrapper">
        <input type="range"/>
      </div>
      
      <div class="wrapper">
      <wc-code language="html">
        <input type=""/>
      </wc-code>
        <input type="file"/>
      </div>
      
      <div class="wrapper">
      <wc-code language="html">
        <input type="reset"/>
      </wc-code>
        <input type="reset"/>
      </div>
      
      <div class="wrapper">
      <wc-code language="html">
        <input type="button"/>
      </wc-code>
        <input type="button"/>
      </div>
      
      <div class="wrapper">
      <wc-code language="html">
        <input type=""/>
      </wc-code>
        <input type="submit"/>
      </div>
    </wc-section>

          
          
  
    `;
  }
}

export default Tags;
customElements.define("wc-html-tags", Tags);
