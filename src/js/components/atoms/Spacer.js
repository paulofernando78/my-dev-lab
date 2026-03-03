const style = /* css */`
  :host {
    display: block;
    height: 0.65rem;
  }
`

class Spacer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }


  connectedCallback() {
    this.shadowRoot.innerHTML = /* html */`
      <style>
        ${style}
      </style>
      <div></div>
    `;
  }
}

customElements.define("wc-spacer", Spacer);