import styleImports from "@css/styles.css?inline";
import { attention } from "../../../assets/images/svg-imports";

const style = /* css */ `
  :host {
    background-color: var(--gray-7);
    border-radius: var(--border-radius);
    color: #fff;
  }
  
  .container {
    padding: 10px;
    display: flex;
    gap: 10px
  }
`;

class Notes extends HTMLElement {
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
      <div class="container">
        ${attention()}
        <div class="line-break">
          <slot></slot>
        </div>
      </div>
      `;
    }
  }

customElements.define("wc-notes", Notes);
export default Notes;