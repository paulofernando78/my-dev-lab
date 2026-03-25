const e=`
  :host {
    display: block;
    height: 0.65rem;
  }
`;class t extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.shadowRoot.innerHTML=`
      <style>
        ${e}
      </style>
      <div></div>
    `}}customElements.define("wc-spacer",t);
