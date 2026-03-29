import{s as n}from"./index-WhkxeUrP.js";const r=`
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
`;class o extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>
      ${r}
    </style>
    <slot></slot>
    `}}customElements.define("wc-wrapper",o);const a=`
  li {
    margin-bottom: 0.4rem
  }

  a {
    text-decoration: none;
    padding-left: 2px;
    color: var(--text-color);
  }
`;class l extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}getLinks(){const t=this.getAttribute("data-links");if(!t)return[];try{return JSON.parse(decodeURIComponent(t))}catch{return[]}}render(){const t=this.getLinks();this.shadowRoot.innerHTML=`
      <style>
        ${n}
        ${a}
      </style>
      <ul>
        ${t.map(e=>`
          <li>
            <a href="${e.href}" target="_blank" rel="noopener"><b>${e.label}</b></a>
          </li>
        `).join("")}
      </ul>
    `}}customElements.define("wc-links",l);
