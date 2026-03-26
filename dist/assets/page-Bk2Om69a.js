import{s as i}from"./styles-D2zBeGTj.js";import"./PageHeader-DKxin07F.js";import"./Card-CD95VI4l.js";import"./Image-C4E2eAVl.js";import{f as l}from"./index-CJbI1lfT.js";const c=`

    .roadmap__icon {
      width: 30px
    }

    .home__card-header {
    border: 1px solid var(--slate-4);
    border-bottom: 0;
    border-radius: 5px 5px 0 0 ;
    background-color: var(--slate-6);
    padding: 11px 9px;
  }

  .home__card {
    border: 1px solid var(--slate-4);
    border-radius: 0 0 5px 5px;
    padding: 10px;
  }

  .home__card-icon-category--wrapper {
    display: flex;
    align-items: center;
    gap: 9px;
  }
  
  .home__card-icon-category {
    width: 25px;
  }
  
  .home__card-module-border {
    border-left: 3px solid var(--slate-4);
    padding-left: 5px
  }

  .home__card-module {
    font-size: 1.1rem
  }

  .home__category-separator {
    margin-block: 3px;
    border-color: var(--slate-4);
  }

  .home__category-separator:last-of-type {
    display: none
  }
`;class t extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
      <style>
        ${i}
        ${c}
      </style>
      <wc-sandbox></wc-sandbox>
      <section class="line-break" aria-label="My Dev Den">
        <wc-Image src="/assets/images/my-dev-den.png" alt="A pic of myself and my room"></wc-Image>
        <p>Welcome to my Dev Lab — a personal learning environment built with Web Components using a client-side rendered (CSR) SPA architecture. The curriculum follows a progressive cognitive load approach, where each module builds upon knowledge from the previous one, guiding learning step by step. It is organized into the following categories:</p>
        <div class="flex-align-center">
          <img src="/assets/images/icons/roadmap.svg" class="roadmap__icon"/>
          <h2>Full-Stack Roadmap</h2>
        </div>

        <div class="line-break">
          ${l.map(a=>`
            <div>
              <h3 class="home__card-header">${a.section}</h3>
              <div class="home__card line-break">
                ${a.categories.map(o=>{const s=o.modules.filter(e=>e.module).length-1;return`
                <div class="home__card-icon-category--wrapper">
                  <img src="${o.icon}" class="home__card-icon-category"/>
                  <h4 class="home__card-category">${o.category} • ${s} Modules</h4>
                </div>
  
                <ul class="line-break">
                  ${o.modules.map((e,d)=>{const r=d;return`
                    <li class="home__card-module-border">
                        ${r==0?`<h5 class="home__card-module">${e.module}</h5>`:`<h5 class="home__card-module">Module ${r} • ${e.module}</h5>`}
                      ${e.description?`
                        <p>${e.description}</p>`:""}
                    </li>
                    `}).join("")}
                </ul>
                <hr class="home__category-separator"/>
                `}).join("")}
              </div>
            </div>
            `).join("")}
        </div>
      </section>
    `}}customElements.define("wc-home",t);export{t as default};
