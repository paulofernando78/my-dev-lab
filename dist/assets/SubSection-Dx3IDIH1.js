import{c as l}from"./index-WhkxeUrP.js";const s=`
  :host {
    scroll-margin-top: 5px
  }

  .label {
    background-color: var(--slate-5);
    color: white;
    border: 1px solid var(--slate-4);
    border-radius: 5px;
    padding: 4px 7px;
    font-size: 1.1rem;
    font-weight: bold
  }
`;function o(e=""){return e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}class r extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const t=this.getAttribute("label")??"";this.shadowRoot.innerHTML=`
      <style>
        ${l}
        ${s}
      </style>
      <section class="line-break">
        <span class="label">${o(t)}</span>
        <slot></slot>
      </section>
    `}}customElements.define("wc-sub-section",r);
