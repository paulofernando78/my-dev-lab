import{s as t}from"./styles-D2zBeGTj.js";import"./PageHeader-DKxin07F.js";import{r as a,s as o}from"./renderSection-DyoUKUCK.js";import"./CardIcon-BpS4dru2.js";import"./SubSection-DF8fSDKq.js";import"./Links-FCbr7Lwo.js";import"./Image-C4E2eAVl.js";import"./CardCode-yhvPs5fJ.js";import"./Code-fMuPM1Lh.js";import"./Demo-Ci2l3BAP.js";import"./LessonNav-Bi30Oqwd.js";import"./index-CJbI1lfT.js";const s=`
  .box {
    background-color: blue;
    width: 100px;
    height: 100px
  }
`;class i extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const e=[{sectionId:"whats-it",sectionLabel:"What’s it?",sectionAriaLabel:"What’s it?",description:`
            <p>Description</p>
            <p>Description</p>
        `},{sectionId:"html",sectionLabel:"HTML",sectionAriaLabel:"HTML block",cardCodes:[{type:"code",cardLabel:"HTML",language:"html",code:`
<span>...</span>
            `,preview:()=>`
              <span>...</span>
            `,notes:`
                <p>Notes</p>
                <p>Notes</p>
            `}]},{sectionId:"css",sectionLabel:"CSS",sectionAriaLabel:"CSS block",cardCodes:[{type:"code",cardLabel:"CSS",language:"css",code:`
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
            `}]},{sectionId:"javascript",sectionLabel:"Javascript",sectionAriaLabel:"Javascript block",cardCodes:[{type:"code",cardLabel:"Javascript",language:"js",code:`
console.log(...)
            `,preview:()=>`
              console.log(...)
            `,notes:`
              <p>Notes</p>
            `}]},{sectionId:"snippet",sectionLabel:"Snippet",sectionAriaLabel:"...",cardCodes:[{type:"snippet",cardLabel:"Snippet (Image + Text)",image:"/assets/images/semantic.jpg",description:`
              <p>Description</p>
            `}]},{sectionId:"links",sectionLabel:"Links",sectionAriaLabel:"Links",links:[{href:"www.google.com",title:"link"}]}];this.shadowRoot.innerHTML=`
      <style>
        ${t}
        ${s}
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

      <div class="line-break">${a(e)}</div>
    `,o(this.shadowRoot,e)}}customElements.define("wc-git-module-one",i);export{i as default};
