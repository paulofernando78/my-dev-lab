import{c as h,f as x}from"./index-Dc8t_vK0.js";import{s as u}from"./styles-DlIJiwEK.js";import{c as v}from"./PageHeader-D9g-7skL.js";const b=`
  :host {
    scroll-margin-top: 5px
  }  

  .icon {
    width: 20px
  }

  .label {
    display: flex;
    align-items: center;
    gap: 5px;

    width: max-content;
    padding: 5px 6px 5px 5px;
    font-weight: bold;

    color: #fff;
    background-color: var(--gray-7);
    border-radius: 5px 5px 0 0;
    border-bottom: 0px;
  }

  .card-container {
    padding: 5px; 

    color: #fff;
    background-color: var(--gray-7);
    border-radius: 0 5px 5px 5px;
  }
`;class y extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const a=this.getAttribute("cardLabelIcon"),s=this.getAttribute("cardLabel");this.shadowRoot.innerHTML=`
      <style>
        ${h}
        ${b}

        
      </style>
      ${s?`
        <div class="label">
          <img src="${a}" class="icon"/>
          ${s}
        </div>`:""}
      <div class="card-container">
        <slot></slot>
      </div>
    `}}customElements.define("wc-card-code",y);const $=`
  nav {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px
  }

  nav a {
    color: var(--text-color)
  }

  nav a:hover {
    color: var(--blue-4)
  }

  img {
    width: 30px
  }

  .previous, .next {
    display: flex;
    gap: 5px;
  }
  
  .next {
  justify-self: end
  }

  .next > div {
    text-align: right
  }
  
  .previous span,
  .next span {
    display: block;
  }

  .previous span:first-child {
    font-size: 0.9rem;
    color: var(--slate-4);
    margin-bottom: 8px
  }

  .next span:first-child {
    font-weight: bold;
    margin-bottom: 8px
  }

  .previous span:last-child,
  .next span:last-child {
    font-weight: bold;
  }

  .icon-alighment {
    display: flex;
    align-items: start;
    gap: 10px;
  }

  img {
    width: 20px
  }
`;class w extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const a=window.location.pathname;this.render(a)}render(a){const s=x.flatMap(e=>e.categories??[]).flatMap(e=>(e.modules??[]).map(t=>({...t,category:e.category}))).filter(e=>e.href),r=s.find(e=>e.href===a);if(!r)return;const f=e=>s.filter(t=>t.category===e&&t.module!=="Resources"),m=e=>f(e.category).findIndex(t=>t.href===e.href)+1,i=s.findIndex(e=>e.href===r.href),o=s[i-1],n=s[i+1],c=e=>e.module==="Resources"?e.module:`Module ${m(e)} • ${e.module}`,l=e=>v[e.category]??{},d=o?l(o):null,p=n?l(n):null;this.shadowRoot.innerHTML=`
      <style>
        ${u}
        ${$}
      </style>
      <hr />
      <nav>
        ${o?`
          <a href="${o.href}" class="previous">
          <img src="/assets/images/icons/arrow-back.svg" />
          <div>
            <span>Previous</span>
              <div class="icon-alighment">
                ${d?.icon?`<img src="${d.icon}"/>`:""}
                <span>${c(o)}</span>
              </div>
          </div>
        </a>
        `:"<span></span>"}
        ${n?`
          <a href="${n.href}" class="next">
          <div>
            <span>Next</span>
              <div class="icon-alighment">
              <span>${c(n)}</span>
                ${p?.icon?`<img src="${p.icon}"/>`:""}
              </div>
          </div>
          <img src="/assets/images/icons/arrow-forward.svg" />
        </a>
        `:"<span></span>"}
      </nav>
    `}}customElements.define("wc-lesson-nav",w);
