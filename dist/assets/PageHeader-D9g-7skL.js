import{c as p,g as u,f as m,m as y}from"./index-Dc8t_vK0.js";const b={HTML:{background:"#E44D25",color:"#fff",icon:"/assets/images/icons/html5.svg"},CSS:{background:"#673299",color:"#fff",icon:"/assets/images/icons/css.svg"},Javascript:{background:"#F0DB4F",icon:"/assets/images/icons/javascript.svg"},"Node JS":{background:"var(--green-7)",color:"#fff",icon:"/assets/images/icons/nodejs.svg"}};function v({global:d,fullstackRoadmap:i,misc:r}){const o=(d??[]).map(e=>({type:"global",title:e.label,href:e.href})),l=(i??[]).flatMap(e=>e.categories??[]).flatMap(e=>(e.modules??[]).map(t=>({type:"module",title:t.module,module:t.module,href:t.href,category:e.category,icon:e.icon}))).filter(e=>e.href),a=(r??[]).flatMap(e=>e.categories??[]).flatMap(e=>(e.labels??[]).map(t=>({type:"misc",title:t.label,href:t.href,category:e.category,icon:e.icon}))).filter(e=>e.href);return[...o,...l,...a]}const x=`
  .page-header {
    background-color: var(--category-bg-color);
    border-radius: 5px;
    width: 100%;
    margin-bottom: 32px;
    padding: 12px;
    position: relative;
  }
  
  .page-header h2,
  .page-header h3,
  .page-header h4 {
    font-family: "Archivo Black", sans-serif;
    font-weight: 500;
    color: var(--category-color);
  }

  .icons {
    position: absolute;
    bottom: -15px;
    right: 20px;
    width: 40px;
    height: auto;

    filter: drop-shadow(0px 0px 1px black);
  }

  hr {
    margin-bottom: 16px;
    margin-inline: 10px;
    border-color: var(--slate-6)
  }
`;class k extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const i=window.location.pathname,r=v({global:u,fullstackRoadmap:m,misc:y}),o=r.find(g=>g.href===i);if(!o)return;let l=null,a=null,e=null,t=null;const n={background:"var(--slate-2)",color:"#18191F"},c=o.type==="global"?n:b[o.category]??n;if(this.style.setProperty("--category-bg-color",c.background),this.style.setProperty("--category-color",c.color??n.color),o.type==="global")a=o.title;else if(o.type==="module"){const f=r.filter(s=>s.type==="module"&&s.category===o.category).filter(s=>s.title!=="Resources"),h=o.module==="Resources"?null:f.findIndex(s=>s.href===o.href)+1;l=o.category,o.module==="Resources"?a="Resources":(a=`Module ${h}`,e=o.module),t=c.icon??null}else o.type==="misc"&&(l=o.category,a=o.title,t=c.icon??null);//! Modules (Full-Stack Roadmap)
this.shadowRoot.innerHTML=`
      <style>
        ${p}
        ${x}
      </style>

    <div class="page-header">
      <div>
        ${l?`<h2>${l}</h2>`:`<h2>${a}</h2>`}
        ${l?`<h3>${a}</h3>`:""}
        ${e?`<h4>${e}</h4>`:""}
      </div>
      ${t?`<img src="${t}" class="icons"/>`:""}
    </div>
`}}customElements.define("wc-page-header",k);export{b as c};
