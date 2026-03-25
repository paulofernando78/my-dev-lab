import{c as o}from"./index-BlILq7lZ.js";const a=`
  :host {
    scroll-margin-top: 5px
  }  

  .card-container {
    padding: 10px; 
    color: #fff;
    background-color: var(--gray-7);
    border-radius: 5px;
  }
`;class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const t=this.getAttribute("cardLabel");this.shadowRoot.innerHTML=`
      <style>
        ${o}
        ${a}

        
      </style>
      ${t?`<div class="label">${t}</div>`:""}
      <div class="card-container">
        <slot></slot>
      </div>
    `}}customElements.define("wc-card",e);
