import{s as n}from"./styles-DlIJiwEK.js";const o=`
  li {
    margin-bottom: 0.4rem
  }

  a {
    text-decoration: none;
    padding-left: 2px;
    color: var(--text-color);
  }
`;class r extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}getLinks(){const t=this.getAttribute("data-links");if(!t)return[];try{return JSON.parse(decodeURIComponent(t))}catch{return[]}}render(){const t=this.getLinks();this.shadowRoot.innerHTML=`
      <style>
        ${n}
        ${o}
      </style>
      <ul>
        ${t.map(e=>`
          <li>
            <a href="${e.href}" target="_blank" rel="noopener"><b>${e.label}</b></a>
          </li>
        `).join("")}
      </ul>
    `}}customElements.define("wc-links",r);
