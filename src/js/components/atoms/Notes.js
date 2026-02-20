import styleImports from "@css/styles.css?inline";
import { attention } from "../../../assets/images/svg-imports";

const style = /* css */ `
  :host {
    background-color: var(--gray-7);
    border-radius: var(--border-radius);
    color: #fff;
  }
  
  .icon {
    padding: 5px 5px 5px 8px
  }

  .content {
    display: grid;
    gap: 1rem;
    padding: 5px;
    color:
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
      <div class="flex-align-center icon">
        ${attention()}
        <div class="content">
          <slot></slot>
        </div>
      </div>
      `;
    }
  }

customElements.define("wc-notes", Notes);
export default Notes;