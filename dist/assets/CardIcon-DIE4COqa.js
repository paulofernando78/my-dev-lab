import{s as a}from"./index-WhkxeUrP.js";const i=`
  :host {
    background-color: var(--slate-8);
    border-radius: var(--border-radius);
  }

  :host([variant="notes"]) img {
  filter:
  invert(24%)
  sepia(94%)
  saturate(7000%)
  hue-rotate(350deg)
  brightness(95%)
  contrast(120%);
  }
  
  .container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px 9px;
    color: #fff;
  }

  .content {
    padding: 5px
  }
`;class n extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const t=this.getAttribute("variant");let e="",s="";switch(t){case"description":e="/assets/images/icons/info.svg",s="Description";break;case"sample-answer":e="/assets/images/icons/text.svg",s="Sample answer";break;case"preview":e="/assets/images/icons/preview.svg",s="Preview";break;case"notes":e="/assets/images/icons/notes.svg",s="Notes";break;default:e="",s=""}this.shadowRoot.innerHTML=`
      <style>
        ${a}
        ${i}
      </style>
      <div class="container">
        <div class="flex-align-center">
          <img src="${e}" alt="${t} icon" />
          <span><b>${s}</b></span>
        </div>
        <div class="content line-break">
          <slot></slot>
        </div>
      </div>
    `}}customElements.define("wc-card-icon",n);
