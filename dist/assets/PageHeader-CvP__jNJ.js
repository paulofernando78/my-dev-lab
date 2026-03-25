import{c as y,g as v,t as x,d as k,f as $,a as w,m as z}from"./index-BlILq7lZ.js";const M={HTML:{background:"#E44D25",color:"#fff",icon:"/assets/images/icons/html5.svg"},CSS:{background:"#673299",color:"#fff",icon:"/assets/images/icons/css.svg"},Javascript:{background:"#F0DB4F",icon:"/assets/images/icons/javascript.svg"},"Node JS":{background:"var(--green-7)",color:"#fff",icon:"/assets/images/icons/nodejs.svg"}};function R({global:p,tools:m,design:i,fullstackRoadmap:e,ai:a,misc:t}){function s(o,f,b){return(o??[]).flatMap(l=>l.categories??[]).flatMap(l=>(l[f]??[]).map(g=>({type:b,title:g.module??g.label,module:g.module??void 0,href:g.href,category:l.category,icon:l.icon}))).filter(l=>l.href)}const r=(p??[]).map(o=>({type:"global",title:o.label??o.module,href:o.href})),n=s(e,"modules","module"),c=s(m,"labels","misc"),d=s(i,"labels","design"),u=s(a,"labels","ai"),h=s(t,"labels","misc");return[...r,...c,...d,...n,...u,...h]}const S=`
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
`;class F extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const m=window.location.pathname,i=R({global:v,tools:x,design:k,fullstackRoadmap:$,ai:w,misc:z}),e=i.find(d=>d.href===m);if(!e)return;let a=null,t=null,s=null,r=null;const n={background:"var(--slate-2)",color:"#18191F"},c=e.type==="global"?n:M[e.category]??n;if(this.style.setProperty("--category-bg-color",c.background),this.style.setProperty("--category-color",c.color??n.color),e.type==="global")t=e.title;else if(e.type==="module"){const u=i.filter(o=>o.type==="module"&&o.category===e.category).filter(o=>o.title!=="Resources"),h=e.module==="Resources"?null:u.findIndex(o=>o.href===e.href)+1;a=e.category,e.module==="Resources"?t="Resources":(t=`Module ${h}`,s=e.module)}else(e.type==="tools"||e.type==="design"||e.type==="ai"||e.type==="misc")&&(a=e.category,t=e.title,r=c.icon??null);//! Modules (Full-Stack Roadmap)
this.shadowRoot.innerHTML=`
      <style>
        ${y}
        ${S}
      </style>

    <div class="page-header">
      <div>
        ${a?`<h2>${a}</h2>`:`<h2>${t}</h2>`}
        ${a?`<h3>${t}</h3>`:""}
        ${s?`<h4>${s}</h4>`:""}
      </div>
      ${r?`<img src="${r}" class="icons"/>`:""}
    </div>
`}}customElements.define("wc-page-header",F);export{M as c};
