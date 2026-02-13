import styleImports from "@css/styles.css?inline";
import "../../js/components/molecules/Section.js";

const style = /* css */ `
  input {
    display: block
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
      <input type="color"/>
      <input type="range"/>
      <input type="file"/>
      <input type="reset"/>
      <input type="button"/>
      <input type="submit"/>
    </wc-section>

          
          
  
    `;
  }
}

export default Tags;
customElements.define("wc-html-tags", Tags);
