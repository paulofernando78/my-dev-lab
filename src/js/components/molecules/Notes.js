import styleImports from "@css/styles.css?inline";

const style = /* css */ `
  div {
    border: 1px solid var(--yellow-4);
    padding: 5px;
    border-radius: var(--border-radius);
    background-color: var(--yellow-1)
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
      <div><p><slot></slot></p></div>
      `;
    }
  }

customElements.define("wc-notes", Notes);
export default Notes;