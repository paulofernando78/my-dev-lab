import{s as a}from"./styles-DlIJiwEK.js";const r=`
  :host {
    background-color: var(--slate-7);
    border-radius: var(--border-radius);
  }

  :host([variant="notes"]) img {
  filter: invert(24%) sepia(94%) saturate(7000%)
          hue-rotate(350deg) brightness(95%) contrast(120%);
}
  
  .container {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 10px;
    padding: 10px 9px;
    color: #fff;
  }

  img {
    grid-column: 1;
    grid-row: 1
  }

  span {
    grid-column: 2;
    grid-row: 1;
    align-self: center
  }

  .content {
    grid-column: 2;
    grid-row: 2
  }
`;class n extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const t=this.getAttribute("variant");let s="",e="";switch(t){case"description":s="/assets/images/icons/info.svg",e="Description";break;case"sample-answer":s="/assets/images/icons/text.svg",e="Sample answer";break;case"notes":s="/assets/images/icons/notes.svg",e="Notes";break;default:s="",e=""}this.shadowRoot.innerHTML=`
      <style>
        ${a}
        ${r}
      </style>
      <div class="container">
        <img src="${s}" alt="${t} icon" />
        <span><b>${e}</b></span>
        <div class="content">
          <slot></slot>
        </div>
      </div>
    `}}customElements.define("wc-card-icon",n);
