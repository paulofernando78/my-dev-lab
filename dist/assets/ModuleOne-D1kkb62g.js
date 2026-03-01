import{s as a}from"./styles-DlIJiwEK.js";import"./PageHeader-D9g-7skL.js";import{r as t,s}from"./renderSection-CSqRZScD.js";import"./Card-ejHzky1x.js";import"./Links-jvN2lMqa.js";import"./index-Dc8t_vK0.js";const o=`
  .box {
    background-color: blue;
    width: 100px;
    height: 100px
  }
`;class i extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const e=[{sectionId:"whats-it",sectionLabel:"What’s it?",sectionAriaLabel:"What’s it?",description:`
            <p>Description</p>
            <p>Description</p>
        `},{sectionId:"html",sectionLabel:"HTML",sectionAriaLabel:"HTML block",examples:[{type:"code",cardLabel:"HTML",language:"html",code:`
<span>...</span>
            `,preview:()=>`
              <span>...</span>
            `,notes:`
                <p>Notes</p>
                <p>Notes</p>
            `}]},{sectionId:"css",sectionLabel:"CSS",sectionAriaLabel:"CSS block",examples:[{type:"code",cardLabel:"CSS",language:"css",code:`
.box {
  background-color: blue;
  width: 100px;
  height: 100px
}
            `,preview:()=>`
              <div class="box">
              </div>
            `,notes:`
              <p>Notes</p>
            `}]},{sectionId:"javascript",sectionLabel:"Javascript",sectionAriaLabel:"Javascript block",examples:[{type:"code",cardLabel:"Javascript",language:"js",code:`
console.log(...)
            `,preview:()=>`
              console.log(...)
            `,notes:`
              <p>Notes</p>
            `}]},{sectionId:"snippet",sectionLabel:"Snippet",sectionAriaLabel:"...",examples:[{type:"snippet",cardLabel:"Snippet (Image + Text)",image:"/assets/images/semantic.jpg",description:`
              <p>Description</p>
            `}]},{sectionId:"links",sectionLabel:"Links",sectionAriaLabel:"Links",links:[{href:"www.google.com",title:"link"}]}];this.shadowRoot.innerHTML=`
      <style>
        ${a}
        ${o}
      </style>

      <wc-page-header
        category="Random"
        page="..."
        unit="..."
        aria-label="..."
      ></wc-page-header>
      <wc-page-header
        category="HTML"
        page="..."
        unit="..."
        aria-label="..."
      ></wc-page-header>
      <wc-page-header
        category="CSS"
        page="..."
        unit="..."
        aria-label="..."
      ></wc-page-header>
      <wc-page-header
        category="Javascript"
        page="..."
        unit="..."
        aria-label="..."
      ></wc-page-header>

      <wc-contents></wc-contents>

      <div class="line-break">${t(e)}</div>
    `,s(this.shadowRoot,e)}}customElements.define("wc-git-module-one",i);export{i as default};
