import styleImports from "@css/styles.css?inline";
import "@/js/components/molecules/PageHeader.js";
import "@/js/components/molecules/Contents.js";
import "@/js/components/molecules/Section.js";
import "@/js/components/atoms/Card.js";
import "@/js/components/molecules/Code.js";
import "@/js/components/molecules/Notes.js";

const style = /* css */ `
  h1, h2, h3, h4 {
    margin-bottom: 0.5rem
  }

  ol {
  padding-left: 1rem;
}

ul {
  padding-left: 1rem;
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
    
    <wc-page-header category="HTML" page="Tags" aria-label="html tags"/></wc-page-header>
    <wc-contents></wc-contents>
    <div class="line-break">

    <wc-component></wc-component>
      <wc-section id="layout-semantic" label="Layout / Semantic" aria-label="">
         <wc-card>
          <div class="wrapper">
            <wc-code language="">
<header></header>
<main></main>
<section></section>
<article></article>
<aside></aside>
<footer></footer>
<div></div>
            </wc-code>
          </div>
        </wc-card>
      </wc-section>

      <wc-section id="text" label="Text" aria-label="input styles">
        <wc-card label="Headings">
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
        </wc-card>

        <wc-card  label="Paragraph">
          <div class="wrapper">
            <wc-code language="html">
<p>This is a paragraph.</p>
            </wc-code>
            <div>
              <p>This is a paragraph.</p>
            </div>
          </div>
        </wc-card>

        <wc-card>
          <div class="wrapper">
            <wc-code language="">
              <textarea>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam voluptatem officia veniam minima ut. Sint laboriosam nemo dolorum neque labore recusandae totam, ea dolorem quae modi ipsum suscipit? Expedita, culpa!</textarea>
            </wc-code>
            <textarea>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam voluptatem officia veniam minima ut. Sint laboriosam nemo dolorum neque labore recusandae totam, ea dolorem quae modi ipsum suscipit? Expedita, culpa!</textarea>
          </div>
        </wc-card>
      </wc-section>
      
      <wc-section id="lists" label="Lists" aria-label="Lists">

        <wc-card>
        <div class="wrapper">
          <wc-code language="html">
<ol type="**">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>
          </wc-code>
          <ol>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ol>
        </div>
        </wc-card>
        <wc-notes>
          ** Ordered lists support different numbering types using
          <code>type=""</code>:
          <ul>
            <li><code>1</code> — numbers (default)</li>
            <li><code>A</code> — uppercase letters</li>
            <li><code>a</code> — lowercase letters</li>
            <li><code>I</code> — uppercase Roman numerals</li>
            <li><code>i</code> — lowercase Roman numerals</li>
          </ul>
        </wc-notes>

        <wc-card>
        <div class="wrapper">
          <wc-code language="html">
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
          </wc-code>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
        </wc-card>

      </wc-section>

      <wc-section id="links" label="Links" aria-label="Links">
        <wc-card>
        <div class="wrapper">
          <wc-code language="html">
            
          </wc-code>
        </div>
        </wc-card>
      </wc-section>

      <wc-section id="input-styles" label="Input styles" aria-label="input styles">

        <wc-card>
          <div class="wrapper">
            <wc-code language="html">
            <input type="text"/>
            </wc-code>
            <input type="text" placeholder="text"/>
          </div>
        </wc-card>
          
        <wc-card>
          <div class="wrapper">
            <wc-code language="html">
            <input type="password"/>
            </wc-code>
            <input type="password" placeholder="password"/>
          </div>
        </wc-card>
          
        <wc-card>
          <div class="wrapper">
            <wc-code language="html">
              <input type="search"/>
            </wc-code>
            <input type="search"placeholder="search"/>
          </div>
        </wc-card>
          
        <wc-card>
          <div class="wrapper">
            <wc-code language="html">
              <input type="date"/>
            </wc-code>
            <input type="date"/>
          </div>
        </wc-card>
          
        <wc-card>
          <div class="wrapper">
            <wc-code language="html">
              <input type="month"/>
            </wc-code>
            <input type="month"/>
          </div>
        </wc-card>

        <wc-card>
          <div class="wrapper">
            <wc-code language="html">
              <input type="week"/>
            </wc-code>
          <input type="week"/>
          </div>
        </wc-card>

        <wc-card>
          <div class="wrapper">
            <wc-code language="html">
              <input type="time"/>
            </wc-code>
            <input type="time"/>
          </div>
        </wc-card>      

        <wc-card>
          <div class="wrapper">
            <wc-code language="html">
              <input type="number"/>
            </wc-code>
            <input type="number" placeholder="1234"/>
          </div>
        </wc-card>
          
        <wc-card>
          <div class="wrapper">
            <wc-code language="html">
              <input type="email"/>
            </wc-code>
            <input type="email" placeholder="johndoe@google.com"/>
          </div>
        </wc-card>
          
        <wc-card>
          <div class="wrapper">
            <wc-code language="html">
              <input type="url"/>
            </wc-code>
            <input type="url" placeholder="www.google.com"/>
          </div>
        </wc-card>
          
        <wc-card>
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
        </wc-card>
          
        <wc-card>
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
        </wc-card>
          
        <wc-card>
          <div class="wrapper">
            <wc-code language="html">
              <input type="color"/>
            </wc-code>
            <input type="color"/>
          </div>
        </wc-card>
          
        <wc-card>
          <div class="wrapper">
            <wc-code language="html">
              <input type="range"/>
            </wc-code>
            <input type="range"/>
          </div>
        </wc-card>
          
        <wc-card>
          <div class="wrapper">
            <wc-code language="html">
              <input type="file"/>
            </wc-code>
            <input type="file"/>
          </div>
        </wc-card>
          
        <wc-card>
          <div class="wrapper">
            <wc-code language="html">
            <input type="reset"/>
            </wc-code>
            <input type="reset"/>
          </div>
        </wc-card>
          
        <wc-card>
          <div class="wrapper">
            <wc-code language="html">
              <input type="button" value="Button"/>
            </wc-code>
            <input type="button" value="Button"/>
          </div>
        </wc-card>
        
        <wc-card>
          <div class="wrapper">
            <wc-code language="html">
              <input type="submit"/>
            </wc-code>
            <input type="submit"/>
          </div>
        </wc-card>
      
      </wc-section>
    </div>
    
    `;

    const contentsEl = this.shadowRoot.querySelector("wc-contents");

    contentsEl.contents = [
      {
        id: "layout-semantic",
        label: "Layout / Semantic",
      },
      {
        id: "text",
        label: "Text",
      },
      {
        id: "lists",
        label: "Lists",
      },
      {
        id: "links",
        label: "Links",
      },
      {
        id: "input-styles",
        label: "Input styles",
      },
    ];

    contentsEl.render();
  }
}

export default Tags;
customElements.define("wc-html-tags", Tags);
