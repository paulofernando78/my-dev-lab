import{s as a}from"./styles-DqAceQQB.js";const r=`
  :host {
    background-color: var(--slate-8);
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
`;class i extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const t=this.getAttribute("variant");let e="",s="";switch(t){case"description":e="/assets/images/icons/info.svg",s="Description";break;case"sample-answer":e="/assets/images/icons/text.svg",s="Sample answer";break;case"preview":e="/assets/images/icons/preview.svg",s="Preview";break;case"notes":e="/assets/images/icons/notes.svg",s="Notes";break;default:e="",s=""}this.shadowRoot.innerHTML=`
      <style>
        ${a}
        ${r}
      </style>
      <div class="container">
        <img src="${e}" alt="${t} icon" />
        <span><b>${s}</b></span>
        <div class="content line-break">
          <slot></slot>
        </div>
      </div>
    `}}customElements.define("wc-card-icon",i);
