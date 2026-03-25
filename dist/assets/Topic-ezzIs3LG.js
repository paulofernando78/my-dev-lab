import{c as a}from"./index-BlILq7lZ.js";const o=`
  :host {
    scroll-margin-top: 5px
  }

  .label {
    background-color: var(--slate-4);
    color: white;
    border: 1px solid var(--slate-3);
    border-radius: 5px;
    padding: 4px 7px;
    font-size: 1.1rem;
    font-weight: bold
  }
`;function s(e=""){return e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}class r extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const l=this.getAttribute("label")??"",t=this.getAttribute("aria-label");this.shadowRoot.innerHTML=`
      <style>
        ${a}
        ${o}
      </style>
      <section ${t?`aria-label="${t}"`:""} class="line-break">
        <span class="label">${s(l)}</span>
        <slot></slot>
      </section>
    `}}customElements.define("wc-topic",r);
