import styleImports from "@css/styles.css?inline";

const style = /* css */ `
  :host {
    border: 1px solid var(--yellow-4);
    border-radius: var(--border-radius);
    background-color: var(--yellow-1);
    color: var(--surface-text-color);
  }
  
  .content {
    display: grid;
    gap: 1rem;
    padding: 5px;
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
      <div class="content">
        <slot></slot>
      </div>
      `;
    }
  }

customElements.define("wc-notes", Notes);
export default Notes;