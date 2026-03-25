const e=`
  :host {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 5px;
    align-items: start;
  }

  @media (width < 876px) {
    :host {
      grid-template-columns: 1fr;
    }
  }
`;class t extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>
      ${e}
    </style>
    <slot></slot>
    `}}customElements.define("wc-wrapper",t);
