import{f as m,s as h}from"./index-WhkxeUrP.js";import{c as v}from"./PageHeader-Bcrc5fxd.js";const u=`
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
`;class x extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const o=window.location.pathname;this.render(o)}render(o){const n=m.flatMap(s=>s.categories??[]).flatMap(s=>(s.modules??[]).map(e=>({...e,category:s.category}))).filter(s=>s.href),i=n.find(s=>s.href===o);if(!i)return;const f=s=>n.filter(e=>e.category===s&&e.module!=="Resources"),g=s=>f(s.category).findIndex(e=>e.href===s.href)+1,r=n.findIndex(s=>s.href===i.href),a=n[r-1],t=n[r+1],l=s=>s.module==="Resources"?s.module:`Module ${g(s)} • ${s.module}`,c=s=>v[s.category]??{},p=a?c(a):null,d=t?c(t):null;this.shadowRoot.innerHTML=`
      <style>
        ${h}
        ${u}
      </style>
      <hr />
      <nav>
        ${a?`
          <a href="${a.href}" class="previous">
          <img src="/assets/images/icons/arrow-back.svg" />
          <div>
            <span>Previous</span>
              <div class="icon-alighment">
                ${p?.icon?`<img src="${p.icon}"/>`:""}
                <span>${l(a)}</span>
              </div>
          </div>
        </a>
        `:"<span></span>"}
        ${t?`
          <a href="${t.href}" class="next">
          <div>
            <span>Next</span>
              <div class="icon-alighment">
              <span>${l(t)}</span>
                ${d?.icon?`<img src="${d.icon}"/>`:""}
              </div>
          </div>
          <img src="/assets/images/icons/arrow-forward.svg" />
        </a>
        `:"<span></span>"}
      </nav>
    `}}customElements.define("wc-lesson-nav",x);
