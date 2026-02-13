import styleImports from "@css/styles.css?inline";
import "@/js/components/molecules/PageHeader.js";
import "@/js/components/molecules/Contents.js";
import "@/js/components/molecules/Section.js";
import "@/js/components/molecules/Code.js";

const style = /* css */ `
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    align-items: start;
  }

  h1, h2, h3, h4 {
    margin-bottom: 0.5rem
  }

  textarea, input {
    padding: 2px 4px
  }

  .radio {
    display: flex;
    gap: 20px
  }

  .checkbox {
    display: flex;
    gap: 20px
  }

  @media (width < 575px) {
    .wrapper {
      grid-template-columns: 1fr
    }
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


    <wc-page-header category="HTML" page="Tags" /></wc-page-header>
    <wc-contents></wc-contents>
    <div class="line-break">

    <wc-section id="text" label="text" aria-label="input styles">
      <div class="wrapper">
        <wc-code language="html">
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
  <h4>Heading 4</h4>
        </wc-code>
        <div>
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
        </div>
      </div>

      <div class="wrapper">
        <wc-code language="">
          <textarea></textarea>
        </wc-code>
        <textarea>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam voluptatem officia veniam minima ut. Sint laboriosam nemo dolorum neque labore recusandae totam, ea dolorem quae modi ipsum suscipit? Expedita, culpa!</textarea>
      </div>
    </wc-section>

    <wc-section id="input-styles" label="input styles" aria-label="input styles">
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
        <wc-code language="html">
          <input type="range"/>
        </wc-code>
        <input type="range"/>
      </div>
      
      <div class="wrapper">
        <wc-code language="html">
          <input type="file"/>
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
          <input type="button" value="Button"/>
        </wc-code>
        <input type="button" value="Button"/>
      </div>
      
      <div class="wrapper">
        <wc-code language="html">
          <input type="submit"/>
        </wc-code>
        <input type="submit"/>
      </div>
    </wc-section>
    </div>
    
    `;

    const contentsEl = this.shadowRoot.querySelector("wc-contents");

    contentsEl.contents = [
      {
        id: "text",
        label: "text",
      },
      {
        id: "input-styles",
        label: "input styles",
      },
    ];

    contentsEl.render();
  }
}

export default Tags;
customElements.define("wc-html-tags", Tags);
